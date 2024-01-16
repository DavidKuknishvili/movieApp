import { useEffect, useState } from "react";
import star from "../../assets/icons/nav_icons/star.svg";
import { DataItem, DetailsInterface } from "../../../interfaces";

function SavedComponent({
  data,
  id,
  path,
}: {
  data: DetailsInterface;
  id: string;
  path: string;
}) {
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const handleSave = () => {
    const savedData = localStorage.getItem("saved");
    const sdata = savedData ? JSON.parse(savedData) : [];

    const existingIndex = sdata.findIndex((item: DataItem) => item.id === id);

    if (existingIndex === -1) {
      sdata.push({ id, data, path });
    } else {
      sdata.splice(existingIndex, 1);
    }

    localStorage.setItem("saved", JSON.stringify(sdata));
    setIsSaved(!isSaved);
  };

  useEffect(() => {
    const savedData = localStorage.getItem("saved");
    const sdata = savedData ? JSON.parse(savedData) : [];
    setIsSaved(sdata.some((item: DataItem) => item.id === id));
  }, [id]);

  return (
    <>
      <button
        className={`rounded-md w-9 h-9 border-2 border-gray-300 flex justify-center items-center relative transition duration-1000 cursor-pointer ${
          isSaved
            ? "bg-gradient-to-tr from-[#00c0cc] via-[#c800c0] to-[#00c0cc38] bg-opacity-25"
            : "bg-transparent hover:bg-gradient-to-tr from-[#0096a1] via-[#9a0095] to-[#00c0cc38] bg-opacity-25"
        }`}
        onClick={handleSave}
      >
        <img src={star} alt="" />
      </button>
    </>
  );
}

export default SavedComponent;
