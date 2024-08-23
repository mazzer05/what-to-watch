import { createAction } from '@reduxjs/toolkit';
import { Film, GenreTitle, Comment } from '../types/types';
import { AuthenticationStatus } from '../const';

export const setGenre = createAction<GenreTitle>('genre/set');
export const setFilms = createAction<Film[]>('films/set');
export const setNumberOfFilms = createAction<number>('films/numberFilms');
export const requireAuthorization = createAction<AuthenticationStatus>('user/requireAuthorization');
export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
export const redirectToRoute = createAction<string>('game/redirectToRoute');
export const setFilm = createAction<Film>('film/set');
export const setPromo = createAction<Film>('promo/set');
export const setComments = createAction<Comment[]>('comments/set');
