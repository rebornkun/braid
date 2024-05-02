"use client";
import { MdOutlineRateReview } from "react-icons/md";
import DetailsSection from "./DetailsSection";
import ImageSection from "./ImageSection";
import Rating from "@/components/Rating";
import { FaStar } from "react-icons/fa";

const page = () => {
  return (
    <div className="flex min-h-screen max-h-fit flex-col bg-[#F6F5F5]  max-md:pt-[65px]  pt-[80px] pb-[40px]">
      <div className="container mx-auto relative px-[20px] flex-1 h-full flex flex-col">
        <div className="flex max-lg:flex-col gap-8 w-full h-full pt-10 flex-1">
          <ImageSection />
          <DetailsSection />
        </div>
        <div className="bg-[#767676] h-[0.5px] w-full my-8 "></div>
        <div className="flex justify-between items-center">
          <p className="underline font-[600]">Reviews (105)</p>
          <button className="p-2 px-4 rounded-[5px] bg-green text-white text-[12px] 2xl:text-[14px] font-[400] flex items-center gap-2 h-[50px] ">
            <MdOutlineRateReview className="text-white text-[15px]" />
            Write a review
          </button>
        </div>
        <div className="flex w-full max-lg:flex-col relative mt-4 gap-8">
          <div className="flex-[1_1_20%] w-full lg:w-[20%] max-w-[300px] mx-auto">
            <div className="bg-white w-full rounded-[5px] p-4 flex flex-col gap-4 sticky top-[90px]">
              <div className="bg-[#f1f1f2] w-full rounded-[5px] flex flex-col gap-4 items-center justify-center p-4">
                <p className="Inter text-yellow font-[500] text-[20px] 2xl:text-[24px]">
                  4.3/<span className="font-[300]">5</span>
                </p>
                <Rating rating={4.3} className={"scale-[1.5]"} />
                <p className="text-[14px] 2xl:text-[16px]">
                  105 verified ratings
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <RatingLoader level={5} people={104} perc={60} />
                <RatingLoader level={4} people={0} perc={0} />
                <RatingLoader level={3} people={0} perc={0} />
                <RatingLoader level={2} people={0} perc={0} />
                <RatingLoader level={1} people={1} perc={5} />
              </div>
            </div>
          </div>
          <div className="flex-[1_1_80%] w-full lg:w-[80%]">
            <RatingComment />
            <RatingComment />
            <RatingComment />
            <RatingComment />
            <RatingComment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

const RatingLoader = ({
  level,
  people,
  perc,
}: {
  level: number;
  people: number;
  perc: number;
}) => {
  return (
    <div className="flex gap-2 w-full justify-between items-center gap-8">
      <div className="flex gap-2 items-center">
        <p className="text-[14px] 2xl:text-[16px] leading-normal w-[10px] mt-[3px]">
          {level}
        </p>
        <FaStar className="text-[20px] text-yellow leading-normal" />
        <p className="text-[14px] 2xl:text-[16px] text-grey mt-[3px]">
          ({people})
        </p>
      </div>
      <div className="flex-1 max-w-[100px] bg-grey rounded-[5px] h-[10px] flex justify-start overflow-hidden">
        <div className={`w-[${perc}%] bg-yellow rounded-[5px]`}></div>
      </div>
    </div>
  );
};

const RatingComment = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="bg-[#767676] h-[0.25px] opacity-[0.7] w-full my-4 "></div>
      <div className="flex gap-2">
        <div className="MainFont w-[50px] h-[50px] bg-[#767676] flex items-center justify-center rounded-full text-[18px] 2xl:text-[20px] font-[600]  ">
          A
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex w-full justify-between ">
            <p className="text-[14px] 2xl:text-[16px] font-[600] ">Andrea K.</p>
            <p className="text-[14px] 2xl:text-[16px] font-[300] text-[#767676] ">
              12/04/23
            </p>
          </div>
          <Rating rating={4.5} />
          <div className="flex flex-col">
            <p className="text-[14px] 2xl:text-[16px] font-[600] text-[#767676] ">
              Love it.
            </p>
            <p className="text-[14px] 2xl:text-[16px] font-[300] text-[#767676] ">
              Great hair. Lots of compliments received.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
