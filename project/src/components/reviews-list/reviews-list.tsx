import { FC } from 'react';
import { Review } from '../../types/review';
import { ReviewItem } from '../../components/review-item/review-item';

type ReviewsListProps = {
  reviews: Review[];
}

export const ReviewsList: FC<ReviewsListProps> = ({reviews}) => (
  <ul className="reviews__list">
    {
      reviews.map((review) => (
        <ReviewItem
          key = {review.reviewId}
          review = {review}
        />
      ))
    }
  </ul>
);
