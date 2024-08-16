import { useState } from 'react';
import { Film } from '../../types/types';
import { FilmCard } from '../film-card/film-card';

type FilmsListProps = {
  films: Film[];
};

export const FilmsList = ({ films }: FilmsListProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeFilm, setActiveFilm] = useState<number | null>(null);

  const handleFilmMouseMove = (id: number) => {
    setActiveFilm(id);
  };

  const handleFilmMouseLeave = () => {
    setActiveFilm(null);
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          film={film}
          onMouseMove={handleFilmMouseMove}
          onMouseLeave={handleFilmMouseLeave}
        />
      ))}
    </div>
  );
};
