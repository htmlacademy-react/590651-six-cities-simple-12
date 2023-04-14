import { User } from './user';

export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
};

export type ReviewFormData = {
  review: string;
  rating: string;
  id: string;
};
