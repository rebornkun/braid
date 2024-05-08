"use client";
import Image from "next/image";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { FaHeart, FaStar, FaStarHalf } from "react-icons/fa";
import { IoBagAdd, IoBagCheck } from "react-icons/io5";

import { useAppStore } from "@/store/store";
import Link from "next/link";
import Rating from "./Rating";
import { calculatePriceAfterDiscount } from "@/utils/helper";
import { TypedObject } from "sanity";

const NewCollectionCard = ({
  id,
  img,
  name,
  brand,
  price,
  type,
  discount,
  oldPrice,
  color,
  length,
  category,
  ratings,
  createdAt,
  updateAt,
  place,
  description,
  stock,
}: {
  id: string;
  img: string;
  name: string;
  brand: string;
  price: number;
  type: string;
  color: string[];
  length: number[];
  category: string;
  ratings: number;
  discount: number;
  oldPrice?: number;
  createdAt?: string;
  updateAt?: string;
  place?: string;
  description: TypedObject | TypedObject[];
  stock: number;
}) => {
  const cartItems = useAppStore((state) => state.cart);
  const addToCart = useAppStore((state) => state.addToCart);
  const mutateCountInCart = useAppStore((state) => state.mutateCountInCart);

  const addToCartFunc = () => {
    if (!checkIfInCartAlready()) {
      addToCart({
        _id: id,
        brand: brand,
        name: name,
        color: color,
        category: category,
        price: price,
        length: length,
        ratings: ratings,
        image: img,
        discount: discount,
        _createdAt: createdAt,
        _updateAt: updateAt,
        count: 1,
        processTime: "Normal",
        description: description,
        finalPrice: discount
          ? calculatePriceAfterDiscount(price, discount)
          : price,
        lengthSelected: length[0],
        stock: stock,
        featured: false,
      });
    }
  };

  const checkIfInCartAlready = () => {
    const getCurrentItem = cartItems.filter(
      (item) =>
        item._id === id &&
        item.length[0] === item.lengthSelected &&
        "Normal" === item.processTime
    );
    return getCurrentItem.length > 0 ? true : false;
  };

  const decreaseAmountInCart = () => {
    const getRestItemsWithSameId = cartItems.filter(
      (item) =>
        item._id === id &&
        item.length[0] !== item.lengthSelected &&
        "Normal" !== item.processTime
    );
    const getRestItemsWithSameIdAndLength = cartItems.filter(
      (item) =>
        item._id === id &&
        item.length[0] === item.lengthSelected &&
        "Normal" !== item.processTime
    );
    const getRestItemsWithSameIdAndProcess = cartItems.filter(
      (item) =>
        item._id === id &&
        item.length[0] !== item.lengthSelected &&
        "Normal" === item.processTime
    );
    const getRestItemsWithOutSameId = cartItems.filter(
      (item) => item._id !== id
    );
    const getCurrentItem = cartItems.filter(
      (item) =>
        item._id === id &&
        item.length[0] === item.lengthSelected &&
        "Normal" === item.processTime
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
        item._id === id &&
        item.length[0] !== item.lengthSelected &&
        "Normal" !== item.processTime
    );
    const getRestItemsWithSameIdAndLength = cartItems.filter(
      (item) =>
        item._id === id &&
        item.length[0] === item.lengthSelected &&
        "Normal" !== item.processTime
    );
    const getRestItemsWithSameIdAndProcess = cartItems.filter(
      (item) =>
        item._id === id &&
        item.length[0] !== item.lengthSelected &&
        "Normal" === item.processTime
    );
    const getRestItemsWithOutSameId = cartItems.filter(
      (item) => item._id !== id
    );
    const getCurrentItem = cartItems.filter(
      (item) =>
        item._id === id &&
        item.length[0] === item.lengthSelected &&
        "Normal" === item.processTime
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

  const getItemFromCart = () => {
    const getCurrentItem = cartItems.filter(
      (item) =>
        item._id === id &&
        item.length[0] === item.lengthSelected &&
        "Normal" === item.processTime
    )[0];
    return getCurrentItem;
  };

  return (
    <div
      className={`group/collection hover:lg:scale-[0.85] transition-all ease-in-out duration-300 ${
        place === "shop"
          ? "md:min-w-[270px] md:min-h-[270px]"
          : "min-w-[280px] min-h-[280px]"
      } bg-white shadow hover:shadow-xl px-2 md:px-4 py-8 gap-4 flex flex-col justify-between relative cursor-pointer rounded-[10px] `}
    >
      <Link
        href={`/shop/${id}`}
        className="w-full h-full absolute top-0 left-0 z-[1]"
      ></Link>
      {discount != 0 && (
        <div className="w-[40px] h-[40px] bg-green flex items-center justify-center absolute top-4 left-4 rounded-full">
          <p
            className={` text-[#FFFFFFEA] text-[12px] 2xl:text-[14px] font-[600] leading-[1]`}
          >
            {discount}%
          </p>
        </div>
      )}
      <div className="favorite w-[40px] h-[40px] flex items-center justify-center absolute top-2 right-4 z-[2]">
        <FaHeart className="text-[25px] text-grey " />
      </div>

      <Image
        src={img ? img : "/hairs/hairOne.webp"}
        alt="product"
        height={10000}
        width={10000}
        priority
        className={`${
          place === "shop" ? "w-full sm:w-[60%]" : "w-[60%]"
        } mx-auto transition-all ease-in-out duration-300 group-hover/collection:lg:scale-[1.4] group-hover/collection:scale-[1.25] origin-bottom`}
      />

      <div className="flex flex-col gap-2">
        <p
          className={` ${
            type === "black" ? "text-[#767676]" : "text-[#BEBEBE]"
          } text-[16px] 2xl:text-[20px] font-[600] leading-[1] truncate`}
        >
          {name}
        </p>
        <div className="flex gap-4">
          <p
            className={`${
              type === "black" ? "text-[#0E0E0E]" : "text-[#FFFFFFEA]"
            } text-[14px] 2xl:text-[16px] font-[500] leading-[1]`}
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
              } text-[14px] 2xl:text-[16px] font-[500] leading-[1] line-through`}
            >
              ₦ {price.toLocaleString()}
            </p>
          )}
        </div>
        <Rating rating={ratings} />
      </div>
      <div
        className={`absolute right-2 md:right-4 bottom-2 md:bottom-4 min-w-[40px] max-w-[40px] h-[40px] rounded-full z-[2]  ${
          checkIfInCartAlready()
            ? "bg-green group-hover/collection:bg-green hover:w-[115px] hover:max-w-[115px] 2xl:hover:w-[120px] 2xl:hover:max-w-[120px]"
            : "group-hover/collection:bg-pink hover:w-[125px] hover:max-w-[125px] 2xl:hover:w-[140px] 2xl:hover:max-w-[140px]"
        } bg-[#0E0E0E] self-end flex items-center justify-start group-hover/collection:scale-[0.9] group-hover/collection:shadow-md transition-all ease-in-out duration-300 cursor-pointer  overflow-hidden`}
        onClick={() => {
          addToCartFunc();
        }}
      >
        {checkIfInCartAlready() ? (
          <>
            <p className="group-hover/collection:rotate-[360deg] group-hover/collection:text-[30px] min-w-[40px] h-[40px] font-[500] text-[20px] transition-all ease-in-out duration-500 origin-center leading-normal text-white flex items-center justify-center">
              <IoBagCheck className="text-[20px] text-white " />
            </p>
            <div className="flex justify-between items-center gap-2">
              <AiFillMinusCircle
                className="text-[18px] 2xl:text-[20px] text-white "
                onClick={() => {
                  decreaseAmountInCart();
                }}
              />
              <p className="text-[14px] 2xl:text-[16px] text-white font-[500] whitespace-nowrap">
                {getItemFromCart().count}
              </p>
              <AiFillPlusCircle
                className="text-[18px] 2xl:text-[20px] text-white "
                onClick={() => {
                  increaseAmountInCart();
                }}
              />
            </div>
          </>
        ) : (
          <>
            <p className="group-hover/collection:rotate-[360deg] group-hover/collection:text-[30px] min-w-[40px] h-[40px] font-[500] text-[20px] transition-all ease-in-out duration-500 origin-center leading-normal text-white flex items-center justify-center">
              <IoBagAdd className="text-[20px] " />
            </p>
            <p className="text-[12px] 2xl:text-[14px] text-[#ffffff] font-[500] whitespace-nowrap">
              Add to Bag
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default NewCollectionCard;
