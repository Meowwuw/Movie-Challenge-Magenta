import React, { useState } from "react";
import "../ActorCarousel.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ActorCarousel = ({ actors }) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < actors.length - 5) {
      setIndex(index + 1);
    }
  };

  const previousSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const visibleActors = actors.slice(index, index + 5);

  return (
    <div className="carousel-container">
      {index > 0 && (
        <button className="carousel-button" onClick={previousSlide}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      )}
      {visibleActors.map((actor) => (
        <img
          key={actor.id}
          src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
          alt={actor.name}
          className="actor-item"
          height={150}
          width="120px"
        />
      ))}
      {index < actors.length - 5 && (
        <button className="carousel-button" onClick={nextSlide}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      )}
    </div>
  );
};

export default ActorCarousel;
