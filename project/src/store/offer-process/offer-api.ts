import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../const';
import { setOffersDataLoadingStatus, loadOffers } from '../action';
import { ThunkOptions } from '../../types/thunk-options';
import { Offer } from '../../types/offer';
import { State } from '../../types/state';
import { AxiosInstance } from 'axios';

export const fetchOfferAction = createAsyncThunk<
void,
undefined,
ThunkOptions>
(
  'data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus({isOffersDataLoading: true}));
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus({isOffersDataLoading: false}));
    dispatch(loadOffers({offers: data}));
  });

export const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
    state: State;
    extra: AxiosInstance;
  }>(
    'data/fetchOffers',
    async (_arg, {extra: api}) => {
      const {data} = await api.get<Offer[]>(APIRoute.Offers);
      return data;
    },
  );
