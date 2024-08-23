import { Film } from '../../../types/types';

type OverviewProps = {
  film: Film;
};

const getRatingDescription = (rating: number): string => {
  if (rating >= 9) {
    return 'Perfect';
  } else if (rating >= 8) {
    return 'Very good';
  } else if (rating >= 7) {
    return 'Good';
  } else if (rating >= 5) {
    return 'Average';
  } else {
    return 'Bad';
  }
};

export const Overview = ({ film }: OverviewProps): JSX.Element => (
  <div>
    <div className="film-rating">
      <div className="film-rating__score">{film.rating}</div>
      <p className="film-rating__meta">
        <span className="film-rating__level">{getRatingDescription(film.rating)}</span>
        <span className="film-rating__count">{`${film.scoresCount} ratings`}</span>
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
