import { City } from './city';
import { User } from './user';

export type Offer = {
  id: number;
  city: City;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isPremium: boolean;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
  bedrooms: number;
  maxAdults: number;
  goods: string[];
  host: User;
  images: string[];
  description: string;
};
