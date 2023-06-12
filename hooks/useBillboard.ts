import fetcher from "@/lib/fetcher";
import useSwr from "swr";

const usebillboard = () => {
  const { data, error, isLoading, mutate } = useSwr("/api/random", fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    isLoading,
    error,
    mutate,
  };
};

export default usebillboard;
