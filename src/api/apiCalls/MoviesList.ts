import axios from 'axios';
import {ENDPOINTS} from './Constants';

export const getListMovies = async () => {
  try {
    const response = await axios.get(ENDPOINTS.TOP_RATED_MOVIES);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getListNowMovies = async () => {
  try {
    const response = await axios.get(ENDPOINTS.NOW_PLAYING_MOVIES);
    return response;
  } catch (error) {
    throw error;
  }
};
