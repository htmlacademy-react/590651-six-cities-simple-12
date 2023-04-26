import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Layout } from '../../components/layout/layout';
import { LoginForm } from '../../components/login-form/login-form';
import { AppRoute, CITY_NAMES } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { redirectToRoute } from '../../store/action';
import { State } from '../../types/state';
import { changeCity } from '../../store/action';

export function Login(): JSX.Element {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state: State) => state.auth.userInfo);
  const randomCity = CITY_NAMES[Math.floor(Math.random() * CITY_NAMES.length)];

  useEffect((): void => {
    if (userInfo?.email.length) {
      dispatch(redirectToRoute(AppRoute.Login));
    }
  });

  return (

    <Layout className="page--gray page--login" hasNav={false}>
      <Helmet>
        <title>Six Cities. Login</title>
      </Helmet>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm/>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Root} onClick={() => dispatch(changeCity({city: randomCity}))}>
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
