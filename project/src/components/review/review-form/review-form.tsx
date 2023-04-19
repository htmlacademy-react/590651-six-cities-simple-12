import { ChangeEvent, FC, FormEvent, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewStatus, REVIEW_STARS } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getReviewLoadingStatus } from '../../../store/action';
import { RatingStar } from '../../rating-star/rating-star';
import { postCommentAction } from '../../../store/reviews-process/review-api';
import { setReviewRestStatus } from '../../../store/reviews-process/reviews-process';

export const ReviewForm: FC = () => {
  const dispatch = useAppDispatch();
  const reviewStatus = useAppSelector(getReviewLoadingStatus);
  const [reviewFormData, setData] = useState({ rating: '', review: '', id: '' });
  const formRef = useRef<HTMLFormElement>(null);
  const params = useParams();
  const paramsId = Number(params.id);


  const handleChangeData = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({ ...reviewFormData, [evt.target.name]: evt.target.value });
  };

  const refButton = useRef<HTMLButtonElement | null>(null);

  if (refButton.current !== null) {
    reviewFormData.review.length >= 50 && reviewFormData.review.length <= 300 && reviewFormData.rating !== ''
      ? refButton.current.disabled = false
      : refButton.current.disabled = true;
  }


  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setData({id: String(paramsId), rating: '', review: ''});
    dispatch(postCommentAction(reviewFormData));
    if (formRef.current !== null) {
      formRef.current.reset();
    }
  };

  useEffect(() => {
    if (reviewFormData.id !== String(paramsId)) {
      setData({...reviewFormData, id: String(paramsId)});
    }

    if (reviewStatus === ReviewStatus.ReviewFulfilled) {
      setData({...reviewFormData, rating: '', review: ''});

      dispatch(setReviewRestStatus());
    }
  }, [dispatch, reviewFormData, reviewStatus, paramsId]);

  return (
    <form className="reviews__form form" ref={formRef} action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {REVIEW_STARS.map((star) => (
          <RatingStar
            key={star.value}
            value={star.value}
            title={star.title}
            onChangeData={handleChangeData}
          />
        ))}
      </div>
      <textarea
        onChange={handleChangeData}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={reviewFormData.review}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
          ref={refButton}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
