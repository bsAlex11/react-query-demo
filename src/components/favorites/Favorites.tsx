import { FunctionComponent } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';

import useGetFavoriteMovies from "../../hooks/useGetFavoriteMovies/useGetFavoriteMovies";
import MovieCard from "../movieCard/MovieCard";

import styles from './Favorites.module.scss';

const Favorites: FunctionComponent = () => {
  const { data, isLoading, isError } = useGetFavoriteMovies();

  return (
    <>
      <h4 className={styles.title}>List of favorites</h4>
      <div className={styles.moviesContainer}>
      {
        isLoading ? 
          <div className={styles.spinner}>
            <CircularProgress /> 
          </div>
        :
          data?.map(movie => (
            <MovieCard
              movie={movie}
              isFavorite={true}
            />
          ))
      }
    </div>
  </>
  )
};

export default Favorites;
