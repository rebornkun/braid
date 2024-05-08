import { SearchSvg } from "@/components/svg";
import { FiSearch } from "react-icons/fi";

const ShopFirstSection = () => {
  return (
    <section className="w-full max-md:mt-[65px] mt-[80px]">
      <div className="container mx-auto relative px-[20px] h-full">
        <div className="w-full flex gap-4 py-10">
          <input
            className="flex-1 py-4 px-8 rounded-full outline-green text-[14px] 2xl:text-[16px]"
            placeholder="Search Here..."
          />
          <div className="h-[56px] w-[56px] flex items-center justify-center bg-green rounded-full cursor-pointer">
            <FiSearch className="text-[25px] text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopFirstSection;
