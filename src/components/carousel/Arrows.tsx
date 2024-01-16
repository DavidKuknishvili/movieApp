import rightArrow from "../../assets/icons/other/rightArow.svg";
import leftArrow from "../../assets/icons/other/leftArrow.svg";

interface ArrowsProps {
  handlePreviousSlide: (scrollDirection: "left" | "right") => void;
  handleNextSlide: (scrollDirection: "left" | "right") => void;
  currentIndex: number;
  type?: string;
  secondType?: string;
}

const Arrows = ({
  handlePreviousSlide,
  handleNextSlide,
  currentIndex,
  secondType,
}: ArrowsProps) => {


  return (
    <>
      {currentIndex !== 0 && (
        <button
          onClick={() => handlePreviousSlide("left")}
          className={`${
            secondType === "cast" ? "w-[5%]" : "w-[15%]"
          } absolute left-0 transform -translate-y-1/2 bg-gradient-to-r from-[#1d1d1d] via-[#1d1d1d62] to-transparent text-white text-2xl cursor-pointer flex justify-center items-center opacity-50 transition duration-1000 hover:opacity-100 h-full  top-1/2`}
        >
          <img src={leftArrow} alt="" />
        </button>
      )}
      <button
        onClick={() => handleNextSlide("right")}
        className={`${
          secondType === "card" ? "w-[5%]" : "w-[15%]"
        }  bg-gradient-to-l  from-[#1d1d1d] via-[#1d1d1d62] to-transparent  absolute right-0 text-white text-2xl cursor-pointer h-full flex justify-center items-center opacity-50 transition-opacity duration-1000 transform -translate-y-1/2 hover:opacity-100  top-1/2`}
      >

        <img src={rightArrow} alt="" />
      </button>
    </>
  );
};

export default Arrows;
