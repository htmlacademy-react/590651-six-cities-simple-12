import { BrowserRouter, generatePath, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { HelmetProvider } from 'react-helmet-async';
import { NotFound } from '../../pages/not-found/not-found';
import { Login } from '../../pages/login/login';
import { Main } from '../../pages/main/main';
import { Property } from '../../pages/property/property';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';


type AppProps = {
  offersCount: number;
  offers: Offer[];
  offer: Offer;
  reviews: Review[];
}

export function App({offersCount, offers, reviews, offer}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<Main offersCount={offersCount} offers={offers}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<Login />}
          />
          <Route
            path={generatePath(AppRoute.Room, {id: `${offer.id}`})}
            element={<Property reviews={reviews} offer={offer}/>}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
