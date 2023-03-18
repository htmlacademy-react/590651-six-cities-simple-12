import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { OFFERS } from './mocks/offers';
import { REVIEWS } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Setting = {
  OffersCount: 312,
  OfferClassName: 'cities',
  NearPlacesClassName: 'near-places'
} as const;

root.render(
  <React.StrictMode>
    <App
      offersCount = {Setting.OffersCount}
      offers = {OFFERS}
      reviews = {REVIEWS}
      offer = {OFFERS[0]}
      className = {Setting.OfferClassName}
      nearPlaceClassName = {Setting.NearPlacesClassName}
    />
  </React.StrictMode>,
);
