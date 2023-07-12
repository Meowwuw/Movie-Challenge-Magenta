import PropTypes from 'prop-types';

import ActorCarousel from './ActorCarousel';
function MovieDetails({ movie, onSelect }) {
  const genres = movie.genres ? movie.genres.map((genre) => genre.name) : ['N/A'];
  const actors = movie.credits && movie.credits.cast ? movie.credits.cast : [];

  const handleSelect = () => {
    onSelect(movie);
  }

  return (
    <div className="movie-details">
      <div className="background-image" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}></div>
      <div className="overlay"></div>
      <div className="movie-image">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
          color="white"
          height={450}
          width="350px"
        />
      </div>
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <div className="genre-container">
          <div className="genre-list">
            {genres.map((genre, index) => (
              <div key={index} className="genre-item">
                {genre}
              </div>
            ))}
          </div>
        </div>
        <div className="actor-container">
          <ActorCarousel actors={actors} />
        </div>
        <button onClick={handleSelect}>Añadir a la lista</button>
      </div>
    </div>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired, // Agregar esta línea para validar la propiedad poster_path
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired
      })
    ),
    credits: PropTypes.shape({
      cast: PropTypes.arrayOf(
        PropTypes.shape({
          // Definir las propiedades específicas del objeto cast si es necesario
        })
      )
    })
  }).isRequired,
  onSelect: PropTypes.func.isRequired
};

export default MovieDetails;