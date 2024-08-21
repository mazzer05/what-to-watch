import { createAction } from '@reduxjs/toolkit';
import { Film, GenreTitle } from '../types/types';

export const setGenre = createAction<GenreTitle>('genre/set');
export const setFilms = createAction<Film[]>('films/set');
export const setNumberOfFilms = createAction<number>('films/numberFilms');
