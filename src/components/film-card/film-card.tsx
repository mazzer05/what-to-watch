import { Link } from 'react-router-dom';
import { Film } from '../../types/types';
import { AppRoutes } from '../../const';
import { VideoPlayer } from '../video-player/video-player';

type FilmCardProps = {
  film: Film;
  isActive: boolean;
  onMouseMove?: (id: number) => void;
  onMouseLeave?: () => void;
};

export const FilmCard = ({
  film,
  isActive = false,
  onMouseMove = () => void 0,
  onMouseLeave = () => void 0,
}: FilmCardProps): JSX.Element => {
  const handleMouseMove = () => {
    onMouseMove(film.id);
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-film-card__image">
        {isActive ? (
          <VideoPlayer film={film} />
        ) : (
          <img
            src={film.previewImage}
            alt={film.name}
            width={280}
            height={175}
          />
        )}
      </div>
      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to={`${AppRoutes.Film}/${film.id}`}
        >
          {film.name}
        </Link>
      </h3>
    </article>
  );
};
