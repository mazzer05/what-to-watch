import { GenreTitle } from '../../types/types';

type GenreProps = {
  name: GenreTitle;
  isActive: boolean;
  onClick: (genre: GenreTitle) => void;
};

export const Genre = ({ name, isActive, onClick }: GenreProps): JSX.Element => {
  const handleGenreClick = () => {
    onClick(name);
  };

  return (
    <li className={`catalog__genres-item ${isActive ? 'catalog__genres-item--active' : ''}`} onClick={handleGenreClick}>
      <a className="catalog__genres-link">{name}</a>
    </li>
  );
};
