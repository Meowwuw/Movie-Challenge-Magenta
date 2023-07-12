import PropTypes from 'prop-types';
import Movie from './Movie';

function MovieList({ movies, onClick, containerRef }) {
    return (
      <div className='container'>
        <div className='row'>
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} onClick={onClick} containerRef={containerRef} />
          ))}
        </div>
      </div>
    );
  }

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  containerRef: PropTypes.object.isRequired,
};

export default MovieList;

