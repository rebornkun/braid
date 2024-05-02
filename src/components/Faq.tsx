import { SetStateAction, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const Faq = ({
  index,
  text,
  heading,
  height,
  faqIsOpen,
  setFaqIsOpen,
}: {
  index: number;
  text: string;
  heading: string;
  height: string;
  faqIsOpen: number;
  setFaqIsOpen: React.Dispatch<SetStateAction<any>>;
}) => {
  return (
    <div className="min-w-[70%] flex flex-col gap-2 transition-all ease-in-out duration-300 ">
      <div
        className="flex justify-between items-center cursor-pointer w-full"
        onClick={() => {
          setFaqIsOpen(index);
        }}
      >
        <p className="text-[#FFFFFF] text-[16px] 2xl:text-[20px] font-[500] leading-[1]">
          {heading}
        </p>
        <MdOutlineArrowOutward
          className={`${
            faqIsOpen === index ? "rotate-[90deg]" : ""
          } text-[#FFFFFF] text-[24px] 2xl:text-[24px] font-[500] leading-[1] transition-all ease-in-out duration-300`}
        />
      </div>
      <div
        style={{ height: faqIsOpen === index ? height : "0px" }}
        className={`transition-all ease-in-out duration-300 overflow-hidden `}
      >
        <p className="text-[#8F8E8E] text-[14px] 2xl:text-[16px] font-[400] leading-[1.3]">
          {text}
        </p>
      </div>
      <div className="w-full h-[2px] bg-[#8F8E8E] transition-all ease-in-out duration-300 delay-[50ms] "></div>
    </div>
  );
};

export default Faq;
