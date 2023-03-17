import { Offer } from '../types/offer';

export const OFFERS: Offer[] =
  [
    {
      id: 1,
      isPremium: true,
      previewImage: 'img/apartment-01.jpg',
      price: 120,
      rating: 4,
      title: 'Beautiful & luxurious apartment at great location',
      type: 'Apartment',
      bedrooms: 3,
      maxAdults: 4,
      goods: [
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
      host: {
        id: 1,
        avatarUrl: '/img/avatar-angelina.jpg',
        name: 'Angelina',
        isPro: true
      },
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. \n\nAn independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 1,
      },
      city: {
        location: {
          latitude: 52.3909553943508,
          longitude: 4.85309666406198,
          zoom: 1,
        },
        name: 'Amsterdam'
      },
      images: [
        'img/room.jpg',
        'img/apartment-01.jpg',
        'img/apartment-02.jpg',
        'img/apartment-03.jpg',
        'img/studio-01.jpg',
        'img/apartment-01.jpg',
      ]
    }, {
      id: 2,
      isPremium: false,
      previewImage: 'img/room.jpg',
      price: 80,
      rating: 4,
      title: 'Wood and stone place',
      type: 'Private room',
      bedrooms: 3,
      maxAdults: 4,
      goods: [
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
      host: {
        id: 2,
        avatarUrl: 'https://12.react.pages.academy/static/avatar/9.jpg',
        name: 'Agatha',
        isPro: true
      },
      description: 'aga',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 1,
      },
      city: {
        location: {
          latitude: 52.3609553943508,
          longitude: 4.85309666406198,
          zoom: 1,
        },
        name: 'Amsterdam'
      },
      images: [
        '1'
      ]
    }, {
      id: 3,
      isPremium: false,
      previewImage: 'img/apartment-02.jpg',
      price: 132,
      rating: 4,
      title: 'Canal View Prinsengracht',
      type: 'Apartment',
      bedrooms: 3,
      maxAdults: 4,
      goods: ['a', 'b', 'c'],
      host: {
        id: 3,
        avatarUrl: 'a.com',
        name: 'Agatha',
        isPro: true
      },
      description: 'aga',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 1,
      },
      city: {
        location: {
          latitude: 52.3909553943508,
          longitude: 4.929309666406198,
          zoom: 1,
        },
        name: 'Amsterdam'
      },
      images: [
        '1'
      ]
    }, {
      bedrooms: 3,
      city: {
        location: {
          latitude: 52.3809553943508,
          longitude: 4.939309666406198,
          zoom: 10
        },
        name: 'Amsterdam'
      },
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
      goods: [
        'Heating'
      ],
      host: {
        avatarUrl: 'img/1.png',
        id: 4,
        isPro: true,
        name: 'Angelina'
      },
      id: 4,
      images: [
        'img/1.png'
      ],
      isPremium: false,
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 8
      },
      maxAdults: 4,
      previewImage: 'img/apartment-03.jpg',
      price: 120,
      rating: 4.8,
      title: 'Nice, cozy, warm big bed apartment',
      type: 'apartment'
    }
  ];
