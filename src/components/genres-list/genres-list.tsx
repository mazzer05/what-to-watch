import { genresTitles } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setGenre } from '../../store/action';
import { GenreTitle } from '../../types/types';
import { Genre } from '../genre/genre';

export const GenresList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector((state) => state.genre);

  const handleGenreClick = (genre: GenreTitle) => {
    dispatch(setGenre(genre));
  };

  return (
    <ul className="catalog__genres-list">
      {genresTitles.map((genre) => (
        <Genre key={genre} name={genre} isActive={genre === activeGenre} onClick={handleGenreClick} />
      ))}
    </ul>
  );
};
