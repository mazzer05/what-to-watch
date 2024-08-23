import { Film } from '../../types/types';

type VideoPlayerProps = {
  film: Film;
};

export const VideoPlayer = ({ film }: VideoPlayerProps): JSX.Element => (
  <video
    className="player__video"
    src={film.videoLink}
    autoPlay
    muted
    poster={film.previewImage}
  />
);
