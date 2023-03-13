import { ChangeEvent, useState } from 'react';
import { ReviewRating } from '../review-rating/review-rating';

type ReviewData = {
  rating: number;
  review: string;
}

export function ReviewForm(): JSX.Element {
  const [reviewFormData, setReviewFormData] = useState<ReviewData>({
    rating: 0,
    review: ''
  });

  const fieldChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setReviewFormData({...reviewFormData, [name]: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <ReviewRating fieldChangeHandler={fieldChangeHandler}/>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={fieldChangeHandler}
        value={reviewFormData.review}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}
