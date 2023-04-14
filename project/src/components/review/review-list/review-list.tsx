import { Review } from '../../../types/review';
import { ReviewItem } from '../review-item/review-item';

type ReviewListProps = {
  reviews: Review[];
}

export function ReviewList(props: ReviewListProps) {
  if (!props.reviews) {
    return null;
  }
  return (
    <ul className="reviews__list">
      {props.reviews.slice(-10).sort((a, b) => b.id - a.id).map((review) => (
        <ReviewItem key={review.user.name} review={review} />
      ))}
    </ul>
  );
}
