import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App(): JSX.Element {
  const films = useAppSelector((state) => state.films);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main} element={<Main />} />
        <Route path={AppRoutes.Login} element={<Login />} />
        <Route
          path={AppRoutes.MyList}
          element={
            <PrivateRoute authStatus={AuthenticationStatus.Auth}>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={`${AppRoutes.Film}/:id`} element={<PageFilm film={films[3]} />} />
        <Route
          path={`${AppRoutes.AddReview}/:id/review`}
          element={
            <PrivateRoute authStatus={AuthenticationStatus.Auth}>
              <AddReview film={films[3]} />
            </PrivateRoute>
          }
        />
        <Route path={`${AppRoutes.Player}/:id`} element={<Player film={films[3]} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
