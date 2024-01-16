import { useQuery } from "@tanstack/react-query";
import {
  getBackdropPath,
  getImagePath,
  timeConverter,
} from "../../utils/utils";
import { axiosInstance } from "../../lib/axios";

export const detailedFetchApi = async (url: string) => {
  const request = await axiosInstance.get(url);
  const response = await request.data;
  const {
    id,
    name,
    title,
    budget,
    runtime,
    original_language,
    revenue,
    status,
    poster_path,
    genres,
    backdrop_path,
    vote_average,
    overview,
  } = response;
  const data = {
    id: id,
    budget: budget,
    original_language: original_language,
    revenue: revenue,
    status: status,
    duration: timeConverter(runtime),
    title: name || title,
    poster: getImagePath(poster_path),
    backdrop_path: getBackdropPath(backdrop_path),
    genre: genres.map((genre: any) => genre.name),
    vote_average: vote_average,
    overview: overview,
  };

  return data;
};

const useGetDetails = (url: string) => {
  return useQuery({
    queryKey: ["details", url],
    queryFn: () => detailedFetchApi(url),
    staleTime: 0,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};

export default useGetDetails;
