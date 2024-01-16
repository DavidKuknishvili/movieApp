import { useState } from "react";
import Arrows from "./Arrows";
import CarouselContent from "./CarouselContent";
import { CardInterface } from "../../../interfaces";

const Carousel = ({ data }: { data: CardInterface[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + data.length) % data.length);
  };

  return (
    <>
      <div className="flex overflow-hidden">
        {data?.map((slide, index) => (
          <div
            key={index}
            className="flex relative flex-grow-0 flex-shrink-0 w-[100vw] h-[100vh] transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <CarouselContent item={slide} />
          </div>
        ))}
      </div>
      <Arrows
        currentIndex={currentSlide}
        handleNextSlide={handleNextSlide}
        handlePreviousSlide={handlePreviousSlide}
      />
    </>
  );
};

export default Carousel;
