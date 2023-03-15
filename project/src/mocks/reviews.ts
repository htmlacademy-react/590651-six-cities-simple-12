import { Review } from '../types/review';

export const reviews: Review[] =
  [
    {
      reviewId: 1,
      user: {
        userId: 1,
        isUserPro: false,
        userName: 'Kendall',
        userAvatar: 'https://12.react.pages.academy/static/avatar/6.jpg'
      },
      rating: 4,
      comment: 'It was ok, but the weather was terrible and I spent the whole vacation at the house!',
      date: '2023-02-24'
    }, {
      reviewId: 2,
      user: {
        userId: 2,
        isUserPro: true,
        userName: 'Megan',
        userAvatar: 'https://12.react.pages.academy/static/avatar/7.jpg'
      },
      rating: 5,
      comment: 'It was cool, I liked everything!',
      date: '2023-02-15'
    }, {
      reviewId: 3,
      user: {
        userId: 3,
        isUserPro: false,
        userName: 'John',
        userAvatar: 'https://12.react.pages.academy/static/avatar/3.jpg'
      },
      rating: 2,
      comment: 'Bathed in the nature. Completely unplugged. Unforgettable.',
      date: '2023-02-11'
    }
  ];
