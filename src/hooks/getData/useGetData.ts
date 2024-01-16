import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";
import { ApiInterface } from "../../../interfaces";
import {
  genreDetector,
  getBackdropPath,
  getImagePath,
} from "../../utils/utils";

const fetchUpcoming = async (url: string) => {
  const response = await axiosInstance.get(url);
  const responseData = await response.data;
  const { results } = await responseData;

  const data = results.map(
    ({
      id,
      title,
      poster_path,
      genre_ids,
      backdrop_path,
      vote_average,
      overview,
      name,
    }: ApiInterface) => ({
      id: id,
      name: name,
      title: title,
      poster: getImagePath(poster_path),
      backdrop_path: getBackdropPath(backdrop_path),
      genre: genre_ids.map((genre) => genreDetector(genre)),
      vote_average: vote_average,
      overview: overview,
    })
  );

  return data;
};

const useGetData = (url: string) => {
  return useQuery({
    queryKey: ["upcoming"],
    queryFn: () => fetchUpcoming(url),
    staleTime: 0,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};

export default useGetData;
