import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from '../private-route/private-route';

import { Main } from '../../pages/main/main';
import { AppRoutes, AuthenticationStatus } from '../../const';
import { MyList } from '../../pages/my-list/my-list';
import { Login } from '../../pages/login/login';
import { Film } from '../../pages/film/film';
import { AddReview } from '../../pages/add-review/add-review';
import { Player } from '../../pages/player/player';
import { PageNotFound } from '../../pages/page-not-found/page-not-found';

function App(): JSX.Element {
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
        <Route path={AppRoutes.Film} element={<Film />} />
        <Route
          path={AppRoutes.AddReview}
          element={
            <PrivateRoute authStatus={AuthenticationStatus.Auth}>
              <AddReview />
            </PrivateRoute>
          }
        />
        <Route path={AppRoutes.Player} element={<Player />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
