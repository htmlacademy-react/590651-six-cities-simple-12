import { FC, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { SORTING_TYPES } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeSorting } from '../../store/action';
import { Offer } from '../../types/offer';

type SortingProps = {
  currentSortingValue: string;
};

export const getSortingOffers = (offers: Offer[], activeSort: string) => {
  const sortingOffers = offers;

  switch (activeSort) {
    case SORTING_TYPES[1]:
      return sortingOffers.sort((a, b) => a.price - b.price);
    case SORTING_TYPES[2]:
      return sortingOffers.sort((a, b) => b.price - a.price);
    case SORTING_TYPES[3]:
      return sortingOffers.sort((a, b) => b.rating - a.rating);
    default:
      return sortingOffers;
  }
};


export const SortingList: FC<SortingProps> = ({ currentSortingValue }) => {
  const [isSortingOpen, setSortingOpen] = useState(false);
  const sortRef = useRef<HTMLFormElement>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleClickOutside = (evt: MouseEvent) => {
      if (sortRef.current && !evt.composedPath().includes(sortRef.current)) {
        setSortingOpen(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  const handlerChangeSort = (sortingValue: string) => {
    dispatch(changeSorting({sortName: sortingValue}));
    setSortingOpen(false);
  };

  return (
    <form ref={sortRef} className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setSortingOpen(!isSortingOpen)}
      >
        &nbsp;{currentSortingValue}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isSortingOpen && (
        <ul className="places__options places__options--custom places__options--opened">
          {SORTING_TYPES.map((sortingValue) => {
            const className = cn('places__option', {
              'places__option--active': currentSortingValue === sortingValue,
            });
            return (
              <li
                className={className}
                tabIndex={0}
                onClick={() => handlerChangeSort(sortingValue)}
                key={sortingValue}
              >
                {sortingValue}
              </li>
            );
          })}
        </ul>
      )}
    </form>
  );
};
