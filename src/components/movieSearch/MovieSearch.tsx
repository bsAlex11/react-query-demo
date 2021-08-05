import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { getMovies } from '../../api/requests';

import styles from './MovieSearch.module.scss';

const MovieSearch = () => {
  const [title, setTitle] = useState('');

  return (
    <div className={styles.wrapper}>
        <form onSubmit={(e) => {e.preventDefault();
         console.log('here', title)
         getMovies(title).then(res => console.log(res, 'resppss'));
        }
        }>
          <div className={styles.fieldsContainer}>
            <TextField
              label="Outlined" 
              variant="standard" 
              onChange={(e) => setTitle(e.target.value)} 
              value={title}
            /> 
            <Button variant="contained" color="primary" type='submit'>
              Search
            </Button>
          </div>  
        </form> 
    </div>  
  );
};

export default MovieSearch;
