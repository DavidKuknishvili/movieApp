import LazyLoad from "react-lazy-load";
import { CastInterface } from "../../../../interfaces";

function CastContent({ data }: { data: CastInterface }) {
  const { name, profile_path } = data;
  return (
    <div className="w-full h-full relative cursor-pointer">
      <div className="w-full h-full filter brightness-50 overflow-hidden">
        <LazyLoad offset={1980}>
          {profile_path ? (
            <img
              className="w-full h-auto transition-transform duration-1500 ease-in-out transform hover:scale-150"
              src={
                "https://image.tmdb.org/t/p/w440_and_h660_face/" + profile_path
              }
              alt=""
            />
          ) : (
            <div className="w-full h-72 flex justify-center items-center transition-all duration-1500 ease bg-gray-300">
              <svg
                width="80"
                height="88"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG path */}
              </svg>
            </div>
          )}
        </LazyLoad>
      </div>
      <div className="absolute flex flex-col justify-end left-4 right-4 bottom-4">
        <div className="font-medium text-base leading-8 text-white">{name}</div>
      </div>
    </div>
  );
}

export default CastContent;
