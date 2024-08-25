import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setGenre } from '../../store/films-data/films-data';
import { getFilms, getGenre } from '../../store/films-data/selectors';
import Genre from '../genre/genre';

export const GenresList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector(getGenre);
  const films = useAppSelector(getFilms);

  const handleGenreClick = useCallback(
    (genre: string) => {
      dispatch(setGenre(genre));
    },
    [dispatch]
  );

  const genresTitlesSet = new Set<string>();
  genresTitlesSet.add('All genres');
  films.map((film) => genresTitlesSet.add(film.genre));
  const genresTitles = Array.from(genresTitlesSet);

  return (
    <ul className="catalog__genres-list">
      {genresTitles.map((genre) => (
        <Genre key={genre} name={genre} isActive={genre === activeGenre} onClick={handleGenreClick} />
      ))}
    </ul>
  );
};
