import { Key, useEffect } from "react";
import classes from "./CardList.module.scss";
import { useInView } from "react-intersection-observer";
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import Card from "./Card";


function CardList({
  data,
  path,
  fetchNextPage,
}: {
  data: any;
  path?: string;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<InfiniteData<any, unknown>, Error>>;
}) {
  console.log(data);

  const { ref, inView } = useInView();

  useEffect(() => {
    console.log(inView);
    if (inView) {
      console.log("hello");
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <>
      <div
        className={`${classes.fadeInAnimation} grid laptop:grid-cols-4 gap-[20px] tablet:grid-cols-3 grid-cols-2`}
      >
        {data?.pages.map((page: any) => {
          return page.map((item: any, index: Key) => {
            if (item.poster !== null) {
              return <Card path={path} key={index} content={item} />;
            }
            return null;
          });
        })}
      </div>
      <div className="w-full h-[10px]" ref={ref}></div>
    </>
  );
}

export default CardList;
