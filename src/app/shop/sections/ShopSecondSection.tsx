import FilterSideBar from "@/components/FilterSideBar";
import NewCollectionCard from "@/components/NewCollectionCard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { productsMock } from "@/utils/mock";
import { IoIosArrowDown } from "react-icons/io";

const ShopSecondSection = () => {
  return (
    <section className="w-full transition-all duration-300 ease-in-out">
      <div className="container mx-auto relative px-[20px] h-full">
        <div className="flex justify-between">
          <p className="text-[14px] 2xl:text-[16px] font-[600] text-[#BEBEBE]">
            1,345 items found
          </p>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex gap-2 items-center">
              Sort <IoIosArrowDown className="text-black" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Sort By:</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Date: Newest</DropdownMenuItem>
              <DropdownMenuItem>Date: Oldest</DropdownMenuItem>
              <DropdownMenuItem>Ratings: Highest</DropdownMenuItem>
              <DropdownMenuItem>Ratings: Lowest</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex gap-6 xl:gap-12 h-full my-4">
          <div className="w-full max-w-[250px] h-fit max-lg:hidden">
            <FilterSideBar />
          </div>
          <div className="flex-1 h-full grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-4 ">
            {productsMock.map((datum, index) => {
              return (
                <NewCollectionCard
                  id={datum.id}
                  key={index}
                  img={datum.image}
                  name={datum.name}
                  price={datum.price}
                  type="black"
                  discount={datum.discount}
                  color={datum.color}
                  category={datum.category}
                  ratings={datum.ratings}
                  place={"shop"}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSecondSection;
