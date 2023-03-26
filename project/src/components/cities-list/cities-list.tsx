import React from 'react';
// import cn from 'classnames';
import { CITIES } from '../../const';
import { Link } from 'react-router-dom';

type CitiesProps = {
  currentCity: string;
  onChangeCity: (city: string) => void;
};

export function CitiesList(props: CitiesProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            CITIES.map((city) => (
              <li className="locations__item" key={city}>
                <Link
                  className={`locations__item-link tabs__item ${props.currentCity === city ? 'tabs__item--active' : ''}`}
                  to={city.toLowerCase()}
                  onClick={(evt) => {
                    evt.preventDefault();
                    props.onChangeCity(city);
                  }}
                >
                  <span>{city}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
}
