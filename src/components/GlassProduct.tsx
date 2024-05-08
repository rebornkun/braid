import Image from "next/image";
import { StarSvg } from "./svg";
import Link from "next/link";
import Rating from "./Rating";
import { calculatePriceAfterDiscount } from "@/utils/helper";

const GlassProduct = ({
  id,
  img,
  name,
  price,
  type,
  rating,
  discount,
}: {
  id: string;
  img: string;
  name: string;
  price: number;
  type: string;
  rating: number;
  discount: number;
}) => {
  return (
    <Link
      href={`/shop/${id}`}
      className={`group/glassp cursor-pointer flex items-center justify-between w-[300px] h-[80px] p-[5px] ${type === "black" ? "bg-gradient-to-r from-[#00000018] to-[#FFFFFF8F] hover:from-[#FFFFFF8F] hover:to-[#00000018]" : "bg-gradient-to-r from-[#FFFFFF8F] to-[#00000018] hover:from-[#00000018] hover:to-[#FFFFFF8F]"} shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-[0.2px] border-[rgba(0,0,0,0.1)] backdrop-blur-[4.8px] transition-all ease-in-out duration-300`}
    >
      <div className="flex items-center gap-[10px]">
        <div className="bg-white group/glassImg w-[70px] h-[70px]">
          <Image
            src={img ? img : "/hairs/hairOne.webp"}
            alt="hair"
            height={10000}
            width={10000}
            priority
            className=" h-full w-fit transition-all duration-300 ease object-fit mx-auto"
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
          <div className="flex gap-2 items-center">
            <p
              className={`${
                type === "black" ? "text-[#767676]" : "text-[#BEBEBE]"
              } text-[12px] 2xl:text-[14px] font-[600] leading-[0.8]`}
            >
              {discount
                ? "₦ " +
                  calculatePriceAfterDiscount(price, discount).toLocaleString()
                : "₦ " + price.toLocaleString()}
            </p>
            {discount != 0 && (
              <p
                className={`${
                  type === "black" ? "text-[#CFCFCF]" : "text-[#BEBEBE]"
                } text-[12px] 2xl:text-[14px] font-[500] leading-[1] line-through`}
              >
                ₦ {price.toLocaleString()}
              </p>
            )}
          </div>
          <div className="flex gap-[0px] items-center ">
            <Rating rating={rating} colorType={type} />
          </div>
        </div>
      </div>
      <div className="min-w-[30px] h-[30px] rounded-full bg-white self-end flex items-center justify-center group-hover/glassp:scale-[0.9] group-hover/glassp:shadow-md transition-all ease-in-out duration-300 ">
        <p className="group-hover/glassp:rotate-[360deg] group-hover/glassp:text-[20px] font-[500] text-[16px] transition-all ease-in-out duration-500 ">
          +
        </p>
      </div>
    </Link>
  );
};

export default GlassProduct;
