import { AuthorizationStatus } from '../const.js';
import { store } from '../store/index.js';
import { Offer } from './offer.js';
import { Review } from './review.js';
import { UserAuthData } from './user-auth-data.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type DataState = {
  city: string;
  offers: Offer[];
  sortName: string;
  isOffersDataLoading: boolean;
  error: string | null;
};

export type ReviewState = {
  reviews: Record<string, Review[]>;
  reviewsList: Review[];
  isReviewSending: boolean;
};

export type AuthState = {
  authorizationStatus: AuthorizationStatus;
  userInfo: UserAuthData | null;
};
