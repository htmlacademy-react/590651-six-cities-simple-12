import { User } from './user';

export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
};

// TODO new review posting
export type ReviewFormData = {
  id: string;
  review: string;
  rating: string;
};
