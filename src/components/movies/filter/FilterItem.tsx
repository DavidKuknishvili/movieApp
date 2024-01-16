import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import arrow from "../../../assets/icons/other/leftArrow.svg";

function FilterItem({
  title,
  data,
  actionData,
}: {
  actionData?: string;
  title: string;
  data?: {
    id: string;
    title: string;
  }[];
}) {
  const [show, setShow] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = {
    genres: searchParams.get("genre") || "",
    country: searchParams.get("country") || "",
    year: searchParams.get("year") || "",
  };

  return (
    <div className=" z-10 relative flex smallDevices:flex-[1] smallDevices:bg-[#292929] justify-center items-center ">
      <button
        className="py-4 tablet:px-10 bg-[#292929] flex items-center justify-center flex-col gap-1 px-0 cursor-pointer text-[#ebebeb]"
        onClick={() => setShow((prevState) => !prevState)}
      >
        <div className="flex items-center gap-1">
          {title}
          <img src={arrow} alt="" className="transform rotate-270" />
        </div>
      </button>
      {show &&
        (title === "Year" ? (
          <div className="absolute bg-[#2e2e2e] w-full p-4 bottom-[-72px]">
            <input
              type="number"
              className="w-full h-10 bg-[#878787] text-white px-1 placeholder-gray-600"
              placeholder="2024"
              onChange={(e) => {
                setSearchParams({
                  genre: params.genres,
                  country: params.country,
                  year: e.target.value,
                });
              }}
            />
          </div>
        ) : (
          <div className="absolute bg-[#2e2e2e] w-full p-[10px] h-[52vh] max-w-full overflow-y-auto overflow-x-hidden gap-[10px] bottom-[-52vh]">
            {data?.map((item, index) => (
              <button
                className={`text-[#929292] flex items-center gap-2 cursor-pointer ${
                  item.id === actionData && "text-white"
                }`}
                key={index}
                onClick={() => {
                  title === "Genre"
                    ? setSearchParams({
                        genre: item.id === params.genres ? "" : item.id,
                        country: params.country,
                        year: params.year,
                      })
                    : setSearchParams({
                        genre: params.genres,
                        country: item.id === params.country ? "" : item.id,
                        year: params.year,
                      });
                }}
              >
                <div
                  className={`w-4 h-4 rounded-full ${
                    item.id === actionData ? "bg-gradient-to-r from-cyan-500 to-purple-500" : "bg-gray-400"
                  }`}
                ></div>
                <span>{item.title}</span>
              </button>
            ))}
          </div>
        ))}
    </div>
  );
}

export default FilterItem;
