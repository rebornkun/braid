import HighLightSwiper from "@/components/HighLightSwiper";
import { GateSvg } from "@/components/svg";
import { TbNorthStar } from "react-icons/tb";

const SecondSection = () => {
  return (
    <section className="h-screen 3xl:h-[70vh] w-full relative">
      <div className="container mx-auto relative px-[20px] h-full justify-center py-[10rem] 3xl:py-[15rem]  flex gap-6 2xl:gap-10 flex-col items-center">
        <GateSvg className="absolute right-[250px] top-[60px] z-[1] scale-[1.3]" />
        <GateSvg className="absolute left-0 bottom-[60px] z-[1] scale-[1.3]" />
        <div className="text flex flex-col w-full items-center gap-2 z-[2] ">
          <TbNorthStar className="text-green text-[20px] animate-ping" />
          <h1 className="MainFont text-[#383838] text-[42px] 2xl:text-[50px] font-[400] leading-[50px] 2xl:leading-[70px] tracking-[-0.02em]">
            Product Highlight
          </h1>
          <p className=" text-[#8F8E8E] text-center text-[14px] 2xl:text-[18px] font-[400] leading-[18px] 2xl:leading-[24px] tracking-[0.2em] mt-[-5px]">
            only five centuries, but also the leap into electronic.
          </p>
        </div>
        <div className="w-full h-fit z-[2]">
          <HighLightSwiper />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
