import { CardInterface } from "../../../interfaces";
import Card from "../movies/Card";

function CardContent({
  data,
  type,
  path,
}: {
  data: CardInterface[];
  path: string;
  type?: string | undefined;
}) {
  return (
    <>
      {data?.map((card) =>
        card.poster ? (
          <div
            className={`flex-shrink-0 overflow-hidden ${
              type === "Upcoming" ? "w-[504px] h-screen" : "w-[292px] h-440px"
            } relative cursor-pointer transition-transform duration-700 ease-in-out`}
            key={card.id}
          >
            <Card path={path} content={card} />
          </div>
        ) : null
      )}
    </>
  );
}

export default CardContent;
