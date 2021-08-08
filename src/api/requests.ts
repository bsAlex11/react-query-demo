import { OMDB_API_KEY } from './../constants';
import axios from "axios";

export const getMovies = (title) => {  
  return axios.get(`https://www.omdbapi.com/?s=${title}&apikey=${OMDB_API_KEY}`)
    .then(response => response.data);
};

export const addToFavorites = (movie) => {
  return axios({
    method: 'post',
    url: 'http://localhost:3000/favorites',
    data: JSON.stringify(movie),
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(response => response.data);
};

export const getFavoriteMovies = () => {
  return axios.get('http://localhost:3000/favorites')
  .then(response => response.data);
}
