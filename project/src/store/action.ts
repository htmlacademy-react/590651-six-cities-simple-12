import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus, ReviewStatus } from '../const';
import { Offer } from '../types/offer';
import { Review } from '../types/review';
import { State } from '../types/state';
import { UserAuthData } from '../types/user-auth-data';

export const changeCity = createAction<{city: string}>('offers/changeCity');

export const changeSorting = createAction<{sortName: string}>('offers/changeSort');

export const loadOffers = createAction<{offers: Offer[]}>('offers/loadOffers');

export const loadReviews = createAction<{id: string; reviews: Review[]}>('offers/loadReviews');

export const setError = createAction<{error: string | null}>('offers/setError');

export const requireAuthorization = createAction<{authorizationStatus: AuthorizationStatus}>('user/requireAuthorization');

export const setOffersDataLoadingStatus = createAction<{isOffersDataLoading: boolean}>('data/setOffersDataLoadingStatus');

export const setReviewsDataLoadingStatus = createAction<{isReviewsDataLoading: boolean}>('data/setReviewsDataLoadingStatus');

export const redirectToRoute = createAction<AppRoute>('page/redirectToRoute');

export const getUserInformation = createAction<{userInformation: UserAuthData | null}>('user/getUserInformation');

export const setReviewRestStatus = createAction<{reviewStatus: ReviewStatus}>('offer/setReviewRestStatus');

export const getReviewLoadingStatus = (state: State) => state.commentStatus;
