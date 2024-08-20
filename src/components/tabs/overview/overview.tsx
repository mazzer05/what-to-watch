import { Film } from '../../../types/types';

type OverviewProps = {
  film: Film;
};

export const Overview = ({ film }: OverviewProps): JSX.Element => (
  <div>
    <div className="film-rating">
      <div className="film-rating__score">{film.rating}</div>
      <p className="film-rating__meta">
        <span className="film-rating__level">{film.ratingType}</span>
        <span className="film-rating__count">240 ratings</span>
      </p>
    </div>
    <div className="film-card__text">
      <p>{film.description}</p>
      <p className="film-card__director">
        <strong>Director: {film.director}</strong>
      </p>
      <p className="film-card__starring">
        <strong>
          Starring:{' '}
          {film.starring.length < 4
            ? film.starring.slice(0, film.starring.length).join(', ')
            : `${film.starring.slice(0, 4).join(', ')} and other`}
        </strong>
      </p>
    </div>
  </div>
);
