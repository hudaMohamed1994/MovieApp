import axios from 'axios';
import {ENDPOINTS} from './Constants'

export const getListMovies = async () => {
  console.log(ENDPOINTS.TOP_RATED_MOVIES)
  try {    
    const response = await axios.get(ENDPOINTS.TOP_RATED_MOVIES);
      return response
    
  } catch (error) {
    throw error;
  }
};
