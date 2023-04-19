import { ChangeEvent, FC, useRef, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { AuthData } from '../../types/auth-data';
<<<<<<< HEAD
<<<<<<< HEAD
import { loginAction } from '../../store/user-process/user-api';
=======
import { Regulars } from '../../const';
>>>>>>> parent of 3768fcc... fix validation e-mail
=======
import { Regulars } from '../../const';
>>>>>>> parent of 3768fcc... fix validation e-mail

type FormProps = {
  value: string;
  error: boolean;
  errorValue: string;
  regexp: RegExp;
};

type dataProps = {
  [key: string]: FormProps;
};

export const LoginForm: FC = () => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<dataProps>({
    email: {
      value: '',
      error: false,
      errorValue: 'Please enter correct e-mail',
      regexp: /^[^ ]+@[^ ]+\.[a-z]{2,3}$/,
    },
    password: {
      value: '',
      error: false,
      errorValue: 'Please enter at least one letter and one number',
      regexp: /(?=.*[0-9])(?=.*[A-Za-z])[A-Za-z0-9]{2,}/,
    }
  });

  const handleFieldChange = ({
    target,
  }: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = target;
    const isValidField = data[name].regexp.test(value);

    if (!Regulars.Numbers.test(value) || !Regulars.Symbols.test(value)) {
      target.setCustomValidity(data[name].errorValue);
    } else {
      target.setCustomValidity('');
    }

    setData({
      ...data,
      [name]: {
        ...data[name],
        value,
        error: !isValidField,
      },
    });
  };

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginRef.current !== null && passwordRef.current !== null) {
      const authData: AuthData = {
        login: loginRef.current.value,
        password: passwordRef.current.value,
      };
      dispatch(loginAction(authData));
    }
  };

  return (
    <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          className="login__input form__input"
          type="email"
          name="email"
          placeholder="Email"
          ref={loginRef}
          required
          value={data.email.value}
          onChange={handleFieldChange}
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          className="login__input form__input"
          type="password"
          name="password"
          placeholder="Password"
          ref={passwordRef}
          required
          value={data.password.value}
          onChange={handleFieldChange}
        />
      </div>
      <button className="login__submit form__submit button" type="submit">
        Sign in
      </button>
    </form>
  );
};
