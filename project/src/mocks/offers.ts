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
          latitude: 52.3702157,
          longitude: 4.8951679,
          zoom: 10
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
          latitude: 52.3702157,
          longitude: 4.8951679,
          zoom: 10
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
        'img/room.jpg',
        'img/apartment-01.jpg',
        'img/apartment-02.jpg',
        'img/apartment-03.jpg',
        'img/studio-01.jpg',
        'img/apartment-01.jpg',
      ]
    }, {
      bedrooms: 3,
      city: {
        location: {
          latitude: 52.3702157,
          longitude: 4.8951679,
          zoom: 10
        },
        name: 'Amsterdam'
      },
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
      goods: [
        'Heating'
      ],
      host: {
        avatarUrl: '/img/avatar-angelina.jpg',
        id: 1,
        isPro: true,
        name: 'Angelina'
      },
      id: 4,
      images: [
        'img/room.jpg',
        'img/apartment-01.jpg',
        'img/apartment-02.jpg',
        'img/apartment-03.jpg',
        'img/studio-01.jpg',
        'img/apartment-01.jpg',
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
      type: 'Apartment'
    }, {
      city: {
        name: 'Paris',
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      previewImage: 'https://12.react.pages.academy/static/hotel/3.jpg',
      images: [
        'https://12.react.pages.academy/static/hotel/14.jpg',
        'https://12.react.pages.academy/static/hotel/8.jpg',
        'https://12.react.pages.academy/static/hotel/19.jpg',
        'https://12.react.pages.academy/static/hotel/16.jpg',
        'https://12.react.pages.academy/static/hotel/10.jpg',
        'https://12.react.pages.academy/static/hotel/15.jpg',
        'https://12.react.pages.academy/static/hotel/3.jpg',
        'https://12.react.pages.academy/static/hotel/6.jpg',
        'https://12.react.pages.academy/static/hotel/13.jpg',
        'https://12.react.pages.academy/static/hotel/2.jpg',
        'https://12.react.pages.academy/static/hotel/9.jpg',
        'https://12.react.pages.academy/static/hotel/1.jpg',
        'https://12.react.pages.academy/static/hotel/18.jpg',
        'https://12.react.pages.academy/static/hotel/20.jpg'
      ],
      title: 'Amazing and Extremely Central Flat',
      isPremium: false,
      rating: 3.8,
      type: 'room',
      bedrooms: 1,
      maxAdults: 2,
      price: 224,
      goods: [
        'Laptop friendly workspace'
      ],
      host: {
        id: 1,
        name: 'Angelina',
        isPro: true,
        avatarUrl: 'img/avatar-angelina.jpg'
      },
      description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
      location: {
        latitude: 48.862610000000004,
        longitude: 2.369499,
        zoom: 16
      },
      id: 5
    },
    {
      city: {
        name: 'Cologne',
        location: {
          latitude: 50.938361,
          longitude: 6.959974,
          zoom: 13
        }
      },
      previewImage: 'https://12.react.pages.academy/static/hotel/18.jpg',
      images: [
        'https://12.react.pages.academy/static/hotel/17.jpg',
        'https://12.react.pages.academy/static/hotel/15.jpg',
        'https://12.react.pages.academy/static/hotel/12.jpg',
        'https://12.react.pages.academy/static/hotel/7.jpg',
        'https://12.react.pages.academy/static/hotel/16.jpg',
        'https://12.react.pages.academy/static/hotel/9.jpg',
        'https://12.react.pages.academy/static/hotel/5.jpg',
        'https://12.react.pages.academy/static/hotel/10.jpg',
        'https://12.react.pages.academy/static/hotel/19.jpg',
        'https://12.react.pages.academy/static/hotel/6.jpg',
        'https://12.react.pages.academy/static/hotel/14.jpg',
        'https://12.react.pages.academy/static/hotel/2.jpg',
        'https://12.react.pages.academy/static/hotel/13.jpg',
        'https://12.react.pages.academy/static/hotel/1.jpg'
      ],
      title: 'Nice, cozy, warm huge bed apartment',
      isPremium: false,
      rating: 3.3,
      type: 'room',
      bedrooms: 1,
      maxAdults: 1,
      price: 215,
      goods: [
        'Washer',
        'Towels',
        'Dishwasher',
        'Fridge',
        'Air conditioning',
        'Coffee machine',
        'Breakfast',
        'Laptop friendly workspace',
        'Baby seat',
        'Washing machine'
      ],
      host: {
        id: 1,
        name: 'Angelina',
        isPro: true,
        avatarUrl: 'img/avatar-angelina.jpg'
      },
      description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
      location: {
        latitude: 50.945361,
        longitude: 6.962974,
        zoom: 16
      },
      id: 6
    },
    {
      city: {
        name: 'Dusseldorf',
        location: {
          latitude: 51.225402,
          longitude: 6.776314,
          zoom: 13
        }
      },
      previewImage: 'https://12.react.pages.academy/static/hotel/12.jpg',
      images: [
        'https://12.react.pages.academy/static/hotel/3.jpg',
        'https://12.react.pages.academy/static/hotel/7.jpg',
        'https://12.react.pages.academy/static/hotel/12.jpg',
        'https://12.react.pages.academy/static/hotel/1.jpg',
        'https://12.react.pages.academy/static/hotel/4.jpg',
        'https://12.react.pages.academy/static/hotel/14.jpg',
        'https://12.react.pages.academy/static/hotel/9.jpg',
        'https://12.react.pages.academy/static/hotel/10.jpg',
        'https://12.react.pages.academy/static/hotel/8.jpg',
        'https://12.react.pages.academy/static/hotel/6.jpg',
        'https://12.react.pages.academy/static/hotel/11.jpg',
        'https://12.react.pages.academy/static/hotel/5.jpg',
        'https://12.react.pages.academy/static/hotel/19.jpg',
        'https://12.react.pages.academy/static/hotel/17.jpg'
      ],
      title: 'The Joshua Tree House',
      isPremium: true,
      rating: 4.5,
      type: 'house',
      bedrooms: 3,
      maxAdults: 5,
      price: 165,
      goods: [
        'Laptop friendly workspace',
        'Coffee machine',
        'Baby seat',
        'Fridge',
        'Breakfast',
        'Air conditioning',
        'Washer',
        'Dishwasher',
        'Towels'
      ],
      host: {
        id: 1,
        name: 'Angelina',
        isPro: true,
        avatarUrl: 'img/avatar-angelina.jpg'
      },
      description: 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
      location: {
        latitude: 51.217402,
        longitude: 6.7693140000000005,
        zoom: 16
      },
      id: 7
    },
    {
      city: {
        name: 'Brussels',
        location: {
          latitude: 50.846557,
          longitude: 4.351697,
          zoom: 13
        }
      },
      previewImage: 'https://12.react.pages.academy/static/hotel/19.jpg',
      images: [
        'https://12.react.pages.academy/static/hotel/4.jpg',
        'https://12.react.pages.academy/static/hotel/8.jpg',
        'https://12.react.pages.academy/static/hotel/11.jpg',
        'https://12.react.pages.academy/static/hotel/14.jpg',
        'https://12.react.pages.academy/static/hotel/12.jpg',
        'https://12.react.pages.academy/static/hotel/18.jpg',
        'https://12.react.pages.academy/static/hotel/9.jpg',
        'https://12.react.pages.academy/static/hotel/2.jpg',
        'https://12.react.pages.academy/static/hotel/1.jpg',
        'https://12.react.pages.academy/static/hotel/15.jpg',
        'https://12.react.pages.academy/static/hotel/19.jpg',
        'https://12.react.pages.academy/static/hotel/13.jpg',
        'https://12.react.pages.academy/static/hotel/7.jpg',
        'https://12.react.pages.academy/static/hotel/17.jpg'
      ],
      title: 'Canal Beautiful View Prinsengracht',
      isPremium: false,
      rating: 2.9,
      type: 'room',
      bedrooms: 1,
      maxAdults: 2,
      price: 181,
      goods: [
        'Fridge',
        'Washer',
        'Laptop friendly workspace',
        'Air conditioning',
        'Baby seat',
        'Towels',
        'Breakfast'
      ],
      host: {
        id: 1,
        name: 'Angelina',
        isPro: true,
        avatarUrl: 'img/avatar-angelina.jpg'
      },
      description: 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
      location: {
        latitude: 50.865556999999995,
        longitude: 4.371696999999999,
        zoom: 16
      },
      id: 8
    },
  ];
