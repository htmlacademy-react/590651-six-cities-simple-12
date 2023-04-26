import { ChangeEvent, FC, FormEvent, Fragment, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { REVIEW_STARS } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getReviewLoadingStatus } from '../../../store/action';
import { postCommentAction } from '../../../store/api-actions';

export const ReviewForm: FC = () => {
  const dispatch = useAppDispatch();
  const reviewStatus = useAppSelector(getReviewLoadingStatus);
  const [reviewFormData, setFormData] = useState({ rating: '', review: '', id: '' });
  const formRef = useRef<HTMLFormElement>(null);
  const params = useParams();
  const paramsId = Number(params.id);

  const handleChangeData = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...reviewFormData, [evt.target.name]: evt.target.value });
  };

  const refButton = useRef<HTMLButtonElement | null>(null);

  if (refButton.current !== null) {
    reviewFormData.review.length >= 50 && reviewFormData.review.length <= 300 && reviewFormData.rating !== ''
      ? refButton.current.disabled = false
      : refButton.current.disabled = true;
  }

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setFormData({id: String(paramsId), rating: '', review: ''});
    dispatch(postCommentAction(reviewFormData));
    if (formRef.current !== null) {
      formRef.current.reset();
    }
  };

  useEffect(() => {
    if (reviewFormData.id !== String(paramsId)) {
      setFormData({...reviewFormData, id: String(paramsId)});
    }

  }, [dispatch, reviewFormData, reviewStatus, paramsId]);

  const handleRatingSelect = (star: string) => {
    if (star !== reviewFormData.rating) {
      setFormData({...reviewFormData, rating: star});
    }
  };

  return (
    <form className="reviews__form form" ref={formRef} action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {
          REVIEW_STARS.map((star) => (
            <Fragment key={star.value}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={star.value}
                id={`${star.value}-stars`}
                type="radio"
                disabled={reviewStatus}
              />
              <label
                htmlFor={`${star.value}-stars`}
                className="reviews__rating-label form__rating-label"
                onClick={() => {handleRatingSelect(String(star.value));}}
                title={star.title}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          ))
        }
      </div>
      <textarea
        onChange={handleChangeData}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={reviewFormData.review}
        disabled={reviewStatus}
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
