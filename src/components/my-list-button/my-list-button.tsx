import { useState } from 'react';
import { Film } from '../../types/types';
import { useAppDispatch } from '../../hooks';
import { fetchFilm, fetchPromo, putIsFavorite } from '../../store/api-action';

type MyListButtonProps = {
  film: Film;
};

export const MyListButton = ({ film }: MyListButtonProps): JSX.Element => {
  const [isFavorite, setIsFavorite] = useState(film.isFavorite);
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    if (isFavorite) {
      setIsFavorite(false);
      dispatch(putIsFavorite({ filmId: film.id.toString(), status: 0 }));
      fetchFilm({ id: film.id.toString() });
      fetchPromo();
    } else {
      setIsFavorite(true);
      dispatch(putIsFavorite({ filmId: film.id.toString(), status: 1 }));
      fetchFilm({ id: film.id.toString() });
      fetchPromo();
    }
  };

  return (
    <button className="btn btn--list film-card__button" onClick={handleOnClick}>
      <svg viewBox="0 0 19 20" width={19} height={20}>
        <use xlinkHref={!isFavorite ? '#add' : '#in-list'} />
      </svg>
      <span>My list</span>
    </button>
  );
};
