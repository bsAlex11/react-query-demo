import { ADD_MOVIE_TO_FAVORITES } from './../../api/queryKeys';
import { addToFavorites } from './../../api/requests';
import { TMovie } from './../../components/movieCard/MovieCard';
import { useMutation } from "react-query";

const useAddFavoriteMovie = () => {
  const { data, isLoading, isError, mutate } = useMutation((movie: TMovie) => addToFavorites(movie),
    {
      mutationKey: ADD_MOVIE_TO_FAVORITES
    }
  );

  return [
    {
      data,
      isLoading,
      isError,
    },
    { mutate }
  ] as const;
};

export default useAddFavoriteMovie;
