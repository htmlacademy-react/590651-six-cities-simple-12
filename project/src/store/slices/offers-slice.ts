import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OFFERS } from '../../mocks/offers';
import { CITIES } from '../../const';
import { State } from '../../types/state';
import { Offer } from '../../types/offer';

type OffersSliceState = {
  offers: Offer[];
  city: string;
}

const initialState: OffersSliceState = {
  offers: OFFERS,
  city: CITIES[0]
};

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setAllOffers: (state) => {
      state.offers = OFFERS;
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    }
  },
});

export const {setAllOffers, setCity} = offersSlice.actions;

export const selectOffersOnCity = (city: string) => (state: State) => state.offers.offers.filter((offer) => offer.city.name === city);

export default offersSlice.reducer;
