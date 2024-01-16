import { ScrollRestoration, useLocation, useParams } from "react-router-dom";
import CardContent from "../components/slider/CardContent";
import SavedComponent from "../components/open/SavedComponent";
import DetailsComponent from "../components/open/DetailsComponent";
import {  CardInterface } from "../../interfaces";
import {
  DETAILS_URL,
  M_RECOMENDATION_API,
  CAST_URL,
  VIDEO_URL,
} from "../api/config";
import { CardCarousel } from "../components/slider/CardCarousel";
import OpenVisualComponent from "../components/open/OpenVisualComponent";
import Cast from "../components/open/cast/Cast";
import useGetDetails from "../hooks/open/useGetDetails";
import useGetCast from "../hooks/open/useGetCast";
import useGetData from "../hooks/getData/useGetData";
import useGetVideo from "../hooks/open/useGetVideo";

const Open = () => {
  const { id } = useParams<{ id: string }>();

  const { pathname } = useLocation();
  const mode = pathname.split("/")[1];

  const { data } = useGetDetails(DETAILS_URL(mode, id as string));
  const { data: castData } = useGetCast(CAST_URL(mode, id as string));
  const { data: recommendData } = useGetData(
    M_RECOMENDATION_API(mode, id as string)
  );
  const { data: videoKey } = useGetVideo(VIDEO_URL(mode, id as string));

  if (!data) {
    return null;
  }

  const {
    title,
    budget,
    genre,
    poster,
    backdrop_path,
    vote_average,
    overview,
    original_language,
    duration,
    status,
  } = data;

  console.log(recommendData);

  return (
    <div className="w-full h-screen relative">
      <ScrollRestoration />
      <div className="w-full h-screen relative  ">
        <div className="w-full h-full  before:absolute before:w-full before:z-10 before:h-full  before:bg-gradient-to-t  before:from-[#1d1d1d] before:via-[#1d1d1d5f] before:to-transparent">
          <img
            src={backdrop_path}
            alt="Backdrop"
            className="w-full h-full object-cover filter brightness-[50%] "
          />
        </div>
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center w-[95%] pl-[56px] h-screen mx-auto">
          <OpenVisualComponent poster={poster} videoId={videoKey} />
          <div className="flex justify-between items-center w-full">
            <h1 className="text-[25px] my-[20px] font-semibold text-white">
              {title}
            </h1>
            <div className="flex items-center gap-4">
              <SavedComponent path={mode} data={data} id={id as string} />
              <div className="border-2 border-white rounded-lg py-1 px-4 text-white">
                {vote_average.toFixed(1)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[90%] pl-[56px] m-auto gap-[25px] ">
        <DetailsComponent
          poster={poster as string}
          status={status}
          genre={genre}
          original_language={original_language}
          budget={budget}
          duration={duration}
          overview={overview}
        />
        <h2 className="text-white text-2xl my-6">Movie Cast</h2>
        <CardCarousel
          type="cast"
          content={<Cast data={castData} />}
          data={castData}
        />
      </div>
      {recommendData?.length && (
        <>
          <h2 className="text-white text-2xl my-6">Recommendations</h2>

          <CardCarousel
            type={"Upcoming"}
            data={recommendData as CardInterface[]}
            content={
              <CardContent
                path={mode + "/"}
                type={"Upcoming"}
                data={recommendData as CardInterface[]}
              />
            }
          />
        </>
      )}
    </div>
  );
};

export default Open;
