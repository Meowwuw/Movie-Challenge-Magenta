function MovieDetails({ movie }) {
    const genres = movie.genres ? movie.genres.map((genre) => genre.name).join(', ') : 'N/A';
    const actors = movie.credits && movie.credits.cast ? movie.credits.cast.map((actor) => actor.name).join(', ') : 'N/A';
  
    return (
      <div className="movie-details">
        <div className="movie-image">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
            height={450}
            width="350px"
          />
        </div>
        <div className="movie-info">
          <h2>{movie.title}</h2>
          <p>Descripción: {movie.overview}</p>
          <p>Género: {genres}</p>
          <p>Actores: {actors}</p>
        </div>
      </div>
    );
  }
  
  export default MovieDetails;
  