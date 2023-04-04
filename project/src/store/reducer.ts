import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, CITY_NAMES, SortingTypes } from '../const';
import { Offer } from '../types/offer';
import { Review } from '../types/review';
import { UserAuthData } from '../types/user-auth-data';
import {
  changeCity,
  changeSorting,
  loadOffers,
  loadReviews,
  requireAuthorization,
  setError,
  getUserInformation,
  setOffersDataLoadingStatus
} from './action';

type InitialState = {
  city: string;
  offers: Offer[];
  reviews: Record<string, Review[]>;
  sortName: string;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  error: string | null;
  userInfo: UserAuthData | null;
};

const initialState: InitialState = {
  city: CITY_NAMES[0],
  offers: [],
  reviews: {},
  sortName: SortingTypes[0],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  error: null,
  userInfo: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const {city} = action.payload;
      state.city = city;
    })
    .addCase(changeSorting, (state, action) => {
      const {sortName} = action.payload;
      state.sortName = sortName;
    })
    .addCase(loadOffers, (state, action) => {
      const {offers} = action.payload;
      state.offers = offers;
    })
    .addCase(loadReviews, (state, action) => {
      const {id, reviews} = action.payload;
      state.reviews[id] = reviews;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      const {isOffersDataLoading} = action.payload;
      state.isOffersDataLoading = isOffersDataLoading;
    })
    .addCase(requireAuthorization, (state, action) => {
      const {authorizationStatus} = action.payload;
      state.authorizationStatus = authorizationStatus;
    })
    .addCase(setError, (state, action) => {
      const {error} = action.payload;
      state.error = error;
    })
    .addCase(getUserInformation, (state, action) => {
      const {userInformation} = action.payload;
      state.userInfo = userInformation;
    });
});

export { reducer };
