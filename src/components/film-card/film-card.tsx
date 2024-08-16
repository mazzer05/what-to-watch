import { Link } from 'react-router-dom';
import { Film } from '../../types/types';
import { AppRoutes } from '../../const';

type FilmCardProps = {
  film: Film;
  onMouseMove?: (id: number) => void;
  onMouseLeave?: () => void;
};

export const FilmCard = ({
  film,
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
        <img
          src={film.previewImage}
          alt="Fantastic Beasts: The Crimes of Grindelwald"
          width={280}
          height={175}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to={`${AppRoutes.Film}/${film.id}`}
        >
          {film.title}
        </Link>
      </h3>
    </article>
  );
};
