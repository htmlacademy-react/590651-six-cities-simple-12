import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/header/header';
import { PlacesOptionsSelect } from '../../components/places-options-select/places-options-select';
import { Offer } from '../../types/offer';
import { OffersList } from '../../components/offers-list/offers-list';
import { Map } from '../../components/map/map';
import 'leaflet/dist/leaflet.css';
import { CITY } from '../../mocks/city';
import { POINTS } from '../../mocks/points';
import { useCallback, useState } from 'react';

type MainPageProps = {
  offersCount: number;
  offers: Offer[];
}

export function Main({offersCount, offers}: MainPageProps): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);

  const onListItemHover = useCallback(
    (_offer: Offer | undefined) => setSelectedOffer(_offer),
    []
  );

  return (
    <>
      <Helmet>
        <title>Six Cities</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in {CITY.name}</b>
              <PlacesOptionsSelect />
              <OffersList offers={offers} onSetActiveOffer={onListItemHover}/>
            </section>
            <div className="cities__right-section">
              <Map city={CITY} points={POINTS} selectedOffer={selectedOffer}/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
