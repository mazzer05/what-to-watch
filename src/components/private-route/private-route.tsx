import { Navigate } from 'react-router-dom';
import { AppRoutes, AuthenticationStatus } from '../../const';

type PrivateRouteProps = {
  authStatus: AuthenticationStatus;
  children: JSX.Element;
};

export const PrivateRoute = (props: PrivateRouteProps): JSX.Element => {
  const { authStatus, children } = props;

  return authStatus === AuthenticationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoutes.Login} />
  );
};
