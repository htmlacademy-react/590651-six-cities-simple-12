import { Review } from '../../types/review';

type ReviewProps = {
  review: Review;
}

export function ReviewItem(props: ReviewProps): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={props.review.user.userAvatar} width="54" height="54" alt={props.review.user.userName}/>
        </div>
        <span className="reviews__user-name">
          {props.review.user.userName}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${props.review.rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {props.review.comment}
        </p>
        <time className="reviews__time" dateTime={props.review.date}>{props.review.date}</time>
      </div>
    </li>
  );
}
