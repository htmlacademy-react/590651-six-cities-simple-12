import { createSlice } from '@reduxjs/toolkit';
import { ReviewStatus } from '../../const';
import { ReviewsProcess } from '../../types/state';
import { fetchReviewAction, postCommentAction } from './review-api';
import { NameSpace } from '../name-space';

const initialState: ReviewsProcess = {
  reviewsOfOffer: [],
  isReviewsLoading: ReviewStatus.ReviewRest
};

const reviewsProcess = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {
    setReviewRestStatus: (state) => {
      state.isReviewsLoading = ReviewStatus.ReviewRest;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReviewAction.fulfilled, (state, action) => {
        state.reviewsOfOffer = action.payload;
      })
      .addCase(postCommentAction.pending, (state) => {
        state.isReviewsLoading = ReviewStatus.ReviewPending;
      })
      .addCase(postCommentAction.fulfilled, (state, action) => {
        state.reviewsOfOffer = action.payload;
        state.isReviewsLoading = ReviewStatus.ReviewFulfilled;
      });
  },
});

export const {setReviewRestStatus} = reviewsProcess.actions;
export default reviewsProcess.reducer;
