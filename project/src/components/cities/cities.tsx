import cn from 'classnames';
import { FC } from 'react';
import { CITY_NAMES } from '../../const';

type CitiesProps = {
  currentCity: string;
  onChangeCity: (city: string) => void;
};

export const Cities: FC<CitiesProps> = ({ currentCity, onChangeCity }) => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITY_NAMES.map((city) => {
          const className = cn('locations__item-link tabs__item',
            currentCity === city ? 'tabs__item--active' : '',
          );
          return (
            <li className="locations__item" key={city}>
              <a
                className={className}
                href="/#"
                onClick={(evt) => {
                  evt.preventDefault();
                  onChangeCity(city);
                }}
              >
                <span>{city}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  </div>
);
