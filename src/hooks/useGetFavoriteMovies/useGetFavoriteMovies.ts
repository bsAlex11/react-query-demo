import { TMovie } from './../../types';
import { getFavoriteMovies } from './../../api/requests';
import { GET_FAVORITE_MOVIES } from './../../api/queryKeys';
import { useQuery } from "react-query";
import { toast } from 'react-toastify';

const useGetFavoriteMovies = () => {
  const {data, isLoading, isError} = useQuery<TMovie[]>(GET_FAVORITE_MOVIES, getFavoriteMovies, {
    onError: (error) => {
      toast.error("Something went wrong", {
        position: toast.POSITION.TOP_LEFT
      });
    },
    onSuccess: (data) => {},
    onSettled: (data, error) => {},
   // staleTime: 5000 || Infinity ,
    cacheTime: 300000,
    refetchOnWindowFocus: true,
    retry: 2,
    refetchOnMount: true,
    refetchOnReconnect: true,
  //  refetchInterval: 3000,
  //  refetchIntervalInBackground: true,
  });

  return {data, isLoading, isError};
};

export default useGetFavoriteMovies;
