"use client";

import { useSwiper } from "swiper/react";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { Pi } from "lucide-react";

const WorkSliderButtons = ({ containerStyles, buttonStyles, iconStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={buttonStyles}>
        <PiCaretLeftBold
          className={iconStyles}
          onClick={() => swiper.slidePrev()}
        ></PiCaretLeftBold>
      </button>
      <button className={buttonStyles}>
        <PiCaretRightBold
          className={iconStyles}
          onClick={() => swiper.slideNext()}
        ></PiCaretRightBold>
      </button>
    </div>
  );
};

export default WorkSliderButtons;
