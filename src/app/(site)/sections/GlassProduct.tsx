import { StarSvg } from "@/components/svg";
import Image from "next/image";

const GlassProduct = ({
  img,
  name,
  price,
  type,
}: {
  img: string;
  name: string;
  price: string;
  type: string;
}) => {
  return (
    <div className="group/glassp cursor-pointer flex items-center justify-between w-[300px] h-[80px] p-[5px] bg-gradient-to-r from-[#FFFFFF8F] to-[#00000018] hover:from-[#00000018] hover:to-[#FFFFFF8F] shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-[0.2px] border-[rgba(0,0,0,0.1)] backdrop-blur-[4.8px] transition-all ease-in-out hairOne-300">
      <div className="flex items-center gap-[10px]">
        <div className="bg-white group/glassImg w-[70px] h-[70px]">
          <Image
            src={img}
            alt="hair"
            height={10000}
            width={10000}
            priority
            className=" h-full w-fit transition-all hairOne-300 ease object-fit mx-auto"
          />
        </div>
        <div className="flex flex-col gap-[7px]">
          <p
            className={` ${
              type === "black" ? "text-[#0E0E0E]" : "text-[#FFFFFFEA]"
            } text-[14px] 2xl:text-[16px] font-[600] leading-[0.8]`}
          >
            {name}
          </p>
          <p
            className={`${
              type === "black" ? "text-[#767676]" : "text-[#BEBEBE]"
            } text-[12px] 2xl:text-[14px] font-[600] leading-[0.8]`}
          >
            ₦ {price}
          </p>
          <div className="flex gap-[0px] items-center ">
            <StarSvg
              className="w-[13px] h-[13px]"
              color={`${type === "black" ? "#000000" : "#FFFFFF"}`}
            />
            <StarSvg
              className="w-[13px] h-[13px]"
              color={`${type === "black" ? "#000000" : "#FFFFFF"}`}
            />
            <StarSvg
              className="w-[13px] h-[13px]"
              color={`${type === "black" ? "#000000" : "#FFFFFF"}`}
            />
            <StarSvg
              className="w-[13px] h-[13px]"
              color={`${type === "black" ? "#8F8E8E" : "#CAC7C7AB"}`}
            />
            <StarSvg
              className="w-[13px] h-[13px]"
              color={`${type === "black" ? "#8F8E8E" : "#CAC7C7AB"}`}
            />
          </div>
        </div>
      </div>
      <div className="min-w-[30px] h-[30px] rounded-full bg-white self-end flex items-center justify-center group-hover/glassp:scale-[0.9] group-hover/glassp:shadow-md transition-all ease-in-out hairOne-300 ">
        <p className="group-hover/glassp:rotate-[360deg] group-hover/glassp:text-[20px] font-[500] text-[16px] transition-all ease-in-out hairOne-1000 ">
          +
        </p>
      </div>
    </div>
  );
};

export default GlassProduct;
