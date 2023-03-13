import { Logo } from '../logo/logo';
import { NavAuthorized } from '../nav-authorized/nav-authorized';

export function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          <NavAuthorized/>
        </div>
      </div>
    </header>
  );
}
