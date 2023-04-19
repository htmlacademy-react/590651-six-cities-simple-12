import { combineReducers } from '@reduxjs/toolkit';
import offerProcess from './offer-process/offer-process';
import userProcess from './user-process/user-process';
import reviewsProcess from './reviews-process/reviews-process';
import { NameSpace } from './name-space';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offerProcess,
  [NameSpace.Reviews]: reviewsProcess,
  [NameSpace.User]: userProcess,
});
