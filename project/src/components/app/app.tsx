import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Home } from '../../pages/home/home';
import { Login } from '../../pages/login/login';
import { Property } from '../../pages/property/property';
import { NotFound } from '../../pages/not-found/not-found';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { LoadingScreen } from '../loading-screen/loading-screen';
import { PrivateRoute } from '../private-route/private-route';
import { HistoryRouter } from '../history-route/history-route';
import browserHistory from '../../browser-history';

export const App: FC = () => {
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );
  const isOffersDataLoading = useAppSelector(
    (state) => state.isOffersDataLoading
  );

  if (
    authorizationStatus === AuthorizationStatus.Unknown ||
    isOffersDataLoading
  ) {
    return <LoadingScreen />;
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Root} element={<Home />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route
            path={AppRoute.Room}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <Property />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
};
