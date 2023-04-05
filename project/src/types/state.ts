import { store } from '../store/index.js';
import { Review } from './review.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// TODO new review posting
export type ReviewsProcess = {
  isReviewsLoading: string;
  reviewsOfOffer: Review[];
};
