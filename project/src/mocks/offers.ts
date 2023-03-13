import { Offer } from '../types/offer';

export const offers: Offer[] =
  [
    {
      offerId: '1',
      isPremiumOffer: true,
      offerImageSource: 'img/apartment-01.jpg',
      offerPrice: 120,
      offerRating: 80,
      offerName: 'Beautiful &amp; luxurious apartment at great location',
      offerType: 'Apartment',
    }, {
      offerId: '2',
      isPremiumOffer: false,
      offerImageSource: 'img/room.jpg',
      offerPrice: 80,
      offerRating: 80,
      offerName: 'Wood and stone place',
      offerType: 'Private room',
    }, {
      offerId: '3',
      isPremiumOffer: false,
      offerImageSource: 'img/apartment-02.jpg',
      offerPrice: 132,
      offerRating: 80,
      offerName: 'Canal View Prinsengracht',
      offerType: 'Apartment',
    }, {
      offerId: '4',
      isPremiumOffer: true,
      offerImageSource: 'img/apartment-03.jpg',
      offerPrice: 180,
      offerRating: 100,
      offerName: 'Nice, cozy, warm big bed apartment',
      offerType: 'Apartment',
    }
  ];
