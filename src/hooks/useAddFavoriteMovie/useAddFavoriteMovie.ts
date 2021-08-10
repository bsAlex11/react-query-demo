import { ADD_MOVIE_TO_FAVORITES } from './../../api/queryKeys';
import { addToFavorites } from './../../api/requests';
import { useMutation } from "react-query";
import { AxiosError } from 'axios';
import { TMovie } from '../../types';
import { toast } from 'react-toastify';

const useAddFavoriteMovie = () => {
  const { data, isLoading, isSuccess, isError, mutate } = useMutation<TMovie, AxiosError, TMovie>((movie: TMovie) => addToFavorites(movie),
    {
      mutationKey: ADD_MOVIE_TO_FAVORITES,
      onError: (error) => {
        toast.error("Something went wrong", {
          position: toast.POSITION.TOP_LEFT
        });
      },
      onSuccess: (data) => {},
      onSettled: (data, error) => {},
    }
  );

  return [
    {
      data,
      isLoading,
      isSuccess,
      isError,
    },
    { mutate }
  ] as const;
};

export default useAddFavoriteMovie;
