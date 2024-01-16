import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import StarsComponent from "../slider/StarComponent";
import { CardInterface, DetailsInterface } from "../../../interfaces";
import classes from "./CardList.module.scss";


function Card({
  content,
  path,
}: {
  content: CardInterface | DetailsInterface;
  path?: string;
}) {
  const { id, title, name, poster, genre, vote_average } = content;

  return (
    <Link to={`/${path}` + id}>
      <div className={`${classes.fadeInAnimation}w-full h-full relative cursor-pointer`}>
        <div className="w-full h-full overflow-hidden filter brightness-50">
          <LazyLoad offset={1980} height={"100%"} width={"100%"}>
            <img
              src={poster as string}
              alt=""
              className="w-full h-full object-cover transition-transform duration-1000 ease-in-out transform-gpu hover:scale-150"
            />
          </LazyLoad>
        </div>
        <div className="absolute bottom-4 sm:bottom-10 md:bottom-4 left-4 sm:left-8 md:left-4 flex flex-col">
          <span className="bg-[#1d1d1de0] bg-opacity-90 rounded-tl-xl rounded-br-xl px-2 py-1 text-xs md:text-sm text-teal-300 w-fit">
            {genre[0]}
          </span>{" "}
          <StarsComponent number={vote_average} />
          <h1 className="font-semibold text-white text-lg sm:text-xl md:text-lg lg:text-lg xl:text-xl sm:max-w-xs max-w-md md:max-w-xs truncate  text-wrap">
            {name ?? title}
          </h1>
        </div>
      </div>
    </Link>
  );
}

export default Card;
