import { OfferItem } from '../offer-item/offer-item';
import { Offer } from '../../types/offer';
import { FC } from 'react';

type OffersListProps = {
  offers: Offer[];
}

export const OffersList: FC<OffersListProps> = ({offers}) => (
  <div className="cities__places-list places__list tabs__content">
    {
      offers.map((offer) => (
        <OfferItem
          key = {offer.offerId}
          offer = {offer}
        />))
    }
  </div>
);
