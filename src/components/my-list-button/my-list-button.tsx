type MyListButtonProps = {
  isFavorite: boolean;
  onClick: () => void;
};

export const MyListButton = ({ isFavorite, onClick }: MyListButtonProps): JSX.Element => (
  <button className="btn btn--list film-card__button" onClick={onClick}>
    <svg viewBox="0 0 19 20" width={19} height={20}>
      <use xlinkHref={!isFavorite ? '#add' : '#in-list'} />
    </svg>
    <span>My list</span>
  </button>
);
