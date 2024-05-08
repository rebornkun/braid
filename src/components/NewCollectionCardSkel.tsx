"use client";
import Image from "next/image";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { FaHeart, FaStar, FaStarHalf } from "react-icons/fa";
import { IoBagAdd, IoBagCheck } from "react-icons/io5";

import { useAppStore } from "@/store/store";
import Link from "next/link";
import Rating from "./Rating";

const NewCollectionCard = () => {
  return (
    <div
      className={`group/collection hover:lg:scale-[0.85] transition-all ease-in-out duration-300 md:min-w-[270px] md:min-h-[270px] h-fit bg-white shadow hover:shadow-xl px-2 md:px-4 py-8 gap-4 flex flex-col justify-between relative cursor-pointer rounded-[10px] `}
    >
      <div
        className={`
          w-full h-full skeleton
         mx-auto transition-all min-h-[200px] 2xl:min-h-[220px] ease-in-out duration-300 origin-bottom h`}
      ></div>

      <div className="flex flex-col gap-2">
        <div
          className={` skeleton h-[14px] 2xl:h-[16px] w-[50%] text-[16px] 2xl:text-[20px] font-[600] leading-[1] truncate`}
        >
          {" "}
        </div>
        <div className="flex gap-4">
          <div
            className={` skeleton h-[14px] 2xl:h-[16px] w-[25%] text-[14px] 2xl:text-[16px] font-[500] leading-[1]`}
          ></div>
        </div>
        <div
          className={` skeleton h-[14px] 2xl:h-[16px] w-[30%] text-[14px] 2xl:text-[16px] font-[500] leading-[1]`}
        ></div>
      </div>
    </div>
  );
};

export default NewCollectionCard;
