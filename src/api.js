import axios from 'axios';

const URL_API = 'https://api.themoviedb.org/3';
const KEY_API = '4f3837c06bf8760a86dcd46393db848b';

export const fetchMovies = async (searchKey) => {
  const type = searchKey ? 'search' : 'discover';
  const response = await axios.get(`${URL_API}/${type}/movie`, {
    params: {
      api_key: KEY_API,
      query: searchKey,
    },
  });
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`${URL_API}/movie/${movieId}`, {
    params: {
      api_key: KEY_API,
      append_to_response: 'credits,images',
    },
  });
  return response.data;
};
