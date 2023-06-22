import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  // Llave api, para realizar peticiones
  const URL_API ='https://api.themoviedb.org/3'
  const KEY_API = '4f3837c06bf8760a86dcd46393db848b'
  const IMAGE_MOVIE = 'https://image.tmdb.org/t/p/original/'

  // Variables de estado
  const [movies, setMovies] = useState([])
  const [searchKey, setSearchKey] = useState("")

  // Función para realizar petición a la API
  const fetchMovies = async (searchKey) => {
      const type =searchKey ? "search" : "discover"
      const {data: {results},
     } = await axios.get( `${URL_API}/${type}/movie`,{
          params : {
            api_key: KEY_API,
            query: searchKey,
        },
    });

  setMovies(results)
  }

  useEffect(() => {
    fetchMovies();
  },[])

  //funcion para buscar

  const searchMovies =(e) =>{
    e.preventDefault();
    fetchMovies(searchKey);
  }

  return (
    <div>
      <h1 className='titulo'>Movies</h1>
      <form className='buscador' onSubmit={searchMovies}>
        <input
          type="text"
          placeholder ="Buscar"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      
      {/* contenedor para peliculas actuales */}
      <div className='container'>
        <div className='row'>
          {movies.map((movie) =>(
            <div key={movie.id} className='movies'>
              <img src={`${IMAGE_MOVIE + movie.poster_path}`} alt="" height={600} width="100%" />
              <h4 className='title-movie'>{movie.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App
