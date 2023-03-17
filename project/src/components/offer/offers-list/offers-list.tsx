import { OfferItem } from '../offer-item/offer-item';
import { Offer } from '../../../types/offer';

type OffersListProps = {
  offers: Offer[];
  onSetActiveOffer: (offer: Offer | undefined) => void;
}

export function OffersList({offers, onSetActiveOffer}: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers && offers.map((offer) => (
          <OfferItem
            key = {offer.id}
            offer = {offer}
            onSetActiveOffer = {onSetActiveOffer}
          />))
      }
    </div>
  );
}
