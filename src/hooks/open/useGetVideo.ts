import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";

 const videoFetchApi = async (url: string) => {
    const request = await axiosInstance.get(url);
    const response = await request.data;
    const { results } = response;
  
    return results[results?.length - 1].key;
  };

  const useGetVideo = (url: string) => {
    return useQuery({
      queryKey: ["video", url],
      queryFn: () => videoFetchApi(url),
      staleTime: 0,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    });
  };
  
  export default useGetVideo;
  