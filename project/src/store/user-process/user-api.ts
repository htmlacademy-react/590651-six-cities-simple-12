import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../const';
import { saveToken, dropToken } from '../../services/token';
import { AuthData } from '../../types/auth-data';
import { ThunkOptions } from '../../types/thunk-options';
import { UserAuthData } from '../../types/user-auth-data';

export const checkAuthAction = createAsyncThunk<
string,
undefined,
ThunkOptions>
(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data : {email}} = await api.get<UserAuthData>(APIRoute.Login);
    return email;
  }
);

export const loginAction = createAsyncThunk<
string,
AuthData,
ThunkOptions>
(
  'user/login',
  async ({ login: email, password }, { extra: api }) => {
    const { data } = await api.post<UserAuthData>(APIRoute.Login, {
      email,
      password,
    });
    saveToken(data.token);
    return email;
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  ThunkOptions>
  (
    'user/logout', async (_arg, { dispatch, extra: api }) => {
      await api.delete(APIRoute.Logout);
      dropToken();
    });
