import { useInfiniteQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";
import { ApiInterface } from "../../../interfaces";
import {
  genreDetector,
  getBackdropPath,
  getImagePath,
} from "../../utils/utils";

type Filter = {
  genres: string;
  county: string;
  year: string;
  search: string;
  mode: string;
};

const fetchData = async (
  pageParam: number,
  setPageNumber: (value: React.SetStateAction<number>) => void,
  { genres, county, year, search, mode }: Filter
) => {
  setPageNumber(pageParam);
  const response = await axiosInstance.get(
    `/${
      search ? "search" : "discover"
    }/${mode}?include_adult=false&include_video=false&language=en-US&page=${pageParam}&sort_by=popularity.desc&with_genres=${genres}&with_origin_country=${county}&year=${year}&query=${search}`
  );
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
const useGetInfiniteData = (
  { genres, county, year, search, mode }: Filter,
  setPageNumber: (value: React.SetStateAction<number>) => void,
  pageCount: number
) => {
  return useInfiniteQuery({
    queryKey: ["infinity", genres, county, year, search, mode],
    queryFn: ({ pageParam = 0 }) =>
      fetchData(pageParam, setPageNumber, {
        genres,
        county,
        year,
        search,
        mode,
      }),
    initialPageParam: 1,
    getNextPageParam: () => pageCount + 1,
    staleTime: 0,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};

export default useGetInfiniteData;
