import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { Offer } from '../types/offer';
import { loadOffers, loadReviews, redirectToRoute, requireAuthorization, setError, setOffersDataLoadingStatus, setReviewsDataLoadingStatus, getUserInformation } from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR, } from '../const';
import { store } from '.';
import { AuthData } from '../types/auth-data';
import { UserAuthData } from '../types/user-auth-data';
import { Review } from '../types/review.js';

export const clearErrorAction = createAsyncThunk('offers/clearError', () => {
  setTimeout(() => store.dispatch(setError({error: null})), TIMEOUT_SHOW_ERROR);
});

export const fetchOfferAction = createAsyncThunk<void, undefined,
{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus({isOffersDataLoading: true}));
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus({isOffersDataLoading: false}));
    dispatch(loadOffers({offers: data}));
  });

export const fetchReviewAction = (id: string) => createAsyncThunk<void, undefined,
{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews', async (_arg, { dispatch, extra: api }) => {
    dispatch(setReviewsDataLoadingStatus({isReviewsDataLoading: true}));
    const { data } = await api.get<Review[]>(`${APIRoute.Comments}${id}`);
    dispatch(setReviewsDataLoadingStatus({isReviewsDataLoading: false}));
    dispatch(loadReviews({id, reviews: data}));
  });

export const checkAuthAction = createAsyncThunk<void, undefined,
{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth', async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization({authorizationStatus: AuthorizationStatus.Auth}));
    } catch {
      dispatch(requireAuthorization({authorizationStatus: AuthorizationStatus.NoAuth}));
    }
  });

export const loginAction = createAsyncThunk<
  string,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/login',
    async ({ login: email, password }, { dispatch, extra: api }) => {
      const { data } = await api.post<UserAuthData>(APIRoute.Login, {
        email,
        password,
      });
      saveToken(data.token);
      dispatch(requireAuthorization({authorizationStatus: AuthorizationStatus.Auth}));
      dispatch(redirectToRoute(AppRoute.Root));
      dispatch(getUserInformation({userInformation: data}));
      return email;
    }
  );


export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/logout', async (_arg, { dispatch, extra: api }) => {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireAuthorization({authorizationStatus: AuthorizationStatus.NoAuth}));
    });
