import { AuthenticationStatus, genresTitles } from '../const';
import { Film, GenreTitle, Comment } from '../types/types';
import { createReducer } from '@reduxjs/toolkit';
import {
  requireAuthorization,
  setDataLoadedStatus,
  setFilm,
  setFilms,
  setGenre,
  setNumberOfFilms,
  setPromo,
  setComments,
} from './action';

type State = {
  genre: GenreTitle;
  films: Film[];
  numberOfFilms: number;
  authorizationStatus: AuthenticationStatus;
  isDataLoaded: boolean;
  film: Film | null;
  promoFilm: Film | null;
  comments: Comment[];
};

const initialState: State = {
  genre: genresTitles[0],
  films: [],
  numberOfFilms: 8,
  authorizationStatus: AuthenticationStatus.Unknown,
  isDataLoaded: false,
  film: null,
  promoFilm: null,
  comments: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.numberOfFilms = 8;
      state.genre = action.payload;
    })
    .addCase(setFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setPromo, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(setComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setNumberOfFilms, (state, action) => {
      state.numberOfFilms = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    });
});
