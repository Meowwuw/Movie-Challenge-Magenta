// Componente Movie
function Movie({ movie, onClick }) {
  const IMAGE_MOVIE = 'https://image.tmdb.org/t/p/original/';

  const handleMovieClick = () => {
    onClick(movie);
  };

  return (
    <div className='movies' onClick={handleMovieClick}>
      <img src={`${IMAGE_MOVIE + movie.poster_path}`} alt={movie.title} height={600} width="100%" />
      <h4 className='title-movie'>{movie.title}</h4>
    </div>
  );
}

export default Movie;
