import React, { FunctionComponent, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

import MovieCard from '../movieCard/MovieCard';
import useFetchMovies from '../../hooks/useFetchMovies/useFetchMovies';

import styles from './MovieSearch.module.scss';

const MovieSearch: FunctionComponent = () => {

  const [title, setTitle] = useState('');
  const [{ data }, { refetch: fetchMovies }] = useFetchMovies(title);
  const movies = data?.Search;
console.log(movies, 'data');

  return (
    <div className={styles.wrapper}>
      <NavLink 
        to="/favorites"
        className={styles.link}
      >
        My favorites
      </NavLink>
      <form onSubmit={(e) => {
          e.preventDefault();
          fetchMovies();
        }
      }>
        <div className={styles.fieldsContainer}>
          <TextField
            label="Add title" 
            variant="standard" 
            onChange={(e) => setTitle(e.target.value)} 
            value={title}
          /> 
          <Button variant="contained" color="primary" type='submit'>
            Search
          </Button>
        </div>  
      </form>
      <div className={styles.moviesContainer}>
        {
          movies?.map(movie => (
            <MovieCard
              movie={movie}
            />
          ))
        }
      </div>
    </div>  
  );
};

export default MovieSearch;
