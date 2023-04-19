import { AuthorizationStatus, ReviewStatus } from '../const.js';
import { store } from '../store/index.js';
import { Offer } from './offer.js';
import { Review } from './review.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type ReviewsProcess = {
  isReviewsLoading: string;
  reviewsOfOffer: Review[];
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus | null;
  login: string | undefined;
}

export type Data = {
  city: string;
  offers: Offer[];
  sortName: string;
  isOffersDataLoading: boolean;
  reviews: Record<string, Review[]>;
  reviewsList: Review[];
  error: string | null;
  commentStatus: ReviewStatus;
};
