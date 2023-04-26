import { CITY_NAMES, SORTING_TYPES } from '../../../const';
import { ActionReducerMapBuilder, createReducer } from '@reduxjs/toolkit';
import { DataState } from '../../../types/state';
import { changeCity, changeSorting, loadOffers, setError, setOffersDataLoadingStatus } from '../../action';
import { ReducerWithInitialState } from '@reduxjs/toolkit/dist/createReducer';

const initialState: DataState = {
  city: CITY_NAMES[0],
  offers: [],
  sortName: SORTING_TYPES[0],
  isOffersDataLoading: false,
  error: null,
};

export const dataReducer: ReducerWithInitialState<DataState> = createReducer(
  initialState,
  (builder: ActionReducerMapBuilder<DataState>): void => {
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
      .addCase(setOffersDataLoadingStatus, (state, action) => {
        const {isOffersDataLoading} = action.payload;
        state.isOffersDataLoading = isOffersDataLoading;
      })
      .addCase(setError, (state, action) => {
        const {error} = action.payload;
        state.error = error;
      });
  }
);
