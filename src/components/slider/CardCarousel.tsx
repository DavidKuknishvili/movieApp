import { useRef, useState } from "react";
import Arrows from "../carousel/Arrows";
import { CardInterface, CastInterface } from "../../../interfaces";

export const CardCarousel = ({
  type,
  data,
  content,
}: {
  type?: string;
  data: CardInterface[] | CastInterface[];
  content: JSX.Element;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const ref = useRef<any>();

  const cardWidth = 292;
  const cardMargin = 16;
  const container = ref?.current;

  const handlePrev = () => {
    let prev = (currentIndex - 1) * ((cardWidth + cardMargin) * 2);
    setCurrentIndex((prevIndex) => (prev < 0 ? data?.length : prevIndex - 1));
    prev = (currentIndex - 1) * ((cardWidth + cardMargin) * 2);
    if (prev < 0) {
      const lastPosition = data?.length * (cardWidth + cardMargin * 2);
      ref.current?.scrollTo({ left: lastPosition, behavior: "smooth" });
    } else {
      ref.current?.scrollTo({ left: prev, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    const maxScrollPosition =
      container?.scrollWidth ?? 0 - container?.clientWidth;
    let next = (currentIndex + 1) * ((cardWidth + cardMargin) * 2);

    setCurrentIndex((prevIndex) =>
      next >= maxScrollPosition ? prevIndex : prevIndex + 1
    );
    next = (currentIndex + 1) * ((cardWidth + cardMargin) * 2);
    if (next >= maxScrollPosition) {
      ref.current?.scrollTo({ left: next, behavior: "smooth" });
    } else {
      ref.current?.scrollTo({ left: next, behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center relative">
      <div
        ref={ref}
        className={`cardCarousel w-screen grid  grid-flow-col relative pl-0 sm:pl-[46px]
        ${type === "Upcoming" ? "gap-0" : "gap-[16px]"} 
        ${type == "cast" ? "pl-0" : "pl-[46px]"}`
      }
      >
        {content}
      </div>
      <Arrows
        type={"card"}
        secondType={type}
        currentIndex={currentIndex}
        handleNextSlide={handleNext}
        handlePreviousSlide={handlePrev}
      />
    </div>
  );
};
