import { CardInterface } from "../../../interfaces";
import { MouseEventHandler, useEffect, useState } from "react";
import PopularCard from "./PopularCard";

function PopularComponent({ data }: { data: CardInterface[] }) {
  const [backimage, setBackimage] = useState<string>();
  const [blur, setBlur] = useState<boolean>(false);

  useEffect(() => {
    data && setBackimage(data[0]?.backdrop_path);
  }, [data]);

  return (
    <div className="w-full h-[80vh] relative">
      <img
        src={backimage}
        alt=""
        className={`w-full h-full object-cover transition-filter brightness-75 transition-transform duration-1000 ease-in ${blur ? 'blur-sm' : 'blur-2xl' } `}
      />

      <div className="absolute w-full h-[100%] bottom-0 flex items-center justify-center pr-[25px] phone:pl-[81px] pl-[25px] gap-[10px]">
        {data?.slice(0, 6).map((card, index) => {
          const handleMouseOver: MouseEventHandler<HTMLDivElement> = () => {
            setBackimage(card.backdrop_path);
            setBlur((prevBlur) => !prevBlur);
          };

          return (
            <div
              key={index}
              className="h-[45vh] w-1/6 filter flex justify-center items-center transition-flex duration-1000 ease flex-1 hover:flex-[2] "
              onMouseEnter={handleMouseOver}
              onMouseLeave={() => setBlur((prevBlur) => !prevBlur)}
            >
              <PopularCard data={card} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PopularComponent;
