import { CardInterface } from "../../../interfaces";
import { Link } from "react-router-dom";
import StarsComponent from "../slider/StarComponent";

function CarouselContent({ item }: { item: CardInterface }) {
  const { id, title, genre, backdrop_path, overview } = item;

  return (
    <>
      <img
        src={backdrop_path}
        alt=""
        className="filter brightness-50 h-full w-full object-cover object-center"
        width={"100%"}
        loading="lazy"
      />
      <div className="absolute flex flex-col items-start gap-4  md:ml-15 ml-[15%] h-screen justify-center">
        <span className="bg-[#1d1d1de0] bg-opacity-90 rounded-tl-xl rounded-br-xl px-2 py-1 text-xs md:text-sm text-teal-300">
          {genre[0]}
        </span>
        <StarsComponent number={5} />
        <h1 className="font-semibold text-white text-4xl md:text-3xl lg:text-4xl xl:text-5xl w-3/4 md:w-1/2">
          {title}
        </h1>
        <p className="text-white text-base md:text-sm lg:text-base w-3/4 md:w-1/2">
          {overview}
        </p>
        <Link to={`/movie/${id}`}>
          <button className="flex justify-center items-center cursor-pointer rounded-full w-48 md:w-36 md:h-10 text-white text-lg md:text-base lg:text-lg shadow-buttonShadow relative p-2 bg-gradient-to-tr from-[#00c0cc] via-[#c800c0] to-[#00c0cc38] bg-opacity-25 ">
            Watch now
          </button>
        </Link>
      </div>
    </>
  );
}

export default CarouselContent;
