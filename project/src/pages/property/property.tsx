import { useCallback, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/header/header';
import { NearPlacesList } from '../../components/offer/near-places-list/near-places-list';
import { PropertyPremiumMark } from '../../components/property-premium-mark/property-premium-mark';
import { ReviewForm } from '../../components/review/review-form/review-form';
import { ReviewsList } from '../../components/review/reviews-list/reviews-list';
import { CITY } from '../../mocks/city';
import { POINTS } from '../../mocks/points';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';
import { Map } from '../../components/map/map';
import 'leaflet/dist/leaflet.css';

type OfferPageProps = {
  offers: Offer[];
  reviews: Review[];
  nearPlaces: Offer[];
  nearPlaceClassName: string;
}

export function Property({reviews, nearPlaces, nearPlaceClassName, offers}: OfferPageProps): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);

  const onListItemHover = useCallback(
    (_offer: Offer | undefined) => setSelectedOffer(_offer),
    []
  );

  const offer = selectedOffer !== undefined
    ? selectedOffer
    : offers[0];

  return (
    <>
      <Header/>
      <main className="page__main page__main--property">
        <Helmet>
          <title>{offer.title}</title>
        </Helmet>
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                offer.images.map((image) => (
                  <div className="property__image-wrapper" key={`image-${image}`}>
                    <img className="property__image" src={image} alt={offer.title}/>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium && <PropertyPremiumMark/>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: '80%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">4.8</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  Apartment
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    offers[offer.id].goods.map((good) => (
                      <li className='property__inside-item' key={good}>
                        {good}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt={offer.host.name}/>
                  </div>
                  <span className="property__user-name">
                    {offer.host.name}
                  </span>
                  <span className="property__user-status">
                    {offer.host.isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text" style={{whiteSpace: 'break-spaces'}}>
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewsList reviews={reviews}/>
                <ReviewForm/>
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              city={selectedOffer !== undefined ? selectedOffer.city : CITY}
              points={POINTS}
              selectedOffer={selectedOffer}
              height={579}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <NearPlacesList
                offers={nearPlaces}
                onSetActiveOffer={onListItemHover}
                nearPlaceClassName={nearPlaceClassName}
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
