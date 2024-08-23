import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { APIRoute, AppRoutes, AuthenticationStatus } from '../const';
import {
  redirectToRoute,
  requireAuthorization,
  setDataLoadedStatus,
  setFilm,
  setFilms,
  setPromo,
  setComments,
} from './action';
import { AuthData } from '../types/auth-data';
import { removeToken, setToken } from '../services/token';
import { UserData } from '../types/user-data';
import { Film, Comment } from '../types/types';
import { CommentData } from '../types/comment-data';

export const fetchFilms = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilms', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Film[]>(APIRoute.Films);
  dispatch(setDataLoadedStatus(true));
  dispatch(setFilms(data));
  dispatch(setDataLoadedStatus(false));
});

export const fetchFilm = createAsyncThunk<
  void,
  { id: string },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilm', async ({ id }, { dispatch, extra: api }) => {
  dispatch(setDataLoadedStatus(true));
  const { data } = await api.get<Film>(`${APIRoute.Films}/${id}`);
  dispatch(setFilm(data));
  dispatch(setDataLoadedStatus(false));
});

export const fetchPromo = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchPromo', async (_arg, { dispatch, extra: api }) => {
  dispatch(setDataLoadedStatus(true));
  const { data } = await api.get<Film>(APIRoute.Promo);
  dispatch(setPromo(data));
  dispatch(setDataLoadedStatus(false));
});

export const fetchComments = createAsyncThunk<
  void,
  { id: string },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchComments', async ({ id }, { dispatch, extra: api }) => {
  dispatch(setDataLoadedStatus(true));
  const { data } = await api.get<Comment[]>(`${APIRoute.Comments}/${id}`);
  dispatch(setComments(data));
  dispatch(setDataLoadedStatus(false));
});

export const putComments = createAsyncThunk<
  void,
  { filmId: string; comment: string; rating: number },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/putComments', async ({ filmId, comment, rating }, { dispatch, extra: api }) => {
  await api.post<CommentData>(`${APIRoute.Comments}/${filmId}`, { comment, rating });
});

export const checkLoginAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorization(AuthenticationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthenticationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async ({ email, password }, { dispatch, extra: api }) => {
  const {
    data: { token },
  } = await api.post<UserData>(APIRoute.Login, { email, password });
  setToken(token);
  dispatch(requireAuthorization(AuthenticationStatus.Auth));
  dispatch(redirectToRoute(AppRoutes.Main));
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  removeToken();
  dispatch(requireAuthorization(AuthenticationStatus.NoAuth));
  dispatch(redirectToRoute(AppRoutes.Login));
});
