import React from 'react';
import cn from 'classnames';

type BadgeProps = {
  className: string;
};

export const PremiumBadge: React.FC<BadgeProps> = ({ className }) => (
  <div className={cn(className)}>
    <span>Premium</span>
  </div>
);
