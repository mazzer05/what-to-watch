import { AuthenticationStatus } from '../const';
import { store } from '../store';
import { Film, Comment } from './types';

export type UserProcess = {
  avatarUrl: string;
  name: string;
  authorizationStatus: AuthenticationStatus;
};

export type FilmData = {
  films: Film[];
  genre: string;
  film: Film | null;
  promoFilm: Film | null;
  comments: Comment[];
  isDataLoaded: boolean;
  numberOfFilms: number;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
