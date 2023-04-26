import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { Offer } from '../types/offer';
import { loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus, getUserInformation, setReviewsDataLoadingStatus, loadReviews, redirectToRoute } from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AppRoute, AuthorizationStatus, ErrorMessage, TIMEOUT_SHOW_ERROR, } from '../const';
import { store } from '.';
import { AuthData } from '../types/auth-data';
import { UserAuthData } from '../types/user-auth-data';
import { Review, ReviewFormData } from '../types/review.js';
import { toast } from 'react-toastify';


type ThunkOptions = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export const clearErrorAction = createAsyncThunk('offers/clearError', () => {
  setTimeout(() => store.dispatch(setError({error: null})), TIMEOUT_SHOW_ERROR);
});

export const fetchOfferAction = createAsyncThunk<
void,
undefined,
ThunkOptions>
(
  'data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus({isOffersDataLoading: true}));
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus({isOffersDataLoading: false}));
    dispatch(loadOffers({offers: data}));
  });

export const fetchReviewAction = (id: string) => createAsyncThunk<
void,
undefined,
ThunkOptions>
(
  'data/fetchReviews', async (_arg, { dispatch, extra: api }) => {
    dispatch(setReviewsDataLoadingStatus({isReviewsDataLoading: true}));
    const { data } = await api.get<Review[]>(`${APIRoute.Comments}${id}`);
    dispatch(setReviewsDataLoadingStatus({isReviewsDataLoading: false}));
    dispatch(loadReviews({id, reviews: data}));
  });

export const checkAuthAction = createAsyncThunk<
void,
undefined,
ThunkOptions>
(
  'user/checkAuth', async (_arg, { dispatch, extra: api }) => {
    try {
      const {data} = await api.get<UserAuthData>(APIRoute.Login);
      dispatch(requireAuthorization({authorizationStatus: AuthorizationStatus.Auth}));
      dispatch(getUserInformation({userInformation: data}));
    } catch {
      dispatch(requireAuthorization({authorizationStatus: AuthorizationStatus.NoAuth}));
    }
  });

export const loginAction = createAsyncThunk<
void,
AuthData,
ThunkOptions>
(
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
      dispatch(requireAuthorization({authorizationStatus: AuthorizationStatus.NoAuth}));
    });

export const postCommentAction = createAsyncThunk<
  boolean,
  ReviewFormData,
  ThunkOptions>
  ('offer/postReview', async ({ review, rating, id }, { dispatch, extra: api }) => {
    dispatch(setReviewsDataLoadingStatus({isReviewsDataLoading: true}));
    try {
      const { data } = await api.post<Review[]>(`${APIRoute.Comments}${id}`, {comment: review, rating});
      dispatch(loadReviews({id, reviews: data}));
      return true;
    } catch (err) {
      toast.error(ErrorMessage.CommentError);
      return false;
    } finally {
      dispatch(setReviewsDataLoadingStatus({isReviewsDataLoading: false}));
    }
  });
