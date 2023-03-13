import { User } from './user';

export type Review = {
  reviewId: number;
  rating: number;
  comment: string;
  date: string;
  user: User;
}
