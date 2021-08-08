import { useQuery } from "react-query";
import { FETCH_MOVIES } from "../../api/queryKeys";
import { getMovies } from "../../api/requests";

const useFetchMovies = (title) => {
  const { data, isLoading, isError, refetch } = useQuery([FETCH_MOVIES, title],
    () => getMovies(title),
    {
      enabled: false
    });

  return [
    {
      data,
      isLoading,
      isError,
    },
    { refetch }
  ] as const;
};

export default useFetchMovies;
