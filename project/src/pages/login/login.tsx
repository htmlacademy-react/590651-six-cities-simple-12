// import { useRef, FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
// import { Link, useNavigate } from 'react-router-dom';
import { Layout } from '../../components/layout/layout';
import { LoginForm } from '../../components/login-form/login-form';
import { AppRoute } from '../../const';
// import { useAppDispatch } from '../../hooks';
// import { loginAction } from '../../store/api-actions';
// import { AuthData } from '../../types/auth-data';

export function Login(): JSX.Element {

  // const loginRef = useRef<HTMLInputElement | null>(null);
  // const passwordRef = useRef<HTMLInputElement | null>(null);

  // const dispatch = useAppDispatch();
  // const navigate = useNavigate();

  // const onSubmit = (authData: AuthData) => {
  //   dispatch(loginAction(authData));
  // };

  // const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
  //   evt.preventDefault();

  //   if (loginRef.current !== null && passwordRef.current !== null) {
  //     onSubmit({
  //       login: loginRef.current.value,
  //       password: passwordRef.current.value,
  //     });
  //   }
  // };

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
                <span>Paris</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
