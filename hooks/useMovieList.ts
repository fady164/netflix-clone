import fetcher from "@/lib/fetcher";
import useSwr from "swr";

const useMovieList = () => {
  const { data, error, isLoading, mutate } = useSwr("/api/movies", fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useMovieList;
