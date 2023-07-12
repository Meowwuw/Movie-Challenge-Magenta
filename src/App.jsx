import { useEffect, useState, useRef } from 'react';
import { fetchMovies, fetchMovieDetails } from './api';
import SearchForm from './components/SearchForm';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import SelectedMoviesList from './components/SelectedMoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [showWinner, setShowWinner] = useState(false);
  const [winner, setWinner] = useState(null);

  const containerRef = useRef(null); // Ref del contenedor principal

  const handleMovieClick = async (movie) => {
    const movieDetails = await fetchMovieDetails(movie.id);
    setSelectedMovie(movieDetails);
    scrollToTop(); // Llama a la función para desplazarse hacia arriba
  };

  const scrollToTop = () => {
    containerRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleSearch = async (keyword) => {
    const results = await fetchMovies(keyword);
    setMovies(results);

    if (results.length > 0) {
      const firstMovie = results[0];
      const movieDetails = await fetchMovieDetails(firstMovie.id);
      setSelectedMovie(movieDetails);
    } else {
      setSelectedMovie(null);
    }
  };

  const handleSelectMovie = (movie) => {
    if (selectedMovies.length < 5 && !selectedMovies.includes(movie)) {
      setSelectedMovies([...selectedMovies, movie]);
    } else {
      alert('Ya has seleccionado 5 películas o esta película ya fue seleccionada.');
    }
  };

  const handleLottery = () => {
    if (selectedMovies.length < 5) {
      alert('Debes seleccionar al menos 5 películas antes de realizar el sorteo.');
      return;
    }

    const winnerIndex = Math.floor(Math.random() * selectedMovies.length);
    const winner = selectedMovies[winnerIndex];
    setWinner(winner);
    setShowWinner(true);
  };

  const handleReset = async () => {
    setSelectedMovie(null);
    setSelectedMovies([]);
    setShowWinner(false);
    setWinner(null);

    const results = await fetchMovies();
    setMovies(results);
  };

  useEffect(() => {
    const getMovies = async () => {
      const results = await fetchMovies();
      setMovies(results);
    };

    getMovies();
  }, []);

  return (
    <div>
      <h1 className='titulo'>Movies</h1>
      <SearchForm onSearch={handleSearch} />
      {showWinner ? (
        <>
          <button onClick={handleReset}>Volver</button>
          {winner && (
            <div className='container' ref={containerRef}>
              <div className='row'>
                <div className="movie">
                  <div className="poster-container">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${winner.poster_path}`}
                      alt={winner.title}
                      height={500}
                      width={500}
                    />
                  </div>
                  <h4 className='title-movie'>{winner.title}</h4>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <button onClick={handleLottery} disabled={selectedMovies.length < 5}>
            {selectedMovies.length < 5 ? `Seleccionaste ${selectedMovies.length} películas` : 'Estoy listo para sortear'}
          </button>
          {selectedMovies.length > 0 && <SelectedMoviesList selectedMovies={selectedMovies} />}
          {selectedMovie && <MovieDetails movie={selectedMovie} onSelect={handleSelectMovie} />}
          <MovieList movies={movies} onClick={handleMovieClick} containerRef={containerRef} />
        </>
      )}
      <div ref={containerRef}></div>
    </div>
  );
}

export default App;
