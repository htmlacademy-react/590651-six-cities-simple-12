import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './components/app/app';
import { OFFERS } from './mocks/offers';
import { REVIEWS } from './mocks/reviews';
import {store} from './store';

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
    <Provider store = {store}>
      <App
        // offersCount = {Setting.OffersCount}
        offers = {OFFERS}
        reviews = {REVIEWS}
        offer = {OFFERS[0]}
        className = {Setting.OfferClassName}
        nearPlaceClassName = {Setting.NearPlacesClassName}
      />
    </Provider>
  </React.StrictMode>,
);
