import cn from 'classnames';
import { Card } from '../card/card';
import { Offer } from '../../types/offer';
import { FC } from 'react';

type OffersListProps = {
  offers: Offer[];
  cardType: 'home' | 'property';
  classNames: string;
  onListItemHover?: (listItemName: number | undefined) => void;
};

export const OffersList: FC<OffersListProps> = ({
  offers,
  onListItemHover,
  cardType,
  classNames,
}) => (
  <div className={cn('places__list', classNames)}>
    {offers.map((offer) => (
      <Card
        key={offer.id}
        offer={offer}
        cardType={cardType}
        onMouseEnter={() => onListItemHover?.(offer.id)}
        onMouseLeave={() => onListItemHover?.(undefined)}
      />
    ))}
  </div>
);
