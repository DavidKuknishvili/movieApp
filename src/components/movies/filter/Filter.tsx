import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { COUNTY_URL } from "../../../api/config";
import FilterItem from "./FilterItem";
import { axiosInstance } from "../../../lib/axios";

interface FilterInterface {
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
  genres: { id: string; title: string }[];
}
function Filter({ setSearchKeyword, genres }: FilterInterface) {
  const [countyData, setCountyData] = useState<any>();
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const fetchCounties = async () => {
      const response = await axiosInstance.get(COUNTY_URL);
      const counties = response?.data.map(
        (item: {
          iso_3166_1: string;
          english_name: string;
          native_name: string;
        }) => {
          return { id: item.iso_3166_1, title: item.english_name };
        }
      );
      setCountyData(counties);
    };

    fetchCounties();
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="bg-[#252525] w-full mt-[50px] flex flex-col justify-between p-[13px] pt-[30px] tablet:p-[30px] laptop:flex-row desktop:p-[30px] gap-[25px]">
      <div className="flex gap-6">
        <FilterItem
          actionData={searchParams.get("genre") || ""}
          title={"Genre"}
          data={genres}
        />
        <FilterItem
          actionData={searchParams.get("country") || ""}
          title={"County"}
          data={countyData}
        />
        <FilterItem title={"Year"} />
      </div>
      <div className="flex gap-4 relative">
        <input
          value={search}
          type="text"
          placeholder="Search ..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="bg-[#292929] text-white px-[25px] placeholder:text-[#c4c4c4] w-full desktop:w-[350px] "
        />
        {search && (
          <button
            onClick={() => {
              setSearchKeyword('')
              setSearch('');
              setSearchParams({
                genre: "",
                country: "",
                year: "",
              });
            }}
            className="text-white bg-red-600 w-8 h-8 flex items-center justify-center font-bold rounded-full cursor-pointer absolute right-0"
          >
            X
          </button>
        )}
        <button
          onClick={() => {
            setSearchKeyword(search);
          }}
          className="bg-gradient-to-tr from-[#00c0cc] via-[#c800c0] to-[#00c0cc38] bg-opacity-25 py-2 px-6 rounded-full text-white font-semibold cursor-pointer"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Filter;
