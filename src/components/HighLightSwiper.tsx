"use client";
import "./component.css";
// import Swiper core and required modules
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useEffect, useRef, useState } from "react";
import { LeftCircleArrowSvg, RightCircleArrowSvg } from "./svg";
import HighLightSwiperCard from "./HighLightSwiperCard";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const HighLightSwiper = () => {
  const swiperRef = useRef<SwiperType>();
  const [slideNumber, setSlideNumber] = useState(2);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const swipeData = [
    {
      name: "THE PINK PIG",
      link: "/editions/the_pink_pig",
      color: "#F182F7",
      img: "/editions/The_Pink_Pig.JPG",
    },
    {
      name: "THE PINK PIG",
      link: "/editions/the_pink_pig",
      color: "#BDC1C1",
      img: "/editions/The_Pink_Pig.JPG",
    },
    {
      name: "THE PINK PIG",
      link: "/editions/the_pink_pig",
      color: "#8c59b4",
      img: "/editions/The_Pink_Pig.JPG",
    },
    {
      name: "THE PINK PIG",
      link: "/editions/the_pink_pig",
      color: "#007273",
      img: "/editions/The_Pink_Pig.JPG",
    },
    {
      name: "THE PINK PIG",
      link: "/editions/the_pink_pig",
      color: "#610F6C",
      img: "/editions/The_Pink_Pig.JPG",
    },
    {
      name: "THE PINK PIG",
      link: "/editions/the_pink_pig",
      color: "#812222",
      img: "/editions/The_Pink_Pig.JPG",
    },
  ];
  useEffect(() => {
    function handleWindowResize() {
      if (Number(window?.innerWidth) > 1280) {
        setSlideNumber(5);
      } else if (
        Number(window?.innerWidth) >= 680 &&
        Number(window?.innerWidth) <= 1280
      ) {
        setSlideNumber(3);
      } else {
        setSlideNumber(1);
      }
    }

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    setWindowWidth(window?.innerWidth);
  }, []);

  return (
    <div className="h-[500px] 2xl:h-[550px] 3xl:h-[700px] w-full relative flex flex-col max-xl:mt-0 xl:mt-8 2xl:mt-0">
      <Swiper
        // install Swiper modules
        className=" w-full h-full"
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={slideNumber}
        speed={800}
        // pagination={{ clickable: true }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay={{
          delay: 800,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          // reverseDirection: true,
        }}
        centeredSlides={true}
        loop={true}
        // onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
      >
        {swipeData.map((data, index) => {
          return (
            <SwiperSlide
              key={index}
              className="highlightSwiperSlide !flex justify-center items-center"
            >
              <HighLightSwiperCard
                width={windowWidth}
                currentSlide={currentSlide}
                {...data}
                index={index}
                numberOfSlides={swipeData.length - 1}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className=" w-full flex items-center justify-center gap-4 mt-10">
        <div
          className="rightarr/group cursor-pointer flex items-center justify-center z-[100] hover:scale-[1.1] active:scale-[0.9] transition-all duration-[150ms] ease-in-out "
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <BsArrowLeftCircle className="h-[35px] w-[35px] cursor-pointer font-[300] text-[#7D8181]" />
        </div>
        <div
          className="leftarr/group cursor-pointer flex items-center justify-center z-[100] hover:scale-[1.1] active:scale-[0.9] transition-all duration-[150ms] ease-in-out "
          onClick={() => swiperRef.current?.slideNext()}
        >
          <BsArrowRightCircle className="h-[35px] w-[35px] cursor-pointer font-[300] text-[#7D8181]" />
        </div>
      </div>
    </div>
  );
};

export default HighLightSwiper;
