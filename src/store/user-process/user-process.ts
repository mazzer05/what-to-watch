import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthenticationStatus, NameSpace } from '../../const';
import { UserProcess } from '../../types/state';
import { checkLoginAction, loginAction, logoutAction } from '../api-action';

const initialState: UserProcess = {
  avatarUrl: '',
  name: '',
  authorizationStatus: AuthenticationStatus.Unknown,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<{ avatarUrl: string; name: string }>) => {
      state.avatarUrl = action.payload.avatarUrl;
      state.name = action.payload.name;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkLoginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthenticationStatus.Auth;
      })
      .addCase(checkLoginAction.rejected, (state) => {
        state.authorizationStatus = AuthenticationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthenticationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthenticationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthenticationStatus.NoAuth;
      });
  },
});

export const { setUserInfo } = userProcess.actions;
