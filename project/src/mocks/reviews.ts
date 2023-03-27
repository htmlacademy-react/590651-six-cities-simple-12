import { Review } from '../types/review';

export const REVIEWS: Review[] =
  [
    {
      id: 1,
      user: {
        id: 1,
        isPro: false,
        name: 'Kendall',
        avatarUrl: 'https://12.react.pages.academy/static/avatar/6.jpg'
      },
      rating: 4,
      comment: 'It was ok, but the weather was terrible and I spent the whole vacation at the house!',
      date: '2023-02-24'
    }, {
      id: 2,
      user: {
        id: 2,
        isPro: true,
        name: 'Megan',
        avatarUrl: 'https://12.react.pages.academy/static/avatar/7.jpg'
      },
      rating: 5,
      comment: 'It was cool, I liked everything!',
      date: '2023-02-15'
    }, {
      id: 3,
      user: {
        id: 3,
        isPro: false,
        name: 'John',
        avatarUrl: 'https://12.react.pages.academy/static/avatar/3.jpg'
      },
      rating: 2,
      comment: 'Bathed in the nature. Completely unplugged. Unforgettable.',
      date: '2023-02-11'
    }
  ];
