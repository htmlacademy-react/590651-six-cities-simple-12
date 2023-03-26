import { createReducer } from '@reduxjs/toolkit';
import { CITIES } from '../const';
import { OFFERS } from '../mocks/offers';
import { changeCity, fillOffersList } from './action';

const initialState = {
  offers: OFFERS,
  city: CITIES[0],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffersList, (state) => {
      state.offers = OFFERS;
    });
});
