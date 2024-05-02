import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const ArrowBtn = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link
      href={link}
      className="px-[1.5rem] py-[0.5rem] border-[#8F8E8EE0] border-[1px] rounded-[100px] flex gap-2 items-center cursor-pointer group/button hover:gap-4 transition-all duration-300 ease-in-out "
    >
      <p className="text-[#8F8E8EE0] group-hover/button:text-[#000] text-[12px] 2xl:text-[14px] font-[400] transition-all duration-300 ease-in-out">
        {text}
      </p>
      <IoIosArrowRoundForward className="text-[#8F8E8EEA] group-hover/button:text-[#000] text-[24px] group-hover/button:text-[30px]  font-[400] transition-all duration-300 ease-in-out" />
    </Link>
  );
};

export default ArrowBtn;
