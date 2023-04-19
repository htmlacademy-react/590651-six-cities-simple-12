import { FC } from 'react';
import { Review } from '../../../types/review';
import dayjs from 'dayjs';


type ReviewItemProps = {
  review: Review;
};

export const formatDate = (date: string, format: string) =>
  dayjs(date).format(format);

export const getRating = (rating: number) =>
  (Math.round(rating) * 100) / 5;

export const ReviewItem: FC<ReviewItemProps> = ({ review }) => {
  const { comment, date, rating, user } = review;
  const { avatarUrl, isPro, name } = user;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
          <span className="property__user-status">{isPro}</span>
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${getRating(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time
          className="reviews__time"
          dateTime={formatDate(date, 'YYYY-MM-DD')}
        >
          {formatDate(date, 'MMMM YYYY')}
        </time>
      </div>
    </li>
  );
};
