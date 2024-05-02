"use client";
import { TbNorthStar } from "react-icons/tb";
import Faq from "@/components/Faq";
import { useState } from "react";
import Image from "next/image";
import { OtherGateSvg } from "@/components/svg";

const faq = [
  {
    heading: "One - Step Solution",
    text: "text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
    height: "55px",
  },
  {
    heading: "One - Step Solution",
    text: "text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
    height: "55px",
  },
  {
    heading: "One - Step Solution",
    text: "text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
    height: "55px",
  },
  {
    heading: "One - Step Solution",
    text: "text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
    height: "55px",
  },
  {
    heading: "One - Step Solution",
    text: "text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
    height: "55px",
  },
];

const ForthSection = () => {
  const [faqIsOpen, setFaqIsOpen] = useState(1);

  return (
    <section className="min-h-screen 3xl:h-[70vh] w-full relative overflow-hidden bg-[#383838] ">
      <OtherGateSvg className="absolute right-[100px] top-[100px] z-[1] " />
      <div className="container mx-auto relative flex flex-col h-full w-full justify-between px-[20px] py-[4rem] lg:py-[8rem] gap-[2rem] items-center overflow-visible z-[2]">
        <div className="flex w-full justify-center">
          <div className="text flex  gap-2 z-[2] relative h-fit w-fit">
            <TbNorthStar className="text-green text-[18px] animate-ping absolute right-0" />
            <h1 className="MainFont text-[#ffffff] text-[42px] 2xl:text-[50px] font-[400] leading-[50px] 2xl:leading-[70px] tracking-[-0.02em]">
              Why Choose Us?
            </h1>
          </div>
        </div>
        <div className="w-full flex h-full max-lg:flex-col-reverse max-lg:gap-12">
          <div className="w-full lg:w-[50%] flex-[1_1_50%] flex justify-center items-center relative">
            <TbNorthStar className="text-pink text-[38px] absolute left-[5px] lg:left-[60px] top-[-40px] lg:top-[0px]" />
            <div className="w-full lg:w-[80%] h-fit flex flex-col gap-6">
              {faq.map((datum, index) => {
                return (
                  <Faq
                    key={index}
                    index={index + 1}
                    text={datum.text}
                    heading={datum.heading}
                    height={datum.height}
                    faqIsOpen={faqIsOpen}
                    setFaqIsOpen={setFaqIsOpen}
                  />
                );
              })}
            </div>
          </div>
          <div className="w-full lg:w-[50%] flex-[1_1_50%]  flex flex-col h-full items-center justify-center relative">
            <TbNorthStar className="text-green text-[38px]  animate-ping absolute right-[10px] lg:right-[170px] top-[10px] lg:top-[50px]" />
            <div className="sm:max-w-[350px] w-full rounded-t-[300px] h-[450px] bg-[#B1B1B1] overflow-hidden ">
              <Image
                src={"/beauTwo.jpg"}
                alt="beulah"
                height={10000}
                width={10000}
                priority
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForthSection;
