import { FC, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { PremiumBadge } from '../../components/premium-badge/premium-badge';
import { Layout } from '../../components/layout/layout';
import { ListOffers } from '../../components/list-offers/list-offers';
import { Map } from '../../components/map/map';
import { PropertyImage } from '../../components/property-image/property-image';
import { PropertyItem } from '../../components/property-item/property-item';
import { ReviewForm } from '../../components/review/review-form/review-form';
import { ReviewList } from '../../components/review/review-list/review-list';
import { COUNT_NEAR_OFFER } from '../../const';
import { useAppSelector } from '../../hooks';
import { REVIEWS } from '../../mocks/reviews';
import { Offer } from '../../types/offer';
import { getRating } from '../../utils/utils';
import { NotFound } from '../not-found/not-found';

export const Property: FC = () => {
  const [activeOfferId, setActiveOfferId] = useState<number | undefined>(undefined);
  const { id } = useParams();
  const [room, setRoom] = useState<Offer>();
  const offers = useAppSelector((state) => state.offers);

  useEffect(() => {
    setRoom(offers.find((offer) => offer.id === Number(id)));
  }, [id, offers]);

  if (!room) {
    return <NotFound/>;
  }
  const cityLocation = room.city;
  const nearOffers = [...offers.filter((offer) => offer.city.name === room.city.name).slice(0, COUNT_NEAR_OFFER), room];
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
                <PropertyImage key={img} img={img} />
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
                  <span className="reviews__amount">{REVIEWS.length}</span>
                </h2>
                <ReviewList />
                <ReviewForm />
              </section>
            </div>
          </div>
          <Map
            className="property__map"
            city={cityLocation}
            offers={nearOffers}
            activeOfferId={activeOfferId ? activeOfferId : room.id}
            height={560}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <ListOffers
              offers={offers.filter((offer) => offer.city.name === room.city.name).slice(0, COUNT_NEAR_OFFER)}
              cardType="property"
              classNames="near-places__list"
              onListItemHover={setActiveOfferId}
            />
          </section>
        </div>
      </main>
    </Layout>
  );
};
