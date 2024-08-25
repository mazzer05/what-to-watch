/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { AuthenticationStatus, NameSpace } from '../../const';
import { State } from '../../types/state';

export const getAuthorizationStatus = (state: State): AuthenticationStatus =>
  state[NameSpace.User].authorizationStatus;
export const getUserName = (state: State): string => state[NameSpace.User].name;
export const getUserAvatar = (state: State): string => state[NameSpace.User].avatarUrl;
