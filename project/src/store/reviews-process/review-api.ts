import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, TIMEOUT_SHOW_ERROR} from '../../const';
import { ThunkOptions } from '../../types/thunk-options';
import { loadReviews, setError } from '../action';
import { Review, ReviewFormData } from '../../types/review';
import { store } from '..';

export const postCommentAction = createAsyncThunk<
  Review[],
  ReviewFormData,
  ThunkOptions>
  ('offer/postReview', async ({ review, rating, id }, { dispatch, extra: api }) => {
    const { data } = await api.post<Review[]>(`${APIRoute.Comments}${id}`, {comment: review, rating});
    dispatch(loadReviews({id, reviews: data}));
    return data;
  });

export const fetchReviewAction = createAsyncThunk<
Review[],
number,
ThunkOptions>
(
  'data/fetchReviews', async (id, { extra: api }) => {
    const { data } = await api.get<Review[]>(`${APIRoute.Comments}${id}`);
    return data;
  });

export const clearErrorAction = createAsyncThunk('offers/clearError', () => {
  setTimeout(() => store.dispatch(setError({error: null})), TIMEOUT_SHOW_ERROR);
});
