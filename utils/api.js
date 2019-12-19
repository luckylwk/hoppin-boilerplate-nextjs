import ky from 'ky-universal';

import { API_URL, IS_PRODUCTION } from 'config/constants';

const loggingPrefix = `🌩  API (${API_URL})`;

const api = ky.create({
  credentials: 'include',
  prefixUrl: `${API_URL}/api/v1/`,
});

export const authPing = () => {
  return api
    .get(`${API_URL}/auth/app/ping/NULL`, {
      prefixUrl: '',
    })
    .json();
};

export const getExperiences = async (q) => {
  if (!IS_PRODUCTION) console.log(`${loggingPrefix} - getExperiences`);

  try {
    const response = await api.get(`experience${q ? `?q=${q}` : ''}`).json();
    return response.results;
  } catch (error) {
    throw err;
  }
};

export const getExperience = async (slug) => {
  if (!IS_PRODUCTION)
    console.log(`${loggingPrefix} - getExperience - slug: ${slug}`);

  try {
    const response = await api.get(`experience/${slug}`).json();
    return response.result;
  } catch (err) {
    throw err;
  }
};

export default api;
