import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";

export const castFetchApi = async (url: string) => {
  const request = await axiosInstance.get(url);
  const response = await request.data;
  const { cast } = response;

  return cast;
};

const useGetCast = (url: string) => {
  return useQuery({
    queryKey: ["cast", url],
    queryFn: () => castFetchApi(url),
    staleTime: 0,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};

export default useGetCast;
