import { FunctionComponent } from "react";
import useGetFavoriteMovies from "../../hooks/useGetFavoriteMovies/useGetFavoriteMovies";
import MovieCard from "../movieCard/MovieCard";

import styles from './Favorites.module.scss';

const Favorites: FunctionComponent = () => {
  const {data, isLoading, isError} = useGetFavoriteMovies();

  console.log(data, 'favv');
  

  return (
    <div className={styles.moviesContainer}>
    {
      data?.map(movie => (
        <MovieCard
          movie={movie}
        />
      ))
    }
  </div>
  )
};

export default Favorites;
