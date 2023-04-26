import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Layout } from '../../components/layout/layout';
import { LoginForm } from '../../components/login-form/login-form';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { getCurrentCity, redirectToRoute } from '../../store/action';
import { State } from '../../types/state';

export function Login(): JSX.Element {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state: State) => state.auth.userInfo);
  const currentCity = useAppSelector(getCurrentCity);

  useEffect((): void => {
    if (userInfo) {
      dispatch(redirectToRoute(AppRoute.Root));
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
              <Link className="locations__item-link" to={AppRoute.Root}>
                <span>{currentCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
