import { Comment } from '../../../types/types';

type ReviewsProps = {
  comments: Comment[];
};

const chunkArray = (array: Comment[], chunkSize: number) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(dateString).toLocaleDateString('en-EU', options);
};

export const Reviews = ({ comments }: ReviewsProps): JSX.Element => {
  const reviewChunks = chunkArray(comments, 3);

  return (
    <div className="film-card__reviews film-card__row">
      {reviewChunks.map((chunk, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="film-card__reviews-col" key={index}>
          {chunk.map((comment) => (
            <div className="review" key={comment.id}>
              <blockquote className="review__quote">
                <p className="review__text">{comment.comment}</p>
                <footer className="review__details">
                  <cite className="review__author">{comment.user.name}</cite>
                  <time className="review__date" dateTime={comment.date}>
                    {formatDate(comment.date)}
                  </time>
                </footer>
              </blockquote>
              <div className="review__rating">{comment.rating}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
