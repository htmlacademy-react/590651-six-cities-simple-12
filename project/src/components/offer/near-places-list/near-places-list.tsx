import { Offer } from '../../../types/offer';
import { OffersList } from '../offers-list/offers-list';

type NearPlacesListProps = {
  offers: Offer[];
  onSetActiveOffer: (offer: Offer | undefined) => void;
  nearPlaceClassName: string;
}

export function NearPlacesList({offers, onSetActiveOffer, nearPlaceClassName}: NearPlacesListProps): JSX.Element {
  return (
    <OffersList
      offers={offers.filter((offer) => offer.city.name)}
      onSetActiveOffer={onSetActiveOffer}
      className={nearPlaceClassName}
    />
  );
}
