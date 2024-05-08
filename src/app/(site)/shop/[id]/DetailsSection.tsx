"use client";
import { cartProductType, productType } from "@/Types/types";
import Rating from "@/components/Rating";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAppStore } from "@/store/store";
import { calculatePriceAfterDiscount } from "@/utils/helper";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { FaHeart, FaMoneyCheck, FaShippingFast } from "react-icons/fa";
import { IoBagAdd, IoBagCheck, IoTimeSharp } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";

const DetailsSection = ({
  isDataLoading,
  data,
}: {
  isDataLoading: boolean;
  data: productType;
}) => {
  const hairLength = [12, 14, 16, 18, 20, 22, 24, 26, 28, 30];

  const cartItems = useAppStore((state) => state.cart);
  const addToCart = useAppStore((state) => state.addToCart);
  const mutateCountInCart = useAppStore((state) => state.mutateCountInCart);

  const [currentPrice, setCurrentPrice] = useState(data.price);
  const [orderTime, setOrderTime] = useState<"Normal" | "Express">("Normal");
  const [currentLengthSelected, setCurrentLengthSelected] = useState(
    data.length[0]
  );

  useEffect(() => {
    //calculate price change
    if (orderTime === "Express") {
      if (data.discount) {
        let discountedPrice = calculatePriceAfterDiscount(
          data.price,
          data.discount
        );
        setCurrentPrice(discountedPrice + discountedPrice / 2);
      } else {
        setCurrentPrice(data.price + data.price / 2);
      }
    } else if (orderTime === "Normal") {
      if (data.discount) {
        let discountedPrice = calculatePriceAfterDiscount(
          data.price,
          data.discount
        );
        setCurrentPrice(discountedPrice);
      } else {
        setCurrentPrice(data.price);
      }
    }
  }, [data.discount, data.price, orderTime]);

  const checkIfInCartAlready = () => {
    const getCurrentItem = cartItems.filter(
      (item) =>
        item._id === data._id &&
        currentLengthSelected === item.lengthSelected &&
        orderTime === item.processTime
    );
    return getCurrentItem.length > 0 ? true : false;
  };

  const getItemFromCart = () => {
    const getCurrentItem = cartItems.filter(
      (item) =>
        item._id === data._id &&
        currentLengthSelected === item.lengthSelected &&
        orderTime === item.processTime
    )[0];
    return getCurrentItem;
  };

  const addToCartFunc = () => {
    if (!checkIfInCartAlready()) {
      addToCart({
        _id: data._id,
        brand: data.brand,
        name: data.name,
        color: data.color,
        category: data.category,
        price: data.price,
        length: data.length,
        ratings: data.ratings,
        image: data.image,
        discount: data.discount,
        _createdAt: data._createdAt,
        _updateAt: data._updateAt,
        count: 1,
        description: data.description,
        stock: data.stock,
        processTime: orderTime,
        finalPrice: currentPrice,
        lengthSelected: currentLengthSelected,
        featured: false,
      });
    }
  };

  const decreaseAmountInCart = () => {
    const getRestItemsWithSameId = cartItems.filter(
      (item) =>
        item._id === data._id &&
        currentLengthSelected !== item.lengthSelected &&
        orderTime !== item.processTime
    );
    const getRestItemsWithSameIdAndLength = cartItems.filter(
      (item) =>
        item._id === data._id &&
        currentLengthSelected === item.lengthSelected &&
        orderTime !== item.processTime
    );
    const getRestItemsWithSameIdAndProcess = cartItems.filter(
      (item) =>
        item._id === data._id &&
        currentLengthSelected !== item.lengthSelected &&
        orderTime === item.processTime
    );
    const getRestItemsWithOutSameId = cartItems.filter(
      (item) => item._id !== data._id
    );
    const getCurrentItem = cartItems.filter(
      (item) =>
        item._id === data._id &&
        currentLengthSelected === item.lengthSelected &&
        orderTime === item.processTime
    )[0];

    if (getCurrentItem && getCurrentItem.count > 1) {
      getCurrentItem.count -= 1;
      mutateCountInCart([
        ...getRestItemsWithSameId,
        ...getRestItemsWithSameIdAndLength,
        ...getRestItemsWithSameIdAndProcess,
        ...getRestItemsWithOutSameId,
        getCurrentItem,
      ]);
    }
  };

  const increaseAmountInCart = () => {
    const getRestItemsWithSameId = cartItems.filter(
      (item) =>
        item._id === data._id &&
        currentLengthSelected !== item.lengthSelected &&
        orderTime !== item.processTime
    );
    const getRestItemsWithSameIdAndLength = cartItems.filter(
      (item) =>
        item._id === data._id &&
        currentLengthSelected === item.lengthSelected &&
        orderTime !== item.processTime
    );
    const getRestItemsWithSameIdAndProcess = cartItems.filter(
      (item) =>
        item._id === data._id &&
        currentLengthSelected !== item.lengthSelected &&
        orderTime === item.processTime
    );
    const getRestItemsWithOutSameId = cartItems.filter(
      (item) => item._id !== data._id
    );
    const getCurrentItem = cartItems.filter(
      (item) =>
        item._id === data._id &&
        currentLengthSelected === item.lengthSelected &&
        orderTime === item.processTime
    )[0];

    if (getCurrentItem && getCurrentItem.count < 100) {
      getCurrentItem.count += 1;
      mutateCountInCart([
        ...getRestItemsWithSameId,
        ...getRestItemsWithSameIdAndLength,
        ...getRestItemsWithSameIdAndProcess,
        ...getRestItemsWithOutSameId,
        getCurrentItem,
      ]);
    } else {
      // if it doesnt already exists, add to cart
      addToCartFunc();
    }
  };

  if (!data) {
    return (
      <div className="flex-[1_1_50%] w-full lg:w-[50%] flex flex-col gap-2 justify-center ">
        <div className=" skeleton w-[20%] h-[14px] 2xl:h-[16px] "></div>
        <div className="skeleton w-[40%] h-[24px] 2xl:h-[30px]"></div>
        <div className="skeleton w-[30%] h-[14px] 2xl:h-[16px] "></div>
        <div className="skeleton w-[28%] h-[18px] "></div>
        <div className="skeleton w-[30%] h-[38px]"></div>
        <div className="skeleton w-[40%] h-[24px] my-4"></div>

        <div className="skeleton w-[100%] h-[62px] mt-2"></div>

        <div className="skeleton w-[100%] h-[62px] mt-2"></div>

        <div className="skeleton w-[100%] h-[62px] mt-2"></div>

        <div className="flex flex-col gap-2">
          <ul className="skeleton w-[40%] h-[108px] mt-2 "></ul>
          <div className="skeleton w-[35%] h-[25px] "></div>
          <div className=" skeleton w-[100%] h-[100px] "></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-[1_1_50%] w-full lg:w-[50%] flex flex-col gap-2 justify-center relative ">
      <p className="Inter text-[14px] 2xl:text-[16px] text-[#767676] -mb-2">
        {data.brand}
      </p>
      <h5 className=" text-[24px] 2xl:text-[30px] font-[600] ">{data.name}</h5>
      <p className=" text-[14px] 2xl:text-[16px] font-[400] ">
        {data.category}
      </p>
      <div className="flex gap-2 h-fit items-center">
        <Rating rating={data.ratings} />
        <Link
          href={`/shop/${data._id}/review`}
          className="Inters text-[12px] 2xl:text-[14px] font-[400] text-[#767676] opacity-[0.6] underline "
        >
          (105 reviews)
        </Link>
      </div>
      <div className="flex gap-4 h-fit items-center mt-2">
        <p className="Inters text-[12px] 2xl:text-[14px] font-[400] ">
          Quantity
        </p>
        <div className="flex justify-between items-center gap-4 p-2 border-[0.5px] border-black rounded-[5px] ">
          <AiFillMinusCircle
            className="text-[18px] 2xl:text-[20px] text-black cursor-pointer "
            onClick={() => {
              decreaseAmountInCart();
            }}
          />
          <p className="text-[14px] 2xl:text-[16px] text-black font-[500] whitespace-nowrap">
            {getItemFromCart() === undefined ? 0 : getItemFromCart().count}
          </p>
          <AiFillPlusCircle
            className="text-[18px] 2xl:text-[20px] text-black cursor-pointer "
            onClick={() => {
              increaseAmountInCart();
            }}
          />
        </div>
      </div>
      {data.discount != 0 && (
        <div className="flex items-center gap-2 absolute top-0 right-0 justify-top swingDiscount">
          <Image
            src={"/saletag.png"}
            alt="saletag"
            height={10000}
            width={10000}
            priority
            className="w-[50px] h-fit mx-auto transition-all ease-in-out duration-300 origin-bottom"
          />
          <p className="absolute left-[13px] top-[60%] rotate-[25deg] m-auto font-[700] text-[12px] text-white leading-[1]">
            {data.discount}% OFF
          </p>
        </div>
      )}
      <div className="flex gap-4 h-fit items-center my-4">
        <p
          className={`text-[#0E0E0E]
                Inter text-[24px] 2xl:text-[30px] font-[300] leading-[1]`}
        >
          {"₦ " + currentPrice.toLocaleString()}
        </p>

        {data.discount != 0 && (
          <p
            className={`text-[#CFCFCF]
                   Inter text-[24px] 2xl:text-[30px] font-[300] leading-[1] line-through`}
          >
            ₦ {data.price.toLocaleString()}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2 h-fit mt-2">
        <p className="Inters text-[16px] 2xl:text-[18px] font-[400] ">
          Select length:
        </p>
        <div className="flex gap-2">
          {data.length.map((datum: number, index: number) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setCurrentLengthSelected(datum);
                }}
                className={`${currentLengthSelected === datum ? "scale-[1.2] text-white bg-green hover:bg-green border-[1px]" : "border-[0.5px] hover:bg-grey hover:scale-[1.15]"} h-[30px] w-[30px] p-2 border-black  rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out origin-center  `}
              >
                {datum}&quot;
              </div>
            );
          })}
        </div>
      </div>

      {data.stock > 0 ? (
        <div className="flex flex-col gap-2 h-fit mt-2">
          <div className="flex gap-2 items-center">
            <div className="h-[20px] w-[20px] relative flex items-center justify-center ">
              <div className="animate-ping bg-green absolute m-auto w-full h-full rounded-full"></div>
              <div className=" bg-green w-[80%] h-[80%] rounded-full"></div>
            </div>
            <p className="text-[14px] 2xl:text-[16px] text-[#000000] font-[400] whitespace-nowrap">
              In stock
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <TbTruckDelivery className="text-[20px] " />
            <p className="text-[14px] 2xl:text-[16px] text-[#000000] font-[400] whitespace-nowrap">
              Ready for Delivery
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2 h-fit mt-2">
          <p className="Inters text-[16px] 2xl:text-[18px] font-[400] ">
            Select Order Process Time:
          </p>
          <RadioGroup
            defaultValue="Normal"
            className="w-full flex flex-col gap-4"
            onValueChange={(value: "Normal" | "Express") => {
              setOrderTime(value);
            }}
          >
            <RadioBtn
              id={"optionOne"}
              value={"Normal"}
              label={"0% price increase"}
              time={"25 to 45 days"}
            />
            <RadioBtn
              id={"optionTwo"}
              value={"Express"}
              label={"50% price increase"}
              time={"5 to 7 days"}
            />
          </RadioGroup>
        </div>
      )}

      <div className="flex gap-2 h-fit items-center my-4">
        <button
          onClick={() => {
            addToCartFunc();
          }}
          className={`flex items-center justify-center ${checkIfInCartAlready() ? "gap-[4px] bg-pink" : "gap-2 bg-green"} w-full h-[50px]  rounded-[5px] transition-all ease-in-out duration-300 active:scale-[0.9] `}
        >
          <p className=" min-w-[40px] h-[40px] font-[500] text-[20px] transition-all ease-in-out duration-500 origin-center leading-normal text-white flex items-center justify-center">
            {checkIfInCartAlready() ? (
              <IoBagCheck className="text-[20px] text-white " />
            ) : (
              <IoBagAdd className="text-[20px] " />
            )}
          </p>
          <p className="text-[12px] 2xl:text-[14px] text-[#ffffff] font-[500] whitespace-nowrap">
            {checkIfInCartAlready() ? "In Bag" : "Add to Bag"}
          </p>
        </button>
        <button className="flex items-center justify-center w-[50px] h-[50px] bg-green rounded-[5px]">
          <FaHeart className="text-[20px] text-grey " />
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <ul className="Inter list-disc mb-2 text-[14px] 2xl:text-[16px] font-[300] ">
          <h5 className="font-[400] text-[16px]">Features:</h5>
          <li className="ml-4">Tangle Free</li>
          <li className="ml-4">Soft & Shiny</li>
          <li className="ml-4">Super Light</li>
          <li className="ml-4">Easy to wear</li>
        </ul>
        <div className="flex gap-2 items-center">
          <p className=" text-[16px] 2xl:text-[18px] font-[400] ">Color:</p>
          {data.color.map((datum: string, index: number) => {
            return (
              <div
                key={index}
                style={{ backgroundColor: datum }}
                className="h-[25px] w-[25px] rounded-full nil-bg-green border-[0.5px] border-grey"
              ></div>
            );
          })}
        </div>
        <div className=" text-[12px] 2xl:text-[14px] font-[400] text-[#767676] ">
          {<PortableText value={data.description} />}
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;

const RadioBtn = ({
  id,
  value,
  label,
  time,
}: {
  id: string;
  value: string;
  label: string;
  time: string;
}) => {
  return (
    <div className="flex items-center space-x-2">
      <RadioGroupItem
        value={value}
        id={id}
        className="  data-[state=checked]:!text-green  data-[state=checked]:!border-green border-[1.5px]"
      />
      <label
        htmlFor={id}
        className="text-[14px] 2xl:text-[16px] cursor-pointer"
      >
        <p className="MainFont text-[20px] 2xl:text-[24px] text-[#000000] font-[500] whitespace-nowrap">
          {value}
        </p>
        <div className="flex gap-2 items-center">
          {value === "Normal" ? (
            <IoTimeSharp className="text-[20px] " />
          ) : (
            <FaShippingFast className="text-[20px] " />
          )}
          <p className="text-[14px] 2xl:text-[16px] text-[#000000] font-[400] whitespace-nowrap">
            Hair will be ready within {time}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <FaMoneyCheck className="text-[20px] " />
          <p className="text-[14px] 2xl:text-[16px] text-[#000000] font-[400] whitespace-nowrap">
            {label}
          </p>
        </div>
      </label>
    </div>
  );
};
