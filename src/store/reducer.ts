import { genresTitles } from '../const';
import { films } from '../mocks/films';
import { Film, GenreTitle } from '../types/types';
import { createReducer } from '@reduxjs/toolkit';
import { setFilms, setGenre, setNumberOfFilms } from './action';

type State = {
  genre: GenreTitle;
  films: Film[];
  numberOfFilms: number;
};

const initialState: State = {
  genre: genresTitles[0],
  films: films,
  numberOfFilms: 8,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setGenre, (state, action) => {
    state.numberOfFilms = 8;
    state.genre = action.payload;
  });
  builder.addCase(setFilms, (state, action) => {
    state.films = action.payload;
  });
  builder.addCase(setNumberOfFilms, (state, action) => {
    state.numberOfFilms = action.payload;
  });
});
