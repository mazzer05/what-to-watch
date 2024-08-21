export enum AppRoutes {
  Main = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films',
  AddReview = '/films',
  Player = '/player',
}

export enum AuthenticationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const genres = [
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thriller',
] as const;

export const genresTitles = [
  'All genres',
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers',
] as const;

export const STARS_COUNT = 10;
