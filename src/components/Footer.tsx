import Link from "next/link";
import { FaPhoneAlt, FaTiktok } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="w-full ">
      <div className="container mx-auto relative flex flex-col gap-10 w-full px-[20px] py-8 pt-16 justify-between">
        <div className="flex justify-between flex-wrap max-lg:gap-8 gap-4">
          <div className="flex flex-col gap-4 min-w-[250px]">
            <p
              className={` text-[16px] 2xl:text-[20px] font-[600] leading-[1] truncate`}
            >
              FOLLOW US:
            </p>
            <div className="flex items-center gap-4">
              <SocialBtn link="" type="facebook" />
              <SocialBtn link="" type="twitter" />
              <SocialBtn link="" type="instagram" />
              <SocialBtn link="" type="tiktok" />
            </div>
          </div>

          <div className="flex flex-col gap-6 w-[250px]">
            <p className={` text-[16px] 2xl:text-[20px] font-[600] truncate`}>
              QUICK LINKS
            </p>
            <ul className="text-[14px] 2xl:text-[16px] text-[#8F8E8E] gap-6 ">
              <li className="mb-2">Home</li>
              <li className="mb-2">About Us</li>
              <li className="mb-2">Shop</li>
              <li className="mb-2">Categories</li>
              <li className="mb-2">Cart</li>
            </ul>
          </div>

          <div className="flex flex-col gap-6 w-[250px]">
            <p className={` text-[16px] 2xl:text-[20px] font-[600] truncate`}>
              SUPPORT
            </p>
            <ul className="text-[14px] 2xl:text-[16px] text-[#8F8E8E] gap-6 ">
              <li className="mb-2">Privacy Policy</li>
              <li className="mb-2">Terms & Conditions</li>
              <li className="mb-2">Disclaimer</li>
              <li className="mb-2">Support</li>
              <li className="mb-2">FAQ</li>
            </ul>
          </div>

          <div className="flex flex-col gap-6 w-[250px] ">
            <p className={` text-[16px] 2xl:text-[20px] font-[600] truncate`}>
              CONTACT US
            </p>
            <ul className="text-[14px] 2xl:text-[16px] text-[#8F8E8E] gap-6 ">
              <li className="mb-2 flex items-center gap-2">
                <FaLocationDot className="text-[15px] text-green " />
                Jl. Raya Kuta Chartered No.70 Denpasar, Bali
              </li>
              <li className="mb-2 flex items-center gap-2">
                {" "}
                <FaPhoneAlt className="text-[15px] text-green " />
                +(234)9057656778
              </li>
              <li className="mb-2 flex items-center gap-2">
                <MdEmail className="text-[15px] text-green " />
                braidwigsextra@gmail.com
              </li>
              <li className="mb-2 flex items-center gap-2">
                <IoIosTime className="text-[15px] text-green " />
                Everyday 12 AM – 12 AM
              </li>
            </ul>
          </div>
        </div>

        <div className="flex max-md:flex-col gap-4 md:gap-6 2xl:gap-12 items-center w-full">
          <p
            role="textbox"
            aria-multiline="true"
            className="MainFont text-[30px] text-black mmmix-blend-difference"
          >
            BraidsEx
          </p>
          <div className=" w-full h-[1px] bg-black "></div>
          <p
            className={` text-[14px] 2xl:text-[16px] font-[400] whitespace-nowrap`}
          >
            Copyright © {date.getFullYear()}. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const SocialBtn = ({ link, type }: { link: string; type: string }) => {
  return (
    <Link
      href={link}
      className="group/social w-[40px] h-[40px] rounded-full flex justify-center items-center bg-green transition-all ease-in-out hairOne-300 hover:bg-white hover:translate-y-[10px] border-[0.5px] border-[#ACACAC] cursor-pointer "
    >
      {type === "facebook" ? (
        <TiSocialFacebook className="text-[20px] text-white group-hover/social:text-green  transition-all ease-in-out hairOne-300  " />
      ) : type === "twitter" ? (
        <TiSocialTwitter className="text-[15px] text-white group-hover/social:text-green  transition-all ease-in-out hairOne-300  " />
      ) : type === "instagram" ? (
        <SlSocialInstagram className="text-[15px] text-white group-hover/social:text-green  transition-all ease-in-out hairOne-300  " />
      ) : type === "tiktok" ? (
        <FaTiktok className="text-[15px] text-white group-hover/social:text-green  transition-all ease-in-out hairOne-300  " />
      ) : (
        <></>
      )}
    </Link>
  );
};
