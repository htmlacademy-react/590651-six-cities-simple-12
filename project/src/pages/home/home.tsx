import { FC, useState } from 'react';
import { Cities } from '../../components/cities/cities';
import { Layout } from '../../components/layout/layout';
import { OffersList } from '../../components/list-offers/list-offers';
import { LoadingScreen } from '../../components/loading-screen/loading-screen';
import { MainEmpty } from '../../components/main-empty/main-empty';
import { Map } from '../../components/map/map';
import { SortingList, getSortingOffers } from '../../components/sorting-list/sorting-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';
import { HOME_MAP_HEIGHT } from '../../const';

export const Home: FC = () => {
  const [activeOfferId, setActiveOfferId] = useState<number | undefined>(undefined);
  const offers = useAppSelector((state) => state.data.offers);
  const currentSortingValue = useAppSelector((state) => state.data.sortName);
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.data.city);

  const currentOffers = offers.filter(
    (offer) => offer.city.name === currentCity
  );

  const onChangeCity = (city: string) => {
    dispatch(changeCity({city}));
  };

  const sortingOffers = getSortingOffers(currentOffers, currentSortingValue);

  return (
    <Layout className="page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Cities currentCity={currentCity} onChangeCity={onChangeCity} />
        {currentOffers.length === 0 ? (
          <MainEmpty city={currentCity} />
        ) : (
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {currentOffers.length} places to stay in {currentCity}
                </b>
                <SortingList currentSortingValue={currentSortingValue} />
                {
                  currentOffers ?
                    <OffersList
                      offers={sortingOffers}
                      onListItemHover={setActiveOfferId}
                      cardType="home"
                      classNames="cities__places-list tabs__content"
                    /> :
                    <LoadingScreen/>
                }
              </section>
              <div className="cities__right-section">
                <Map
                  className="cities__map"
                  city={sortingOffers[0].city}
                  offers={sortingOffers}
                  activeOfferId={activeOfferId}
                  height={HOME_MAP_HEIGHT}
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
};
