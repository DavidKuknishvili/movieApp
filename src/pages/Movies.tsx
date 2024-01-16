import { useState } from "react";
import { ScrollRestoration, useSearchParams } from "react-router-dom";
import { moviesGenres } from "../data/filterData";
import Filter from "../components/movies/filter/Filter";
import CardList from "../components/movies/CardList";
import useGetInfiniteData from "../hooks/getInfinityData/useGetInfinityData";
import Loader from "../components/loader/Loader";

function List() {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [pageNumber, setPageNumber] = useState(0);
  const [searchParams] = useSearchParams({
    genre: "",
    country: "",
    year: "",
  });
  const { data, fetchNextPage, isLoading } = useGetInfiniteData(
    {
      genres: searchParams.get("genre") as string,
      county: searchParams.get("country") as string,
      year: searchParams.get("year") as string,
      search: searchKeyword,
      mode: "movie",

    },
    setPageNumber,
    pageNumber
  );

  return (
    <>
      <div className="flex flex-col gap-[50px] w-[93%] m-auto phone:pl-[56px] ">
        <ScrollRestoration />

        <Filter setSearchKeyword={setSearchKeyword} genres={moviesGenres} />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <CardList fetchNextPage={fetchNextPage} path="movie/" data={data} />
          </>
        )}
      </div>
    </>
  );
}

export default List;
