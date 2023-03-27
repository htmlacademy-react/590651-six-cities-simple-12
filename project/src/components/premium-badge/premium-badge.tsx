import cn from 'classnames';
import { FC } from 'react';

type BadgeProps = {
  className: string;
};

export const PremiumBadge: FC<BadgeProps> = ({ className }) => (
  <div className={cn(className)}>
    <span>Premium</span>
  </div>
);
