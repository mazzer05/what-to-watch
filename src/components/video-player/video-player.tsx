import { Film } from '../../types/types';

type VideoPlayerProps = {
  film: Film;
};

export const VideoPlayer = ({ film }: VideoPlayerProps): JSX.Element => (
  <video
    className="small-film-card__image"
    src={film.srcVideo}
    autoPlay
    muted
    poster={film.previewImage}
  />
);
