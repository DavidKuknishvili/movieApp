import stars from "../../assets/icons/other/stars.svg";

const StarsComponent = ({ number }: { number: number }) => {
  const n = Math.round(number / 2);

  return (
    <div className="flex mt-5 md:mt-2">
      {[...Array(n).keys()].map((_, i) => (
        <img key={i} src={stars} alt="" className="h-6 md:h-4 mr-1" />
      ))}
    </div>
  );
};

export default StarsComponent;
