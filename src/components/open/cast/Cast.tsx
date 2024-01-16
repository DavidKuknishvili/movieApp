import { CastInterface } from "../../../../interfaces";
import CastContent from "./CastContent";

function Cast({ data }: { data: CastInterface[] }) {
  return (
    <>
      {data?.slice(0, 15)?.map((cast: CastInterface) => (
        <div key={cast.id} className="flex-none w-72 overflow-hidden h-auto relative cursor-pointer transition-transform duration-600 ease-in-out">
          <CastContent data={cast} />
        </div>
      ))}
    </>
  );
}

export default Cast;
