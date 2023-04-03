import { Logo } from '../logo/logo';
import HeaderNav from '../header/header-nav';
import { FC } from 'react';

type HeaderProps = {
  hasNav?: boolean;
};

export const Header: FC<HeaderProps> = ({ hasNav = true }) => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Logo />
        </div>
        {hasNav && <HeaderNav />}
      </div>
    </div>
  </header>
);
