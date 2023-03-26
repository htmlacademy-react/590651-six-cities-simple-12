import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/header/header';
import { PlacesOptionsSelect } from '../../components/places-options-select/places-options-select';
import { Offer } from '../../types/offer';
import { OffersList } from '../../components/offer/offers-list/offers-list';
import { Map } from '../../components/map/map';
import 'leaflet/dist/leaflet.css';
import { POINTS } from '../../mocks/points';
import { useCallback, useEffect, useState } from 'react';
import { CitiesList } from '../../components/cities-list/cities-list';
import { selectOffersOnCity, setAllOffers } from '../../store/slices/offers-slice';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { CITY } from '../../mocks/city';

type MainPageProps = {
  className: string;
}

export function Main({className}: MainPageProps): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);
  const [currentCity, setCurrentCity] = useState<string>('Paris');

  const onListItemHover = useCallback(
    (_offer: Offer | undefined) => setSelectedOffer(_offer),
    []
  );

  const onChangeCity = useCallback(
    (_city: string) => setCurrentCity(_city), []
  );

  const dispatch = useAppDispatch();

  const currentOffers = useAppSelector(selectOffersOnCity(currentCity) );

  useEffect(() => {
    dispatch(setAllOffers());
  },[]);

  return (
    <>
      <Helmet>
        <title>Six Cities</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList currentCity={currentCity} onChangeCity={onChangeCity}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {currentCity}</b>
              <PlacesOptionsSelect />
              <OffersList offers={currentOffers} onSetActiveOffer={onListItemHover} className={className}/>
            </section>
            <div className="cities__right-section">
              <Map city={currentOffers.length > 0 ? currentOffers[0].city : CITY} points={POINTS} selectedOffer={selectedOffer} height={754}/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
