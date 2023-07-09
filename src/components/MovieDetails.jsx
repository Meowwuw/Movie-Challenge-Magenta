import ActorCarousel from './ActorCarousel';

function MovieDetails({ movie }) {
  const genres = movie.genres ? movie.genres.map((genre) => genre.name) : ['N/A'];
  const actors = movie.credits && movie.credits.cast ? movie.credits.cast : [];

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

      </div>
    </div>
  );
}

export default MovieDetails;
