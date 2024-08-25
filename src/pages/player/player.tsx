import { useParams } from 'react-router-dom';
import { AppRoutes } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { redirectToRoute } from '../../store/action';
import { getFilm, getIsDataLoaded } from '../../store/films-data/selectors';
import { useEffect, useRef, useState } from 'react';
import { fetchFilm } from '../../store/api-action';
import { Spinner } from '../../components/spinner/spinner';
import { Film } from '../../types/types';

export const Player = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const film: Film | null = useAppSelector(getFilm);
  const isLoading = useAppSelector(getIsDataLoaded);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [showRemainingTime, setShowRemainingTime] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleFullScreen = () => {
    if (playerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        playerRef.current.requestFullscreen();
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && !isDragging) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && progressRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const clickPosition = event.clientX - rect.left;
      const newTime = (clickPosition / rect.width) * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (isDragging && videoRef.current && progressRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const dragPosition = event.clientX - rect.left;
      const newTime = Math.max(0, Math.min((dragPosition / rect.width) * duration, duration));
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  const toggleTimeDisplay = () => {
    setShowRemainingTime(!showRemainingTime);
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchFilm({ id }));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  if (isLoading) {
    return <Spinner />;
  } else {
    if (!film) {
      return <p>Film not found</p>;
    } else {
      return (
        <>
          <div className="visually-hidden">
            {/* inject:svg */}
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <symbol id="add" viewBox="0 0 19 20">
                {/* Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch */}
                <title>+</title>
                <desc>Created with Sketch.</desc>
                {/* ... */}
              </symbol>
            </svg>
            {/* endinject */}
          </div>
          <div className="player" ref={playerRef}>
            <video
              src={film.videoLink}
              ref={videoRef}
              className="player__video"
              poster={film.backgroundImage}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onClick={handlePlayPause}
              onEnded={handleVideoEnd}
            />
            <button
              type="button"
              className="player__exit"
              onClick={() => dispatch(redirectToRoute(`${AppRoutes.Film}/${film.id}`))}
            >
              Exit
            </button>
            <div className="player__controls">
              <div className="player__controls-row">
                <div
                  className="player__time"
                  ref={progressRef}
                  onClick={handleProgressClick}
                  onMouseDown={handleMouseDown}
                >
                  <progress className="player__progress" value={currentTime} max={duration} />
                  <div className="player__toggler" style={{ left: `${(currentTime / duration) * 100}%` }}>
                    Toggler
                  </div>
                </div>
                <div className="player__time-value" onClick={toggleTimeDisplay}>
                  {showRemainingTime
                    ? `-${new Date((duration - currentTime) * 1000).toISOString().substr(11, 8)}`
                    : new Date(currentTime * 1000).toISOString().substr(11, 8)}
                </div>
              </div>
              <div className="player__controls-row">
                <button type="button" className="player__play" onClick={handlePlayPause}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref={isPlaying ? '#pause' : '#play-s'} />
                  </svg>
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                </button>
                <div className="player__name">{film.name}</div>
                <button type="button" className="player__full-screen" onClick={handleFullScreen}>
                  <svg viewBox="0 0 27 27" width={27} height={27}>
                    <use xlinkHref="#full-screen" />
                  </svg>
                  <span>Full screen</span>
                </button>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
};
