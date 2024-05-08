"use client";
import Link from "next/link";
import { BagOutlineSvg, ProfileSvg, SearchSvg } from "./svg";
import { usePathname } from "next/navigation";
import { ReactSVG, useEffect, useRef, useState } from "react";
import { useAppStore } from "@/store/store";
import "./component.css";

const NavBar = () => {
  return (
    <nav className=" fixed w-full z-[1000] max-md:h-[65px] h-[80px] ">
      <div className="w-full h-full absolute top-0 flex">
        <div className="w-[50%] bg-[#f5d7ce] h-full  "></div>
        <div className="w-[50%] bg-green h-full   "></div>
      </div>
      <div className="container mx-auto relative px-[20px] h-full flex justify-between items-center ">
        <div className="flex gap-2 w-[60px] justify-start items-center">
          <MenuBtn />
          <SearchSvg className="w-[25px] h-[25px] cursor-pointer max-lg:hidden" />
        </div>
        <div className="flex items-center justify-around px-[4rem] flex-1 max-lg:hidden">
          <NavItem name="Home" link="/" color="bg-[#000000]" />
          <NavItem name="Shop" link="/shop" color="bg-[#000000]" />
        </div>
        <p
          role="textbox"
          aria-multiline="true"
          className="MainFont text-[40px] text-white mix-blend-difference"
        >
          BraidsEx
        </p>
        <div className="flex items-center text-[#f0e8e8] justify-around px-[4rem] flex-1 max-lg:hidden ">
          <NavItem name="About" link="/about" color="bg-[#f0e8e8]" />
          <NavItem name="Contact" link="/contact" color="bg-[#f0e8e8]" />
        </div>
        <div className="flex gap-2 w-[60px] justify-end items-center">
          <CartBag />
          <ProfileSvg className="w-[25px] h-[30px] cursor-pointer max-lg:hidden" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

const NavItem = ({
  name,
  link,
  color,
}: {
  name: string;
  link: string;
  color: string;
}) => {
  const pathname = usePathname();
  return (
    <Link
      href={link}
      className={`group/navitem ${
        pathname === link ? "font-[400]" : "font-[300] "
      } text-[14px] 2xl:text-[18px] `}
    >
      <div className="w-full flex justify-end">
        <div
          className={`${color} h-[2px] ${
            pathname === link ? "w-[30px]" : "w-[0px] "
          } mt-[.5px] group-hover/navitem:w-[30px] transition-all duration-300 ease-in-out`}
        ></div>
      </div>
      {name}
      <div className="w-full flex justify-start">
        <div
          className={`${color} h-[2px] ${
            pathname === link ? "w-[30px]" : "w-[0px] "
          } mt-[.5px] group-hover/navitem:w-[30px] transition-all duration-300 ease-in-out`}
        ></div>
      </div>
    </Link>
  );
};

const CartBag = () => {
  const scrollElRef = useRef<HTMLDivElement>(null);
  const cartItems = useAppStore((state) => state.cart);
  const cartIsOpen = useAppStore((state) => state.cartIsOpen);
  const toogleCartIsOpen = useAppStore((state) => state.toogleCartIsOpen);

  const getCartNumberCount = () => {
    let totalCount = 0;
    cartItems.map((item, index) => {
      totalCount += item.count;
    });
    return totalCount;
  };
  const [cartNumber, setCartNumber] = useState(getCartNumberCount());

  useEffect(() => {
    scrollElRef.current?.classList?.add("anime");

    const updateTimeout = setTimeout(() => {
      setCartNumber(getCartNumberCount());
    }, 250);
    const animeTimeout = setTimeout(() => {
      scrollElRef.current?.classList?.remove("anime");
    }, 500);

    return () => {
      clearTimeout(updateTimeout);
      clearTimeout(animeTimeout);
    };
  }, [cartItems]);
  return (
    <div
      className="relative"
      onClick={() => {
        toogleCartIsOpen(true);
      }}
    >
      <BagOutlineSvg className="w-[25px] h-[25px] cursor-pointer navBag" />
      {cartNumber > 0 && (
        <div className="bg-pink rounded-full w-[20px] h-[20px] absolute top-[-7px] right-[-7px] overflow-hidden">
          <div ref={scrollElRef} className="h-[200%] w-full scrollUp">
            <p className="MainFont text-[12px] text-black w-full h-[50%] text-center leading-[16px] font-[600] ">
              {cartNumber}
            </p>
            <p className="MainFont text-[12px] text-black w-full h-[50%] text-center leading-[16px] font-[600] ">
              {cartNumber}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const MenuBtn = () => {
  return (
    <div className="w-[25px] h-[25px] flex flex-col gap-[5px] items-center justify-center cursor-pointer hidden max-lg:flex">
      <div className="bg-black h-[2px] w-[80%] "></div>
      <div className="bg-black h-[2px] w-[80%] "></div>
      <div className="bg-black h-[2px] w-[80%] "></div>
    </div>
  );
};
