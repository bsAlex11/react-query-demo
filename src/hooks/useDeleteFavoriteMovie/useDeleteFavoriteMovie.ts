import { DELETE_FAVORITE_MOVIE, GET_FAVORITE_MOVIES } from './../../api/queryKeys';
import { useMutation, useQueryClient } from "react-query";
import { deleteFavoriteMovie } from "../../api/requests";
import { AxiosError } from 'axios';

const useDeleteFavoriteMovie = () => {
  const queryClient = useQueryClient();
  const {data, isLoading, isSuccess, isError, mutate} = useMutation<null, AxiosError, number>((id: number) => deleteFavoriteMovie(id),
    {
      mutationKey: DELETE_FAVORITE_MOVIE,
      onSuccess: () => {
        queryClient.refetchQueries([GET_FAVORITE_MOVIES]);
      },
    }
  );

  return [
    {
      data,
      isError,
      isLoading,
      isSuccess,
    },
    { mutate, },
  ] as const;
};

export default useDeleteFavoriteMovie;
