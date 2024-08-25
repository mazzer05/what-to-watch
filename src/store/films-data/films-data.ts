import { createSlice } from '@reduxjs/toolkit';
import { FilmData } from '../../types/state';
import { NameSpace } from '../../const';
import { fetchComments, fetchFilm, fetchFilms, fetchPromo } from '../api-action';

const initialState: FilmData = {
  films: [],
  film: null,
  genre: 'All genres',
  promoFilm: null,
  comments: [],
  isDataLoaded: false,
  numberOfFilms: 8,
};

export const filmsData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setNumberOfFilms: (state, action) => {
      state.numberOfFilms = Number(action.payload);
    },
    setGenre: (state, action: { payload: string }) => {
      state.numberOfFilms = 8;
      state.genre = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchComments.pending, (state, action) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchFilms.pending, (state, action) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchFilm.pending, (state, action) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchPromo.pending, (state, action) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchPromo.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isDataLoaded = false;
      });
  },
});

export const { setNumberOfFilms, setGenre } = filmsData.actions;
