import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../const';
import { Offer } from '../types/offer';

export const redirectToRoute = createAction<AppRoute | string>('page/redirectToRoute');

export const changeCity = createAction('page/changeCity', (city: string) => ({
  payload: city,
}));

export const fillOffersList = createAction('page/fillOffersList', (offers: Offer[]) => ({
  payload: offers,
}));
