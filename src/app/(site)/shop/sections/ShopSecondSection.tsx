"use client";
import FilterSideBar from "@/components/FilterSideBar";
import NewCollectionCard from "@/components/NewCollectionCard";
import NewCollectionCardSkel from "@/components/NewCollectionCardSkel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { VscSearchStop } from "react-icons/vsc";
// import { useApi, useAppStore } from "@/store/store";
// import { productsMock } from "@/utils/mock";
// import { useEffect } from "react";
import { IoIosArrowDown, IoMdCheckmark } from "react-icons/io";
import { getItems, getItemsCount } from "../../../../../sanity/sanity-utils";
import { useEffect, useState } from "react";
import { TShopFilters, productType } from "@/Types/types";
import { initialFilterValues } from "@/utils/mock";
import { FiSearch } from "react-icons/fi";

const ShopSecondSection = () => {
  // const isShopItemsLoading = useAppStore((state) => state.isShopItemsLoading);
  // const shopItems = useAppStore((state) => state.shopItems);
  // const { getAllItems } = useApi();

  const [shopItems, setShopItems] = useState<productType[]>([]);
  const [isShopItemsLoading, setIsShopItemsLoading] = useState(true);
  const [allFilters, setAllFilters] =
    useState<TShopFilters>(initialFilterValues);
  const [sortValue, setSortValue] = useState("_createdAt-desc");
  const [searchValue, setSearchValue] = useState("");
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const getData = async () => {
      setIsShopItemsLoading(true);
      try {
        const res = await getItems(10, sortValue, allFilters);
        setShopItems(res);
        setIsShopItemsLoading(false);
      } catch (e) {
        setIsShopItemsLoading(false);
        console.log(e);
      }
    };
    getData();
  }, [allFilters, sortValue]);

  useEffect(() => {
    const getTotalCount = async () => {
      try {
        const res = await getItemsCount();
        setTotalItems(res);
      } catch (e) {
        console.log(e);
      }
    };
    getTotalCount();
  }, []);

  // const shopItems = await getItems();

  return (
    <section className="w-full flex-1 transition-all duration-300 ease-in-out max-md:mt-[65px] mt-[80px]">
      <div className="container mx-auto relative px-[20px] h-full">
        <div className="w-full flex gap-4 py-10">
          <input
            className="flex-1 py-4 px-8 rounded-full outline-green text-[14px] 2xl:text-[16px]"
            placeholder="Search Here..."
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <div
            className="h-[56px] w-[56px] flex items-center justify-center bg-green rounded-full cursor-pointer"
            onClick={() => {
              setAllFilters({ ...allFilters, search: searchValue });
            }}
          >
            <FiSearch className="text-[25px] text-white" />
          </div>
        </div>

        <div className="flex justify-between">
          <p className="text-[14px] 2xl:text-[16px] font-[600] text-[#BEBEBE]">
            {shopItems.length} items found
          </p>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex gap-2 items-center focus:outline-none">
              Sort <IoIosArrowDown className="text-black " />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="text-[12px] 2xl:text-[14px] px-2"
              align="end"
            >
              <DropdownMenuLabel>Sort By:</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="w-full cursor-pointer flex gap-2 items-center"
                onClick={() => {
                  setSortValue("_createdAt-desc");
                }}
              >
                {sortValue === "_createdAt-desc" && (
                  <IoMdCheckmark className="text-green text-[12px] font-[600]" />
                )}
                Date: Newest
              </DropdownMenuItem>
              <DropdownMenuItem
                className="w-full cursor-pointer flex gap-2 items-center"
                onClick={() => {
                  setSortValue("_createdAt-asc");
                }}
              >
                {sortValue === "_createdAt-asc" && (
                  <IoMdCheckmark className="text-green text-[12px] font-[600]" />
                )}
                Date: Oldest
              </DropdownMenuItem>
              <DropdownMenuItem
                className="w-full cursor-pointer flex gap-2 items-center"
                onClick={() => {
                  setSortValue("ratings-desc");
                }}
              >
                {sortValue === "ratings-desc" && (
                  <IoMdCheckmark className="text-green text-[12px] font-[600]" />
                )}
                Ratings: Highest
              </DropdownMenuItem>
              <DropdownMenuItem
                className="w-full cursor-pointer flex gap-2 items-center"
                onClick={() => {
                  setSortValue("ratings-asc");
                }}
              >
                {sortValue === "ratings-asc" && (
                  <IoMdCheckmark className="text-green text-[12px] font-[600]" />
                )}
                Ratings: Lowest
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex gap-6 xl:gap-12 h-full my-4">
          <div className="w-full max-w-[250px] h-fit max-lg:hidden">
            <FilterSideBar
              allFilters={allFilters}
              setAllFilters={setAllFilters}
            />
          </div>
          {isShopItemsLoading ? (
            <div className="flex-1 h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-4">
              {[1, 2, 3, 4, 5, 6].map((datum, index) => {
                return <NewCollectionCardSkel key={index} />;
              })}
            </div>
          ) : (
            <>
              {shopItems.length > 0 ? (
                <div className="flex-1 h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-4 ">
                  {shopItems.map((datum, index) => {
                    return (
                      <NewCollectionCard
                        id={datum._id}
                        key={index}
                        img={datum.image}
                        name={datum.name}
                        brand={datum.brand}
                        price={datum.price}
                        type="black"
                        discount={datum.discount}
                        color={datum.color}
                        length={datum.length}
                        category={datum.category}
                        ratings={datum.ratings}
                        place={"shop"}
                        createdAt={datum._createdAt}
                        updateAt={datum._updateAt}
                        description={datum.description}
                        stock={datum.stock}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center">
                  <VscSearchStop className="text-[40px] text-[#BEBEBE] " />
                  <p className="text-[20px] text-[#BEBEBE] font-[600]">
                    Oops, no item found!.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShopSecondSection;
