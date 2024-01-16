import React from "react";
import loaderImage from "../../assets/icons/other/loaderImage.png";
import classes from './Loader.module.scss'

const Loader: React.FC = () => (
  <div className="grid laptop:grid-cols-4 gap-[20px] tablet:grid-cols-3 grid-cols-2">
    {Array(8)
      .fill(8)
      .map((_, index) => (
        <div
          key={index}
          className={` ${classes.loaderCard} w-full relative bg-[#252525] overflow-hidden flex items-end justify-center`}
        >
          <img
            src={loaderImage}
            alt=""
            className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
          />
          <div className="w-11/12 h-12 absolute bottom-5 bg-[#292929]" />
          
        </div>
      ))}
  </div>
);

export default Loader;
