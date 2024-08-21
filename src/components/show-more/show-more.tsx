import { useAppDispatch, useAppSelector } from '../../hooks';
import { store } from '../../store';
import { setNumberOfFilms } from '../../store/action';

type ShowMoreProps = {
  filmsLength: number;
};

export const ShowMore = ({ filmsLength }: ShowMoreProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const numberOfFilms = useAppSelector((state) => state.numberOfFilms);

  const handelPressButton = () => {
    dispatch(setNumberOfFilms(numberOfFilms + 8));
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {filmsLength > store.getState().numberOfFilms && (
        <div className="catalog__more">
          <button className="catalog__button" type="button" onClick={handelPressButton}>
            Show more
          </button>
        </div>
      )}
    </>
  );
};
