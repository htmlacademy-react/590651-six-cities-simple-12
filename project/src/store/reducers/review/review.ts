import { createReducer, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { ReducerWithInitialState } from '@reduxjs/toolkit/dist/createReducer';
import { ReviewState } from '../../../types/state';
import { loadReviews, setReviewsDataLoadingStatus } from '../../action';

const initialState: ReviewState = {
  reviews: {},
  reviewsList: [],
  isReviewSending: false,
};

export const reviewReducer: ReducerWithInitialState<ReviewState> = createReducer(
  initialState,
  (builder: ActionReducerMapBuilder<ReviewState>): void => {
    builder
      .addCase(loadReviews, (state: ReviewState, action) => {
        const {id, reviews} = action.payload;
        state.reviews[id] = reviews;
      })
      .addCase(setReviewsDataLoadingStatus, (state: ReviewState, action) => {
        const { isReviewsDataLoading } = action.payload;
        state.isReviewSending = isReviewsDataLoading;
      });
  }
);
