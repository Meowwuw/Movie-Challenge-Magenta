import PropTypes from 'prop-types';

function WinnerDisplay({ winner }) {
  return (
    <div className='winner-display'>
      <h2>Winner</h2>
      <div className="movie">
        <img
          src={`https://image.tmdb.org/t/p/original/${winner.poster_path}`}
          alt={winner.title}
        />
        <h4 className='title-movie'>{winner.title}</h4>
      </div>
    </div>
  );
}

WinnerDisplay.propTypes = {
  winner: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default WinnerDisplay;
