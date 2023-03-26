import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Offer } from '../../../types/offer';
import { OfferPremiumMark } from '../premium-offer/offer-premium-mark';

type CardProps = {
  offer: Offer;
  onSetActiveOffer: (offer: Offer | undefined) => void;
  className: string;
};

export const OfferItem: FC<CardProps> = ({
  offer, onSetActiveOffer, className
}) => {
  const { id, isPremium, previewImage, price, rating, title, type } = offer;

  const [isActive, setIsActive] = useState(false);

  return (
    <article
      className={`${className}__card place-card`}
      onMouseOver={() => {onSetActiveOffer(offer); setIsActive(true);}}
      onMouseLeave={() => {onSetActiveOffer(undefined); setIsActive(false);}}
    >
      {isActive}
      {isPremium && <OfferPremiumMark/>}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage}
            width="260" height="200" alt={title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};
