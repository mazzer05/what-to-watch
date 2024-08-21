import { useRef, useState } from 'react';
import { Film } from '../../types/types';
import { FilmCard } from '../film-card/film-card';
type FilmsListProps = {
  films: Film[];
};

export const FilmsList = ({ films }: FilmsListProps): JSX.Element => {
  const [activeFilm, setActiveFilm] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleFilmMouseMove = (id: number) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      if (activeFilm !== id) {
        setActiveFilm(id);
      }
    }, 1000);
  };

  const handleFilmMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setActiveFilm(null);
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          film={film}
          isActive={film.id === activeFilm}
          onMouseMove={handleFilmMouseMove}
          onMouseLeave={handleFilmMouseLeave}
        />
      ))}
    </div>
  );
};
