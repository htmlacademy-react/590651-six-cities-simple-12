import dayjs from 'dayjs';
import { SortingTypes } from '../const';
import { Offer } from '../types/offer';

export const formatDate = (date: string, format: string) =>
  dayjs(date).format(format);

export const getRating = (rating: number) =>
  (Math.round(rating) * 100) / 5;

export const getSortingOffers = (offers: Offer[], activeSort: string) => {
  const sortingOffers = offers;

  switch (activeSort) {
    case SortingTypes[1]:
      return sortingOffers.sort((a, b) => a.price - b.price);
    case SortingTypes[2]:
      return sortingOffers.sort((a, b) => b.price - a.price);
    case SortingTypes[3]:
      return sortingOffers.sort((a, b) => b.rating - a.rating);
    default:
      return sortingOffers;
  }
};
