import { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Home } from '../../pages/home/home';
import { Login } from '../../pages/login/login';
import { Property } from '../../pages/property/property';
import { NotFound } from '../../pages/not-found/not-found';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { HistoryRouter } from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { fetchOffersAction } from '../../store/offer-process/offer-api';

export const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Root} element={<Home />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route
            path={AppRoute.Room}
            element={<Property />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
};
