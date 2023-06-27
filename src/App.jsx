import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './components/Movie';
import MovieDetails from './components/MovieDetails';
import './App.css';

function App() {
  const URL_API = 'https://api.themoviedb.org/3';
  const KEY_API = '4f3837c06bf8760a86dcd46393db848b';

  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? 'search' : 'discover';
    const {
      data: { results },
    } = await axios.get(`${URL_API}/${type}/movie`, {
      params: {
        api_key: KEY_API,
        query: searchKey,
      },
    });

    setMovies(results);
  };

  const fetchMovieDetails = async (movieId) => {
    const response = await axios.get(`${URL_API}/movie/${movieId}`, {
      params: {
        api_key: KEY_API,
        append_to_response: 'credits',
      },
    });
  
    const movieDetails = response.data;
    setSelectedMovie(movieDetails);
  };
  

  const handleMovieClick = (movie) => {
    fetchMovieDetails(movie.id);
  };
  

  useEffect(() => {
    fetchMovies();
  }, []);

  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };

  return (
    <div>
      <h1 className='titulo'>Movies</h1>
      <form className='buscador' onSubmit={searchMovies}>
        <input
          type='text'
          placeholder='Buscar'
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
      {selectedMovie && <MovieDetails movie={selectedMovie} />}
      <div className='container'>
        <div className='row'>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              movie={movie}
              onClick={handleMovieClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
