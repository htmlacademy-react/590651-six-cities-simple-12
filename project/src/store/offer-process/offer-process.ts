import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CITY_NAMES, ReviewStatus, SortingTypes } from '../../const';
import { Data } from '../../types/state';
import { changeCity, loadOffers, loadReviews, setError, setOffersDataLoadingStatus } from '../action';
import { NameSpace } from '../name-space';

const initialState: Data = {
  city: CITY_NAMES[0],
  offers: [],
  sortName: SortingTypes[0],
  isOffersDataLoading: false,
  reviews: {},
  reviewsList: [],
  error: null,
  commentStatus: ReviewStatus.ReviewRest
};

const offerProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setSortName: (state, action: PayloadAction<string>) => {
      state.sortName = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = null;
    },
    clearErrorAction: (state) => {
      state.error = null;
    },
    setOffersDataLoadingStatus: (state) => {
      state.isOffersDataLoading = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(changeCity, (state, action) => {
        const {city} = action.payload;
        state.city = city;
      })
      .addCase(loadOffers, (state, action) => {
        const {offers} = action.payload;
        state.offers = offers;
      })
      .addCase(loadReviews, (state, action) => {
        const {id, reviews} = action.payload;
        state.reviews[id] = reviews;
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
});

export default offerProcess.reducer;
