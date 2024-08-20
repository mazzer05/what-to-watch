import { films } from '../../mocks/films';
import { Film } from '../../types/types';
import { FilmsList } from '../film-list/film-list';

type MoreLikeThisProps = {
  curFilm: Film;
};

export const MoreLikeThis = ({ curFilm }: MoreLikeThisProps): JSX.Element => {
  const similarFilms = films.filter(
    (film) => film.genre === curFilm.genre && film.id !== curFilm.id
  );

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <FilmsList films={similarFilms.slice(0, 4)} />
    </section>
  );
};
