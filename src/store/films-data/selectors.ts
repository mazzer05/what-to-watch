/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Comment, Film } from '../../types/types';

export const getFilms = (state: State): Film[] => state[NameSpace.Data].films;
export const getFilm = (state: State): Film | null => state[NameSpace.Data].film;
export const getGenre = (state: State): string => state[NameSpace.Data].genre;
export const getPromoFilm = (state: State): Film | null => state[NameSpace.Data].promoFilm;
export const getFavoritesFilms = (state: State): Film[] => state[NameSpace.Data].favoritesFilms;
export const getComments = (state: State): Comment[] => state[NameSpace.Data].comments;
export const getIsDataLoaded = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
export const getNumberOfFilms = (state: State): number => state[NameSpace.Data].numberOfFilms;

export const filterFilm = createSelector([getFilms, getGenre], (films, genre) =>
  genre === 'All genres' ? films : films.filter((film) => film.genre === genre)
);
