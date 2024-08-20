import { Film, Review } from '../../../types/types';

type ReviewsProps = {
  film: Film;
};

const chunkArray = (array: Review[], chunkSize: number) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

export const Reviews = ({ film }: ReviewsProps): JSX.Element => {
  const reviewChunks = chunkArray(film.reviews, 3);

  return (
    <div className="film-card__reviews film-card__row">
      {reviewChunks.map((chunk, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="film-card__reviews-col" key={index}>
          {chunk.map((review) => (
            <div className="review" key={review.id}>
              <blockquote className="review__quote">
                <p className="review__text">{review.text}</p>
                <footer className="review__details">
                  <cite className="review__author">{review.name}</cite>
                  <time
                    className="review__date"
                    dateTime={review.date.toISOString()}
                  >
                    {review.date.toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </footer>
              </blockquote>
              <div className="review__rating">{review.rating}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
