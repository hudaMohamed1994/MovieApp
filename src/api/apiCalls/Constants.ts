export const API_BASE_URL = 'https://api.themoviedb.org/3/movie/'
export const apiKey = 'cb80f6d191cf24ab6fe27575b039f6fe'
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/'



export const ENDPOINTS = {
  TOP_RATED_MOVIES: `${API_BASE_URL}top_rated?api_key=${apiKey}`,
  NOW_PLAYING_MOVIES: `${API_BASE_URL}now_playing?api_key=${apiKey}`
};
