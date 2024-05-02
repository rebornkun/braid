"use client";
import { productType } from "@/Types/types";
import { LeftCircleArrowSvg, RightCircleArrowSvg } from "@/components/svg";
import { productsMock } from "@/utils/mock";
import Image from "next/image";
import { useEffect, useState } from "react";

const ImageSection = () => {
  return (
    <div className="flex-[1_1_50%] w-full lg:w-[50%] flex flex-col gap-8 justify-center">
      <Image
        src={"/hairs/hairOne.webp"}
        alt="product"
        height={10000}
        width={10000}
        priority
        className="w-fit h-fit lg:h-[500px] mx-auto transition-all ease-in-out duration-300 group-hover/collection:scale-[1.4] origin-bottom"
      />
      <div className=" w-full max-lg:hidden">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex w-full justify-between ">
            <p className="text-[18px] 2xl:text-[20px]">Related Products</p>
            <div className="w-fit flex gap-4">
              <div className="rightarr/group cursor-pointer flex items-center justify-center z-[100] hover:scale-[1.1] transition-all duration-150 ease-in-out ">
                <LeftCircleArrowSvg
                  color="grey"
                  className="h-[35px] w-[35px] cursor-pointer"
                />
              </div>
              <div className="leftarr/group cursor-pointer flex items-center justify-center z-[100] hover:scale-[1.1] transition-all duration-150 ease-in-out ">
                <RightCircleArrowSvg
                  color="grey"
                  className="h-[35px] w-[35px] cursor-pointer"
                />
              </div>
            </div>
          </div>
          {productsMock && (
            <div className="flex gap-4 w-full ">
              {productsMock.slice(0, 4).map((datum, index) => {
                return (
                  <div
                    key={index}
                    className="flex-1 bg-white h-[200px] rounded-[5px] group/swiperImg bg-[#FFFFFF7B] flex flex-col gap-2 items-center justify-center shadow cursor-pointer "
                  >
                    <Image
                      src={datum?.image}
                      alt="hair"
                      height={10000}
                      width={10000}
                      priority
                      className="group-hover/swiperImg:scale-[1.2] origin-bottom transition-all duration-300 ease object-fit mx-aut h-[70%] w-fit"
                    />
                    <p className="text-[#767676] text-[12px] 2xl:text-[16px] font-[600] leading-[1] truncate">
                      {datum.name}
                    </p>
                    <div className="flex gap-2 items-center">
                      <p className="text-[#0E0E0E] text-[10px] 2xl:text-[14px] font-[600] leading-[1]">
                        ₦ {datum.price.toLocaleString()}
                      </p>
                      <p className="text-[#CFCFCF] text-[10px] 2xl:text-[14px] font-[600] leading-[1] line-through">
                        ₦ {datum.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
