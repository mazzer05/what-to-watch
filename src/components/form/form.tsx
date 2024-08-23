import { ChangeEvent, FormEvent, Fragment, useRef, useState } from 'react';
import { AppRoutes, STARS_COUNT } from '../../const';
import { useAppDispatch } from '../../hooks';
import { useParams } from 'react-router-dom';
import { putComments } from '../../store/api-action';
import { redirectToRoute } from '../../store/action';

type Review = {
  filmId: string;
  comment: string;
  rating: number;
};

export const Form = (): JSX.Element => {
  const comment = useRef<HTMLTextAreaElement | null>(null);
  const [rating, setRating] = useState<number | null>(null);

  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const onSubmit = (review: Review) => {
    if (id) {
      dispatch(putComments(review));
      dispatch(redirectToRoute(`${AppRoutes.Film}/${id}`));
    }
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (comment.current !== null && rating !== null) {
      if (id) {
        onSubmit({
          filmId: id.toString(),
          comment: comment.current.value,
          rating: rating,
        });
      }
    }
  };

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {Array.from({ length: STARS_COUNT }, (_, i) => (
            <Fragment key={`Star ${STARS_COUNT - i}`}>
              <input
                className="rating__input"
                id={`star-${STARS_COUNT - i}`}
                type="radio"
                name="rating"
                defaultValue={STARS_COUNT - i}
                checked={STARS_COUNT - i === Number(rating)}
                onChange={handleRatingChange}
              />
              <label className="rating__label" htmlFor={`star-${STARS_COUNT - i}`}>
                Rating {STARS_COUNT - i}
              </label>
            </Fragment>
          ))}
        </div>
      </div>
      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          ref={comment}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">
            Post
          </button>
        </div>
      </div>
    </form>
  );
};
