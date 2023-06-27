import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GetData () {
  const apiKey = '35d75f4c69aa907579c2efd87ad489db';
  const api = `https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`;
  // variable de estado
  const [movie, setMovie] = React.useState(null);
  
  useEffect(() => {
    getMovie();
  }, [])

  // get() realizar solicitud, .then() acceder a los datos json
  const getMovie = async () => {
    const response = await axios.get(api)
    setMovie(response.data);
  }
    return (
      <div>
        { movie  ? (<h2> {movie.title} </h2>) : (<h3>loading</h3>)}
      </div>
      ) 
}

export default App
