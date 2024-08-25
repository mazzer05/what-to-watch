import { AppRoutes, AuthenticationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { redirectToRoute } from '../../store/action';
import { logoutAction } from '../../store/api-action';
import { getAuthorizationStatus, getUserAvatar } from '../../store/user-process/selectors';

export const UserInfo = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthorizationStatus);
  const userAvatar = useAppSelector(getUserAvatar);

  if (authStatus === AuthenticationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar" onClick={() => dispatch(redirectToRoute(AppRoutes.MyList))}>
            <img src={userAvatar} alt="User avatar" width={63} height={63} />
          </div>
        </li>
        <li className="user-block__item">
          <a
            className="user-block__link"
            onClick={(): void => {
              dispatch(logoutAction());
            }}
          >
            Sign out
          </a>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <a
            className="user-block__link"
            onClick={(): void => {
              dispatch(redirectToRoute(AppRoutes.Login));
            }}
          >
            Log in
          </a>
        </li>
      </ul>
    );
  }
};
