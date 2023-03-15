import { User } from './user';

export type Offer = {
  offerId: string;
  isPremiumOffer: boolean;
  offerImageSource: string;
  offerPrice: number;
  offerRating: number;
  offerName: string;
  offerType: string;
  offerBedrooms: number;
  offerGuestsNumber: number;
  offerServices: string[];
  offerHost: User;
  offerDescription: string;
};
