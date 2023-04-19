import { FC, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { PremiumBadge } from '../../components/premium-badge/premium-badge';
import { Layout } from '../../components/layout/layout';
import { OffersList } from '../../components/list-offers/list-offers';
import { Map } from '../../components/map/map';
import { PropertyImage } from '../../components/property-image/property-image';
import { PropertyItem } from '../../components/property-item/property-item';
import { ReviewForm } from '../../components/review/review-form/review-form';
import { ReviewList } from '../../components/review/review-list/review-list';
import { AuthorizationStatus, NEAR_OFFERS_COUNT, PROPERTY_MAP_HEIGHT } from '../../const';
import { useAppSelector } from '../../hooks';
import { Offer } from '../../types/offer';
import { getRating } from '../../utils/utils';
import { NotFound } from '../not-found/not-found';
import { fetchReviewAction } from '../../store/api-actions';
import { store } from '../../store';

export const Property: FC = () => {
  const { id } = useParams();

  const [room, setRoom] = useState<Offer>();

  const reviews = useAppSelector((state) => state.reviews);
  const offers = useAppSelector((state) => state.offers);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  useEffect(() => {
    setRoom(offers.find((offer) => offer.id === Number(id)));
    store.dispatch(fetchReviewAction(id as string)());
  }, [id, offers]);

  if (!room) {
    return <NotFound/>;
  }
  const cityLocation = room.city;
  const nearOffers = [...offers.filter((offer) => offer.city.name === room.city.name && offer.id !== room.id).slice(0, NEAR_OFFERS_COUNT)];

  return (
    <Layout>
      <Helmet>
        <title>{room.title}</title>
      </Helmet>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {room.images.slice(-6).map((img) => (
                <PropertyImage key={img} img={img} alt={room.title} />
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {room.isPremium && <PremiumBadge className="property__mark" />}
              <div className="property__name-wrapper">
                <h1 className="property__name">{room.title}</h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span
                    style={{ width: `${getRating(room.rating)}%` }}
                  >
                  </span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {room.rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {room.type.replace(room.type[0], room.type[0].toUpperCase())}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {room.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {room.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{room.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {room.goods.map((item) => (
                    <PropertyItem key={item} item={item} />
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={room.host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{room.host.name}</span>
                  <span className="property__user-status">
                    {room.host.isPro}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    A quiet cozy and picturesque that hides behind a a river by
                    the unique lightness of Amsterdam. The building is green and
                    from 18th century.
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand
                    Square and National Opera, but where the bustle of the city
                    comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;{' '}
                  <span className="reviews__amount">{reviews[room.id]?.length}</span>
                </h2>
                <ReviewList reviews={reviews[room.id]}/>
                {
                  authorizationStatus === AuthorizationStatus.Auth
                    && <ReviewForm />
                }
              </section>
            </div>
          </div>
          <Map
            className="property__map"
            city={cityLocation}
            offers={nearOffers.concat(room)}
            activeOfferId={room.id}
            height={PROPERTY_MAP_HEIGHT}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <OffersList
              offers={nearOffers}
              cardType="property"
              classNames="near-places__list"
            />
          </section>
        </div>
      </main>
    </Layout>
  );
};
