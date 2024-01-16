import Description from "./Description";
import Genres from "./Genres";
import Details from "./details/Details";

interface Data {
    poster: string;
    genre: string[];
    original_language: string;
    budget: number;
    duration: string;
    overview: string;
    status: string;
  }
  
  function DetailsComponent({
    poster,
    genre,
    original_language,
    budget,
    duration,
    overview,
    status,
  }: Data) {
    return (
      <div className="flex gap-5">
        <div className="laptop:hidden phone:block smallDevices:hidden  w-[300px]">
          <img src={poster} className="w-[300px] h-[500px] object-cover lg:hidden block" alt="Poster" />
        </div>
        <div className="flex flex-col w-full gap-6">
          <Genres genres={genre} />
          <Details
            original_Language={original_language}
            budget={budget}
            status={status}
            durations={duration}
          />
          <Description description={overview} />
        </div>
      </div>
    );
  }
  
  export default DetailsComponent;
  