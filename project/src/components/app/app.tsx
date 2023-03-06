import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Room from '../../pages/offer/offer';
import NotFound from '../not-found/not-found';
import {AppRoute} from '../../const';
import { HelmetProvider } from 'react-helmet-async';

type AppProps = {
  offers: number;
}

function App({offers}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<Main offers={offers} />}
          />
          <Route
            path={AppRoute.Login}
            element={<Login />}
          />
          <Route
            path={AppRoute.Room}
            element={<Room />}
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

export default App;
