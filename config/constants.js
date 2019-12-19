export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const APP_URL =
  typeof process.env.APP_URL === 'undefined'
    ? 'https://app.gohoppin.com'
    : process.env.APP_URL;

export const API_URL =
  typeof process.env.API_URL === 'undefined'
    ? 'https://beta.gohoppin.com'
    : process.env.API_URL;

export const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY || '';
