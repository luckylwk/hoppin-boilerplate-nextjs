import { ERRORS } from 'config/settings/errors';
import { AUTH_FLAGS, CUSTOMER_FLAGS } from 'config/settings/featureFlags';
import { ICONS, LOGOS, DEFAULT_AVATAR_URI } from 'config/settings/assets';

let settings = {};

settings.LOGOS = LOGOS;
settings.ICONS = ICONS;
settings.ERRORS = ERRORS;
settings.AUTH_FLAGS = AUTH_FLAGS;
settings.CUSTOMER_FLAGS = CUSTOMER_FLAGS;

export const SETTINGS = settings;
