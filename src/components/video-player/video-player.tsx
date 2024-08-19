import { Film } from '../../types/types';

type VideoPlayerProps = {
  film: Film;
};

export const VideoPlayer = ({ film }: VideoPlayerProps): JSX.Element => (
  <video
    className="player__video"
    src={film.srcVideo}
    autoPlay
    muted
    poster={film.previewImage}
  />
);
