import { getFavoriteMovies } from './../../api/requests';
import { GET_FAVORITE_MOVIES } from './../../api/queryKeys';
import { useQuery } from "react-query";

const useGetFavoriteMovies = () => {
  const {data, isLoading, isError} = useQuery(GET_FAVORITE_MOVIES, getFavoriteMovies);

  return {data, isLoading, isError};
};

export default useGetFavoriteMovies;
