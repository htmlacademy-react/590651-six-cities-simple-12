import React from 'react';
import { Header } from '../header/header';
import cn from 'classnames';
import { Helmet } from 'react-helmet-async';

type LayoutProps = {
  className?: string;
  hasNav?: boolean;
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({
  className,
  children,
  hasNav,
}) => (
  <div className={cn('page', className)}>
    <Header hasNav={hasNav} />
    <Helmet>
      <title>Six Cities.</title>
    </Helmet>

    {children}
  </div>
);
