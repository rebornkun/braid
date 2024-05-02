"use client";
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
import Image from "next/image";

const HomeSwiper = () => {
  const swiperRef = useRef<SwiperType>();
  const [slideNumber, setSlideNumber] = useState(2);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const swipeData = [
    {
      name: "THE PINK PIG",
      link: "/editions/the_pink_pig",
      info: "Der Trüffel Jäger von Zuffenhausen",
      img: "/hairs/hairOne.webp",
    },
    {
      name: "Brumos “59”",
      link: "/editions/brumos_59",
      info: "Legacy of a legend",
      img: "/hairs/hairOne.webp",
    },
    {
      name: "VAILLANT",
      link: "/editions/vaillant",
      info: "In memory of two brothers with a dream.",
      img: "/hairs/hairOne.webp",
    },
    {
      name: "THE PINK PIG",
      link: "/editions/the_pink_pig",
      info: "Der Trüffel Jäger von Zuffenhausen",
      img: "/hairs/hairOne.webp",
    },
    {
      name: "Brumos “59”",
      link: "/editions/brumos_59",
      info: "Legacy of a legend",
      img: "/hairs/hairOne.webp",
    },
    {
      name: "VAILLANT",
      link: "/editions/vaillant",
      info: "In memory of two brothers with a dream.",
      img: "/hairs/hairOne.webp",
    },
  ];
  useEffect(() => {
    function handleWindowResize() {
      if (Number(window?.innerWidth) > 1280) {
        setSlideNumber(2);
      } else if (
        Number(window?.innerWidth) >= 680 &&
        Number(window?.innerWidth) <= 1280
      ) {
        setSlideNumber(2);
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
    <div className="h-full w-full relative flex max-xl:mt-0 xl:mt-8 2xl:mt-0">
      <div className="absolute top-[-50px] right-0 mx-auto w-fit flex gap-4">
        <div
          className="rightarr/group cursor-pointer flex items-center justify-center z-[100] hover:scale-[1.1] transition-all duration-150 ease-in-out "
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <LeftCircleArrowSvg
            color=""
            className="h-[35px] w-[35px] cursor-pointer"
          />
        </div>
        <div
          className="leftarr/group cursor-pointer flex items-center justify-center z-[100] hover:scale-[1.1] transition-all duration-150 ease-in-out "
          onClick={() => swiperRef.current?.slideNext()}
        >
          <RightCircleArrowSvg
            color=""
            className="h-[35px] w-[35px] cursor-pointer"
          />
        </div>
      </div>
      <Swiper
        // install Swiper modules
        className=" w-full"
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
        loop={true}
        // onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
      >
        {swipeData.map((data, index) => {
          return (
            <SwiperSlide key={index} className="!flex justify-end">
              {/* <SwiperCard
                width={windowWidth}
                numberOfSlides={swipeData.length - 1}
                person={data?.img}
                back={"purple"}
                index={index}
                currentSlide={currentSlide}
                title={data?.name}
                link={data?.link}
                info={data?.info}
              /> */}
              <div className="group/swiperImg w-[130px] h-[180px] bg-[#FFFFFF7B] flex items-end shadow cursor-pointer">
                <Image
                  src={data.img}
                  alt="hair"
                  height={10000}
                  width={10000}
                  priority
                  className="group-hover/swiperImg:scale-[1.2] transition-all duration-300 ease object-fit mx-auto"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
