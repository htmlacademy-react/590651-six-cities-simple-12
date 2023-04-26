import { combineReducers } from '@reduxjs/toolkit';
import { dataReducer } from './reducers/data/data';
import { authReducer } from './reducers/auth/auth';
import { reviewReducer } from './reducers/review/review';

export const rootReducer = combineReducers({
  data: dataReducer,
  auth: authReducer,
  review: reviewReducer
});
