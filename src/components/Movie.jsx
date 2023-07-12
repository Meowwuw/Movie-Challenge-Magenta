import PropTypes from 'prop-types';

function Movie({ movie, onClick, containerRef }) {
  const IMAGE_MOVIE = 'https://image.tmdb.org/t/p/original/';

  const handleMovieClick = () => {
    onClick(movie);
    scrollToTop();
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

  return (
    <div className='movies' onClick={handleMovieClick}>
      <img src={`${IMAGE_MOVIE + movie.poster_path}`} alt={movie.title} height={600} width="100%" />
      <h4 className='title-movie'>{movie.title}</h4>
    </div>
  );
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  containerRef: PropTypes.object.isRequired,
};

export default Movie;
