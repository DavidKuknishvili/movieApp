import YouTube from "react-youtube";

function OpenVisualComponent({
  poster,
  videoId,
}: {
  poster: string | null;
  videoId: string;
}) {
  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="z-10 flex w-full items-center gap-[50px]">
      {poster && <img src={poster} className="w-[300px] h-[500px] object-cover hidden laptop:block" alt="Poster" />}
      <div className="w-full h-full">
        <YouTube opts={opts} videoId={videoId} className="w-full h-full" />
      </div>
    </div>
  );
}

export default OpenVisualComponent;
