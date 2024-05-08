"use client";
import {
  ChangeEvent,
  ChangeEventHandler,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { Checkbox } from "./ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {
  categoriesFilter,
  colorFilter,
  initialFilterValues,
} from "@/utils/mock";
import { TShopFilters } from "@/Types/types";
import { FcClearFilters } from "react-icons/fc";

const FilterSideBar = ({
  allFilters,
  setAllFilters,
}: {
  allFilters: TShopFilters;
  setAllFilters: React.Dispatch<SetStateAction<TShopFilters>>;
}) => {
  const [minPrice, setMinPrice] = useState(allFilters?.priceMin);
  const [maxPrice, setMaxPrice] = useState(allFilters?.priceMax);
  const timeoutRef = useRef<number | undefined>(undefined);

  const handleMinPriceInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(event.target.value));
    const newValue = event.target.value;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setAllFilters((prev) => {
        return { ...prev, priceMin: Number(newValue) };
      });
    }, 1000);
  };

  const handleMaxPriceInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(event.target.value));
    const newValue = event.target.value;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setAllFilters((prev) => {
        return { ...prev, priceMax: Number(newValue) };
      });
    }, 1000);
  };

  return (
    <div className="w-full">
      <CollapsableFilterBox heading="Categories" height={"83px"}>
        <div className="w-[90%] mx-auto py-[10px] flex flex-col gap-4">
          {categoriesFilter.map((datum, index) => {
            return (
              <CheckboxFilter
                key={index}
                id={datum.name}
                value={datum.value}
                label={datum.name}
                allFilters={allFilters}
                setAllFilters={setAllFilters}
              />
            );
          })}
        </div>
      </CollapsableFilterBox>
      <CollapsableFilterBox heading="Price Range" height={"155px"}>
        <div className="w-[90%] mx-auto py-[10px] flex flex-col gap-2">
          <div className="flex flex-col gap-[5px]">
            <p className="text-[12px] 2xl:text-[14px] text-[#BEBEBE]">
              Minimum
            </p>
            <input
              className="px-2 py-2 border-green border-[2px] rounded-[5px] outline-green text-[12px] 2xl:text-[14px] font-[600] "
              placeholder="min price"
              type="number"
              value={Number(minPrice)}
              onChange={handleMinPriceInputChange}
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <p className="text-[12px] 2xl:text-[14px] text-[#BEBEBE]">
              Maximum
            </p>
            <input
              className="px-2 py-2 border-green border-[2px] rounded-[5px] outline-green text-[12px] 2xl:text-[14px] font-[600] "
              placeholder="max price"
              type="number"
              value={maxPrice}
              onChange={handleMaxPriceInputChange}
            />
          </div>
        </div>
      </CollapsableFilterBox>
      <CollapsableFilterBox heading="Color" height={"55px"}>
        <div className="w-[90%] mx-auto py-[10px] flex flex-col gap-4">
          <div className=" flex flex-row gap-2 overflow-auto py-[5px] px-[5px] ">
            {colorFilter.map((value, index) => {
              return (
                <ColorBtn
                  key={index}
                  value={value}
                  allFilters={allFilters}
                  setAllFilters={setAllFilters}
                />
              );
            })}
          </div>
        </div>
      </CollapsableFilterBox>
      <CollapsableFilterBox heading="Discount Percentage" height={"180px"}>
        <RadioGroup
          defaultValue="option-one"
          className="w-[90%] mx-auto py-[10px] flex flex-col gap-4"
          onValueChange={(value: string) => {
            setAllFilters({ ...allFilters, discount: Number(value) });
          }}
        >
          <RadioBtn
            id={"optionOne"}
            value={"80"}
            label={"80% or more"}
            allFilters={allFilters}
            setAllFilters={setAllFilters}
          />
          <RadioBtn
            id={"optionTwo"}
            value={"60"}
            label={"60% or more"}
            allFilters={allFilters}
            setAllFilters={setAllFilters}
          />
          <RadioBtn
            id={"optionThree"}
            value={"40"}
            label={"40% or more"}
            allFilters={allFilters}
            setAllFilters={setAllFilters}
          />
          <RadioBtn
            id={"optionFour"}
            value={"20"}
            label={"20% or more"}
            allFilters={allFilters}
            setAllFilters={setAllFilters}
          />
          <RadioBtn
            id={"optionFive"}
            value={"1"}
            label={"All discounts"}
            allFilters={allFilters}
            setAllFilters={setAllFilters}
          />
        </RadioGroup>
      </CollapsableFilterBox>
      <div className="w-full h-[1px] bg-black "></div>
      <button
        onClick={() => {
          setAllFilters(initialFilterValues);
        }}
        className={`mt-2 flex items-center justify-center gap-[4px] bg-[#f56565] w-full h-[40px]  rounded-[5px] transition-all ease-in-out duration-300 active:scale-[0.9] `}
      >
        <FcClearFilters className="text-[20px] " />
        <p className="text-[12px] 2xl:text-[14px] text-[#ffffff] font-[500] whitespace-nowrap">
          Clear filters
        </p>
      </button>
    </div>
  );
};

export default FilterSideBar;

const CollapsableFilterBox = ({
  children,
  heading,
  height,
}: {
  children: React.ReactNode;
  heading: string;
  height: string;
}) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="w-full  flex flex-col">
      <div className="w-full h-[1px] bg-black "></div>
      <div className="py-[10px] w-[90%] mx-auto ">
        <div
          className="flex justify-between items-center w-full cursor-pointer  "
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <p className="text-[16px] 2xl:text-[20px] font-[500]">{heading}</p>
          <div className="w-[15px] h-[15px] flex items-center justify-center relative">
            <div className="absolute h-[3px] w-full rounded-full bg-green"></div>
            <div
              style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
              className="absolute h-[3px] w-full rounded-full bg-green transition-all duration-150 ease-in-out"
            ></div>
          </div>
        </div>
        <div
          style={{ height: isOpen ? height : "0px" }}
          className="transition-all duration-150 ease-in-out overflow-hidden"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

const CheckboxFilter = ({
  id,
  value,
  label,
  allFilters,
  setAllFilters,
}: {
  id: string;
  value: string;
  label: string;
  allFilters: TShopFilters;
  setAllFilters: React.Dispatch<SetStateAction<TShopFilters>>;
}) => {
  return (
    <div className="flex gap-2 items-center">
      <Checkbox
        id={id}
        className="border-green data-[state=checked]:!bg-green"
        onCheckedChange={(isChecked) => {
          if (isChecked) {
            let revamped = {
              ...allFilters,
              category: allFilters.category
                ? [...allFilters.category, value]
                : [value],
            };
            setAllFilters(revamped);
          } else {
            let revamped = allFilters?.category?.filter(
              (filters) => filters !== value
            );
            setAllFilters({ ...allFilters, category: revamped });
          }
        }}
      />
      <label
        htmlFor={id}
        className="text-[12px] 2xl:text-[14px] w-full leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
};

const RadioBtn = ({
  id,
  value,
  label,
  allFilters,
  setAllFilters,
}: {
  id: string;
  value: string;
  label: string;
  allFilters: TShopFilters;
  setAllFilters: React.Dispatch<SetStateAction<TShopFilters>>;
}) => {
  return (
    <div className="flex items-center space-x-2">
      <RadioGroupItem
        value={value}
        id={id}
        checked={String(allFilters.discount) === value}
        className="  data-[state=checked]:!text-green  data-[state=checked]:!border-green border-[1.5px]"
      />
      <label
        htmlFor={id}
        className="text-[12px] 2xl:text-[14px] cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
};

const ColorBtn = ({
  value,
  allFilters,
  setAllFilters,
}: {
  value: string;
  allFilters: TShopFilters;
  setAllFilters: React.Dispatch<SetStateAction<TShopFilters>>;
}) => {
  return (
    <div
      style={{ background: value }}
      onClick={() => {
        setAllFilters({ ...allFilters, color: value });
      }}
      className={`colorBtn min-w-[30px] min-h-[30px] max-w-[30px] max-h-[30px] rounded-full bg-white cursor-pointer shadow transition-all duration-300 ease hover:scale-[1.05] ${allFilters.color === value ? "scale-[1.2] border-[1px] border-grey" : "scale-[0.9]"} `}
    ></div>
  );
};
