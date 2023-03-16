import { BrowserRouter, generatePath, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { HelmetProvider } from 'react-helmet-async';
import { NotFound } from '../../pages/not-found/not-found';
import { Login } from '../../pages/login/login';
import { Main } from '../../pages/main/main';
import { Room } from '../../pages/offer/offer';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';

type AppProps = {
  offersCount: number;
  offers: Offer[];
  reviews: Review[];
}

export function App({offersCount, offers, reviews}: AppProps): JSX.Element {
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
            path={generatePath(AppRoute.Room, {id: `${offers[0].offerId}`})}
            element={<Room reviews={reviews} offer={offers[0]}/>}
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
