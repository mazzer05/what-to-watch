import { useAppDispatch, useAppSelector } from '../../hooks';
import { setNumberOfFilms } from '../../store/films-data/films-data';
import { getNumberOfFilms } from '../../store/films-data/selectors';

type ShowMoreProps = {
  filmsLength: number;
};

export const ShowMore = ({ filmsLength }: ShowMoreProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const numberOfFilms = useAppSelector(getNumberOfFilms);

  const handelPressButton = () => {
    dispatch(setNumberOfFilms(numberOfFilms + 8));
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {filmsLength > numberOfFilms && (
        <div className="catalog__more">
          <button className="catalog__button" type="button" onClick={handelPressButton}>
            Show more
          </button>
        </div>
      )}
    </>
  );
};
