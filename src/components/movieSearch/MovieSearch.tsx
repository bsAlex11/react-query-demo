import React, { FunctionComponent, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

import MovieCard from '../movieCard/MovieCard';
import useFetchMovies from '../../hooks/useFetchMovies/useFetchMovies';

import styles from './MovieSearch.module.scss';

const MovieSearch: FunctionComponent = () => {

  const [title, setTitle] = useState('');
  const [{ data, isLoading }, { refetch: fetchMovies }] = useFetchMovies(title);
  const movies = data?.Search;

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
          isLoading ?
            <div className={styles.spinner}>
              <CircularProgress /> 
            </div> 
            :
            movies?.map(movie => (
              <MovieCard
                movie={movie}
                isFavorite={false}
              />
            ))
        }
      </div>
    </div>  
  );
};

export default MovieSearch;
