import { AuthenticationStatus } from '../const';

export const isCheckedAuth = (authorizationStatus: AuthenticationStatus): boolean =>
  authorizationStatus === AuthenticationStatus.Unknown;
