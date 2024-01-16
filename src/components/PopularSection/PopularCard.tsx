import { CardInterface } from "../../../interfaces";
import { Link } from "react-router-dom";
import StarsComponent from "../slider/StarComponent";

function PopularCard({ data }: { data: CardInterface }) {
  const { poster, title, genre, id, vote_average } = data;

  return (
    <div className="group relative w-full h-full cursor-pointer">
      <Link to={"/movie/" + id}>
        <div className="w-full h-full overflow-hidden filter  brightness-50 transition-all duration-1000 ease-in-out ">
          <img
            src={poster}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className={` hidden group-hover:hiddne absolute tablet:group-hover:flex flex-col justify-end transition-all duration-1000 ease-in-out bottom-[24px] mx-[24px]`}
        >
          <div>
            <span className="bg-[#1d1d1de0] bg-opacity-90 rounded-tl-xl rounded-br-xl px-2 py-1 text-xs md:text-sm text-teal-300">
              {genre[0]}
            </span>
            <StarsComponent number={vote_average} />
          </div>
          <div className="text-white font-medium sm:text-base text-sm sm:w-52 w-32 text-wrap">
            {title}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PopularCard;
