export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';
export const NEAR_OFFERS_COUNT = 3;
export const TIMEOUT_SHOW_ERROR = 2000;
export const HOME_MAP_HEIGHT = 742;
export const PROPERTY_MAP_HEIGHT = 560;

export enum AppRoute {
  Login = '/login',
  Room = '/offer/:id',
  Root = '/',
}

export enum APIRoute {
  Offers = '/hotels',
  Comments = '/comments/',
  Login = '/login',
  Logout = '/logout',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum ReviewStatus {
  ReviewRest = 'REVIEW_REST',
  ReviewPending = 'REVIEW_PENDING',
  ReviewFulfilled = 'REVIEW_FULFILLED',
}

export enum ErrorMessage {
  EmailError = 'Please enter correct e-mail',
  PasswordError = 'Please enter at least one letter and one number',
  CommentError = 'Error! Can\'t add review, please, try again',
}

export const REVIEW_STARS = [
  { value: 5, title: 'perfect' },
  { value: 4, title: 'good' },
  { value: 3, title: 'not bad' },
  { value: 2, title: 'terribly' },
  { value: 1, title: 'badly' },
];

export const CITY_NAMES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const SORTING_TYPES = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];
