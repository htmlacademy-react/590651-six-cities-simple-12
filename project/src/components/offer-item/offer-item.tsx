import { FC, useState } from 'react';
import { generatePath, Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Offer } from '../../types/offer';
import { PremiumOffer } from '../premium-offer/premium-offer';

type CardProps = {
  offer: Offer;
  onSetActiveOffer: (offer: Offer | undefined) => void;
};

export const OfferItem: FC<CardProps> = ({
  offer, onSetActiveOffer
}) => {
  const { id, isPremium, previewImage, price, rating, title, type } = offer;
  const link = generatePath(AppRoute.Room, {
    id: `${id}`,
  });

  const [isActive] = useState(false);

  return (
    <article
      className="cities__card place-card"
      onMouseOver={() => {onSetActiveOffer(offer);}}
      onMouseLeave={() => {onSetActiveOffer(undefined);}}
    >
      {isActive}
      {isPremium ? <PremiumOffer/> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={link}>
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
          <Link to={link}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};
