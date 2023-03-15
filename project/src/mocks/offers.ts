import { Offer } from '../types/offer';

export const offers: Offer[] =
  [
    {
      offerId: '1',
      isPremiumOffer: true,
      offerImageSource: 'img/apartment-01.jpg',
      offerPrice: 120,
      offerRating: 4,
      offerName: 'Beautiful & luxurious apartment at great location',
      offerType: 'Apartment',
      offerBedrooms: 3,
      offerGuestsNumber: 4,
      offerServices: [
        'Wi-Fi',
        'Heating',
        'Kitchen',
        'Fridge',
        'Washing machine',
        'Coffee machine',
        'Dishwasher',
        'Towels',
        'Baby seat',
        'Cabel TV',
      ],
      offerHost: {
        userId: 1,
        userAvatar: '/img/avatar-angelina.jpg',
        userName: 'Angelina',
        isUserPro: true
      },
      offerDescription: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. \n\nAn independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    }, {
      offerId: '2',
      isPremiumOffer: false,
      offerImageSource: 'img/room.jpg',
      offerPrice: 80,
      offerRating: 4,
      offerName: 'Wood and stone place',
      offerType: 'Private room',
      offerBedrooms: 3,
      offerGuestsNumber: 4,
      offerServices: [
        'Wi-Fi',
        'Heating',
        'Kitchen',
        'Fridge',
        'Washing machine',
        'Dry machine',
        'Coffee machine',
        'Dishwasher',
        'Towels',
        'Baby seat',
        'Cabel TV',
      ],
      offerHost: {
        userId: 1,
        userAvatar: 'a.com',
        userName: 'Agatha',
        isUserPro: true
      },
      offerDescription: 'aga',
    }, {
      offerId: '3',
      isPremiumOffer: false,
      offerImageSource: 'img/apartment-02.jpg',
      offerPrice: 132,
      offerRating: 4,
      offerName: 'Canal View Prinsengracht',
      offerType: 'Apartment',
      offerBedrooms: 3,
      offerGuestsNumber: 4,
      offerServices: ['a', 'b', 'c'],
      offerHost: {
        userId: 1,
        userAvatar: 'a.com',
        userName: 'Agatha',
        isUserPro: true
      },
      offerDescription: 'aga',
    }, {
      offerId: '4',
      isPremiumOffer: true,
      offerImageSource: 'img/apartment-03.jpg',
      offerPrice: 180,
      offerRating: 5,
      offerName: 'Nice, cozy, warm big bed apartment',
      offerType: 'Apartment',
      offerBedrooms: 3,
      offerGuestsNumber: 4,
      offerServices: ['a', 'b', 'c'],
      offerHost: {
        userId: 1,
        userAvatar: 'a.com',
        userName: 'Agatha',
        isUserPro: true
      },
      offerDescription: 'aga',
    }
  ];
