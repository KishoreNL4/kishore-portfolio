import React from "react";
import { kisbg } from "../../assets";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[300px] lgl:w-[500px] lgl:h-[500px] z-10 rounded-full object-contain "
        src={kisbg}
        alt="bannerImg"
      />
    </div>
  );
};

export default RightBanner;
