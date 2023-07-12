import PropTypes from 'prop-types';

function SelectedMoviesList({ selectedMovies }) {
  return (
    <div className='selected-movies'>
      <h2>Selected Movies</h2>
      <ul>
        {selectedMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

SelectedMoviesList.propTypes = {
    selectedMovies: PropTypes.array.isRequired,
  };
  

export default SelectedMoviesList;
