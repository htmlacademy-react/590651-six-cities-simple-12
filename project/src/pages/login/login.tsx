import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { Layout } from '../../components/layout/layout';
import { LoginForm } from '../../components/login-form/login-form';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getCurrentCity, requireAuthorization } from '../../store/action';
import { useEffect } from 'react';

export function Login(): JSX.Element {
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(requireAuthorization);
  const currentCity = useAppSelector(getCurrentCity);

  useEffect(() => {

    if (authorizationStatus.payload.authorizationStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Root);
    }
  }, [navigate, authorizationStatus]);
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
