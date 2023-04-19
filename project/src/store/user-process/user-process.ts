import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import { UserProcess } from '../../types/state';
import { NameSpace } from '../name-space';
import { checkAuthAction, loginAction, logoutAction } from './user-api';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  login: '',
};

const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.login = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.login = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.login = '';
      });
  }
});

export default userProcess.reducer;
