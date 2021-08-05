import axios from "axios";

export const getMovies = (title: string) => {
  return axios.get(`https://www.omdbapi.com/?s=${title}&apikey=9491d326`)
    .then(response => response);
};
