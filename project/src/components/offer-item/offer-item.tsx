import { FC } from 'react';
import { generatePath, Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Offer } from '../../types/offer';
import { PremiumOffer } from '../premium-offer/premium-offer';

type CardProps = {
  offer: Offer;
};

export const OfferItem: FC<CardProps> = ({
  offer
}) => {
  const { offerId, isPremiumOffer, offerImageSource, offerPrice, offerRating, offerName, offerType } = offer;
  const link = generatePath(AppRoute.Room, {
    id: `${offerId}`,
  });

  return (
    <article className="cities__card place-card">
      {isPremiumOffer ? <PremiumOffer/> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={link}>
          <img className="place-card__image" src={offerImageSource} width="260" height="200" alt={offerName}/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offerPrice}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${offerRating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={link}>{offerName}</Link>
        </h2>
        <p className="place-card__type">{offerType}</p>
      </div>
    </article>
  );
};
