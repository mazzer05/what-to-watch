/* eslint-disable @typescript-eslint/no-unused-vars */
import { Routes, Route, Navigate } from 'react-router-dom';
import { PrivateRoute } from '../private-route/private-route';

import { Main } from '../../pages/main/main';
import { AppRoutes, AuthenticationStatus } from '../../const';
import { MyList } from '../../pages/my-list/my-list';
import { Login } from '../../pages/login/login';
import { PageFilm } from '../../pages/film/page-film';
import { AddReview } from '../../pages/add-review/add-review';
import { Player } from '../../pages/player/player';
import { PageNotFound } from '../../pages/page-not-found/page-not-found';
import { useAppSelector } from '../../hooks';
import browserHistory from '../../services/browser-history';
import HistoryRouter from '../history-route/history-route';
import { getFilms, getIsDataLoaded } from '../../store/films-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { Spinner } from '../spinner/spinner';

function App(): JSX.Element {
  const films = useAppSelector(getFilms);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isDataLoaded = useAppSelector(getIsDataLoaded);

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoutes.Main} element={<Main />} />
        <Route
          path={AppRoutes.Login}
          element={
            authorizationStatus === AuthenticationStatus.Auth ? <Navigate to={AppRoutes.Main} /> : <Login />
          }
        />
        <Route
          path={AppRoutes.MyList}
          element={
            <PrivateRoute authStatus={authorizationStatus}>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={`${AppRoutes.Film}/:id`} element={<PageFilm />} />
        <Route
          path={`${AppRoutes.AddReview}/:id/review`}
          element={
            <PrivateRoute authStatus={authorizationStatus}>
              <AddReview />
            </PrivateRoute>
          }
        />
        <Route path={`${AppRoutes.Player}/:id`} element={<Player film={films[3]} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
