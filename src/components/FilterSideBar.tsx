"use client";
import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const FilterSideBar = () => {
  return (
    <div className="w-full">
      <CollapsableFilterBox heading="Categories" height={"203px"}>
        <div className="w-[90%] mx-auto py-[10px] flex flex-col gap-4">
          <CheckboxFilter id={"1"} value={"wigs"} label="Wigs" />
          <CheckboxFilter id={"2"} value={"wigs"} label="Wigs" />
          <CheckboxFilter id={"3"} value={"wigs"} label="Wigs" />
          <CheckboxFilter id={"4"} value={"wigs"} label="Wigs" />
          <CheckboxFilter id={"5"} value={"wigs"} label="Wigs" />
          <CheckboxFilter id={"6"} value={"wigs"} label="Wigs" />
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
            />
          </div>
        </div>
      </CollapsableFilterBox>
      <CollapsableFilterBox heading="Color" height={"55px"}>
        <div className="w-[90%] mx-auto py-[10px] flex flex-col gap-4">
          <div className=" flex flex-row gap-2 overflow-auto py-[5px] ">
            <ColorBtn value={"#007273"} />
            <ColorBtn value={"#000000"} />
            <ColorBtn value={"#000666"} />
            <ColorBtn value={"#8c59b4"} />
            <ColorBtn value={"#ffffff"} />
            <ColorBtn value={"#FDB29B"} />
          </div>
        </div>
      </CollapsableFilterBox>
      <CollapsableFilterBox heading="Discount Percentage" height={"180px"}>
        <RadioGroup
          defaultValue="option-one"
          className="w-[90%] mx-auto py-[10px] flex flex-col gap-4"
        >
          <RadioBtn id={"optionOne"} value={"50%"} label={"50% or more"} />
          <RadioBtn id={"optionTwo"} value={"40%"} label={"40% or more"} />
          <RadioBtn id={"optionThree"} value={"30%"} label={"30% or more"} />
          <RadioBtn id={"optionFour"} value={"20%"} label={"20% or more"} />
          <RadioBtn id={"optionFive"} value={"10%"} label={"10% or more"} />
        </RadioGroup>
      </CollapsableFilterBox>
      <div className="w-full h-[1px] bg-black "></div>
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
}: {
  id: string;
  value: string;
  label: string;
}) => {
  return (
    <div className="flex gap-2 items-center">
      <Checkbox
        id={id}
        className="border-green data-[state=checked]:!bg-green"
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
}: {
  id: string;
  value: string;
  label: string;
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
        className="text-[12px] 2xl:text-[14px] cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
};

const ColorBtn = ({ value }: { value: string }) => {
  return (
    <div
      style={{ background: value }}
      className="colorBtn min-w-[30px] min-h-[30px] max-w-[30px] max-h-[30px] rounded-full bg-white cursor-pointer shadow "
    ></div>
  );
};
