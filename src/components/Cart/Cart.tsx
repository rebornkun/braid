"use client";
import { cartProductType } from "@/Types/types";
import { useAppStore } from "@/store/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const Cart = () => {
  const cartIsOpen = useAppStore((state) => state.cartIsOpen);
  const toogleCartIsOpen = useAppStore((state) => state.toogleCartIsOpen);

  const router = useRouter();

  const cartItems = useAppStore((state) => state.cart);
  const getCartNumberCount = () => {
    let totalCount = 0;
    cartItems.map((item, index) => {
      totalCount += item.count;
    });
    return totalCount;
  };
  return (
    <div
      className={`fixed  flex items-center justify-end left-0 top-0   w-full h-full shadow z-[1199] transition-all ease duration-300 ${
        cartIsOpen
          ? "bg-[#00000047] translate-x-[0%]"
          : "bg-pink translate-x-[100%]"
      }`}
      onClick={() => {
        toogleCartIsOpen(false);
      }}
    >
      <div
        className="bg-[#Ffffff] w-full lg:w-[50%] h-full py-[20px] px-[20px] "
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h1 className=" text-[16px] 2xl:text-[20px] font-[400] tracking-[-0.02em] pb-2 pt-2 flex gap-4 items-center">
          <IoMdArrowRoundBack
            className="text-[24px] font-[400] cursor-pointer"
            onClick={() => {
              toogleCartIsOpen(false);
            }}
          />
          Your Bag ({getCartNumberCount()})
        </h1>
        <div className="flex flex-col w-full overflow-y-auto h-full pb-[30px] justify-between">
          <div className="flex flex-col w-full">
            {cartItems.map((datum, index) => {
              return <CartItem key={index} {...datum} />;
            })}
          </div>

          <div className="flex flex-col w-full">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex w-full justify-between mt-4 mb-2">
                <h5 className=" text-[20px] 2xl:text-[24px] font-[600] leading-[1]">
                  Subtotal
                </h5>
                <p
                  className={`text-[#0E0E0E] text-[20px] 2xl:text-[24px] font-[400] leading-[1] `}
                >
                  ₦ {(800000).toLocaleString()}
                </p>
              </div>
              <h5 className="text-[14px] 2xl:text-[16px] font-[300] leading-[1] mb-4">
                Shipping and discounts calculated at checkout
              </h5>
            </div>
            <div
              className="flex items-center justify-center gap-2 w-full min-h-[50px] bg-green rounded-[5px] my-2 cursor-pointer transition-all ease-in-out duration-300 active:scale-[0.9] "
              onClick={() => {
                router.push("/checkout");
                toogleCartIsOpen(false);
              }}
            >
              <p className=" min-w-[40px] h-[40px] font-[500] text-[20px] transition-all ease-in-out duration-500 origin-center leading-normal text-white flex items-center justify-center">
                <IoBagCheckOutline className="text-[24px] " />
              </p>
              <p className="text-[16px] 2xl:text-[20px] text-[#ffffff] font-[500] whitespace-nowrap">
                Proceed to Checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

const CartItem = ({
  name,
  image,
  brand,
  finalPrice,
  color,
  lengthSelected,
  count,
  processTime,
}: cartProductType) => {
  // const getItemFromCart = () => {
  //   const getCurrentItem = cartItems.filter(
  //     (item) =>
  //       item._id === data._id &&
  //       currentLengthSelected === item.lengthSelected &&
  //       orderTime === item.processTime
  //   )[0];
  //   return getCurrentItem;
  // };

  return (
    <div className="w-full flex flex-col ">
      <div className="w-full flex py-6 gap-2 md:gap-4 items-center justify-between">
        <div
          className={`${processTime === "Express" && "shineCard"} productImg min-h-[150px] max-h-[150px] min-w-[100px] max-w-[100px] bg-[#F6F5F5] border-[0.5px] border-[#767676] rounded-[5px] flex items-end relative`}
        >
          <Image
            src={image ? image : "/hairs/hairOne.webp"}
            alt="product"
            height={10000}
            width={10000}
            priority
            className="w-fit h-fit  mx-auto transition-all ease-in-out duration-300"
          />
        </div>

        <div className="flex flex-col justify-between w-full h-full">
          <div className="flex flex-col flex-1 w-full gap-[5px]">
            <div className="flex justify-between items-start gap-2">
              <h5 className=" text-[18px] 2xl:text-[20px] font-[500] leading-[1] md:max-w-[60%] line-clamp-2">
                {name}
              </h5>
              <p
                className={`text-[#0E0E0E] text-[14px] 2xl:text-[16px] font-[300] leading-[1] whitespace-nowrap `}
              >
                ₦ {finalPrice.toLocaleString()}
              </p>
            </div>
            <h5 className=" text-[14px] 2xl:text-[16px]  font-[300] leading-[1] w-[50%]">
              {brand}
            </h5>

            <div className="flex gap-[4px] items-center">
              <p className=" text-[12px] 2xl:text-[14px] font-[300] ">Color:</p>
              {color.map((datum, index) => {
                return (
                  <div
                    style={{ backgroundColor: datum }}
                    key={index}
                    className="h-[16px] w-[16px] rounded-full nil-bg-green border-[0.5px] border-grey"
                  ></div>
                );
              })}
            </div>

            <h5 className=" text-[12px] 2xl:text-[14px] font-[300] leading-[1] w-[50%]">
              Length: {lengthSelected}&quot;
            </h5>

            {processTime === "Express" && (
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger className="flex gap-[4px] text-[12px] 2xl:text-[14px] items-center w-fit italic text-green">
                    <FaShippingFast className="carMove text-[18px] 2xl:text-[24px] text-green " />
                    Express Order
                  </TooltipTrigger>
                  <TooltipContent className="text-[12px] 2xl:text-[14px]">
                    This order will process faster than others&#128521;!
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>

          <div className="flex w-full justify-between items-center">
            <div className="flex justify-between items-center gap-4 p-2 border-[0.5px] border-black rounded-[5px] ">
              <AiFillMinusCircle
                className="text-[18px] 2xl:text-[20px] text-black cursor-pointer "
                onClick={() => {
                  // decreaseAmountInCart()
                }}
              />
              <p className="text-[14px] 2xl:text-[16px] text-black font-[500] whitespace-nowrap">
                {/* {getItemFromCart().count} */}
                {count}
              </p>
              <AiFillPlusCircle
                className="text-[18px] 2xl:text-[20px] text-black cursor-pointer "
                onClick={() => {
                  // increaseAmountInCart();
                }}
              />
            </div>
            <div className="flex items-center gap-[2px] text-red cursor-pointer">
              <MdDeleteForever className="text-[24px] text-red" />
              <p className="Inter text-[12px] 2xl:text-[14px] font-[400] leading-[1] underline">
                Remove
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[2px] bg-grey"></div>
    </div>
  );
};
