import { useEffect, useState } from "react";
import { DataItem } from "../../interfaces";
import SectionsTitle from "../components/slider/SectionsTitle";
import Card from "../components/movies/Card";

function Stared() {
  const [savedData, setSavedData] = useState<DataItem[]>([]);

  useEffect(() => {
    const savedData = localStorage.getItem("saved");
    const sdata = savedData ? JSON.parse(savedData) : [];
    setSavedData(sdata);
  }, []);

  const List = () => {
    return (
      <div
        className={` grid laptop:grid-cols-4 gap-[20px] tablet:grid-cols-3 grid-cols-2`}
      >
        {savedData?.reverse()?.map((item, index) => {
          return (
            <Card path={item.path + "/"} key={index} content={item.data} />
          );
        })}
      </div>
    );
  };

  return (
    <div className="p-4 md:p-0">
      <SectionsTitle title={"Saved Movies & TV Series"} />
      <div className="flex flex-col gap-8 w-11/12 mx-auto">
        {savedData.length === 0 ? (
          <div className="text-gray-600 text-lg">
            There are no saved movies or TV series.
          </div>
        ) : (
          List()
        )}
      </div>
    </div>
  );
}

export default Stared;
