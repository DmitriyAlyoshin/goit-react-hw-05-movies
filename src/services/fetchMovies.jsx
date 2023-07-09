import axios from 'axios';

const API_KEY = '0473e9fc2662e5bdf8bc3dc368a66717';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const searchParams = new URLSearchParams({
  api_key: API_KEY,
  language: 'en-US',
  include_adult: false,
});

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/all/week?${searchParams}`);
  return data.results;
};

export const getMovieDetails = async id => {
  const { data } = await axios.get(`/movie/${id}?${searchParams}`);
  return data;
};

export const getMovieByName = async name => {
  const { data } = await axios.get(
    `/search/movie?${searchParams}&query=${name}`
  );
  return data.results;
};

export const getMovieCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits?${searchParams}`);
  return data.cast;
};

export const getMovieReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews?${searchParams}`);
  return data.results;
};
