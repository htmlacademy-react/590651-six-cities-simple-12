import cn from 'classnames';
import { Card } from '../card/card';
import { Offer } from '../../types/offer';
import { FC } from 'react';

type ListOffersProps = {
  offers: Offer[];
  cardType: 'home' | 'property';
  classNames: string;
  onListItemHover?: (listItemName: number | null) => void;
};

export const ListOffers: FC<ListOffersProps> = ({
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
        onMouseLeave={() => onListItemHover?.(null)}
      />
    ))}
  </div>
);
