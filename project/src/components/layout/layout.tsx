import { Header } from '../header/header';
import cn from 'classnames';
import { Helmet } from 'react-helmet-async';
import { ReactNode, FC } from 'react';

type LayoutProps = {
  className?: string;
  hasNav?: boolean;
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({
  className,
  children,
  hasNav,
}) => (
  <div className={cn('page', className)}>
    <Header hasNav={hasNav} />
    <Helmet>
      <title>Six Cities</title>
    </Helmet>

    {children}
  </div>
);
