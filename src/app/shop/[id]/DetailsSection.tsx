import Rating from "@/components/Rating";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { FaHeart, FaMoneyCheck } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";

const DetailsSection = () => {
  const hairLength = [12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
  return (
    <div className="flex-[1_1_50%] w-full lg:w-[50%] flex flex-col gap-2 justify-center ">
      <p className="Inter text-[14px] 2xl:text-[16px] text-[#767676] -mb-2">
        BraidsExtra
      </p>
      <h5 className="Inter text-[24px] 2xl:text-[30px] font-[600] ">
        Color 45 sssss
      </h5>
      <p className="Inters text-[14px] 2xl:text-[16px] font-[400] ">
        Nano Slim hair
      </p>
      <div className="flex gap-2 h-fit items-center">
        <Rating rating={4.4} />
        <Link
          href={"/shop/1/review"}
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
              // decreaseAmountInCart()
            }}
          />
          <p className="text-[14px] 2xl:text-[16px] text-black font-[500] whitespace-nowrap">
            {/* {getItemFromCart().count} */}0
          </p>
          <AiFillPlusCircle
            className="text-[18px] 2xl:text-[20px] text-black cursor-pointer "
            onClick={() => {
              // increaseAmountInCart();
            }}
          />
        </div>
      </div>
      <div className="flex gap-4 h-fit items-center my-4">
        <p
          className={`text-[#0E0E0E]
                Inter text-[24px] 2xl:text-[30px] font-[300] leading-[1]`}
        >
          ₦ {(800000).toLocaleString()}
        </p>

        <p
          className={`text-[#CFCFCF]
                   Inter text-[24px] 2xl:text-[30px] font-[300] leading-[1] line-through`}
        >
          ₦ {(500000).toLocaleString()}
        </p>
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
          <div className="h-[25px] w-[25px] rounded-full bg-green"></div>
        </div>
        <p className=" text-[12px] 2xl:text-[14px] font-[400] text-[#767676] ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          dicta eum omnis, suscipit quas optio accusamus deserunt fugiat hic
          consectetur officia dolorem praesentium ad numquam, necessitatibus
          iste porro perferendis? Necessitatibus, voluptatum id? Vitae
          voluptatum necessitatibus consectetur ipsa obcaecati praesentium,
          nesciunt quis quasi quae eos laboriosam repellat odit, sunt placeat,
          architecto nostrum ducimus quia asperiores quisquam magni illum earum
          accusamus! Voluptate delectus asperiores, sed nisi ullam nemo dolor
          maxime quae magnam a
        </p>
      </div>
      <div className="flex flex-col gap-2 h-fit mt-2">
        <p className="Inters text-[16px] 2xl:text-[18px] font-[400] ">
          Select length
        </p>
        <div className="flex gap-2">
          {hairLength.map((datum, index) => {
            return (
              <div
                key={index}
                className="h-[30px] w-[30px] p-2 border-black border-[0.5px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.15] origin-center hover:bg-grey "
              >
                {datum}&quot;
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex gap-2 h-fit items-center my-4">
        <button className="flex items-center justify-center gap-2 w-full h-[50px] bg-green rounded-[5px]">
          <p className=" min-w-[40px] h-[40px] font-[500] text-[20px] transition-all ease-in-out duration-500 origin-center leading-normal text-white flex items-center justify-center">
            <IoBagAdd className="text-[20px] " />
          </p>
          <p className="text-[12px] 2xl:text-[14px] text-[#ffffff] font-[500] whitespace-nowrap">
            Add to Bag
          </p>
        </button>
        <button className="flex items-center justify-center w-[50px] h-[50px] bg-green rounded-[5px]">
          <FaHeart className="text-[20px] text-grey " />
        </button>
      </div>
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
            Delivery within 48 to 72 hours
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 h-fit mt-2">
        <p className="Inters text-[16px] 2xl:text-[18px] font-[400] ">
          Select Delivery Type
        </p>
        <RadioGroup
          defaultValue="Normal"
          className="w-full flex flex-col gap-4"
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
          <TbTruckDelivery className="text-[20px] " />
          <p className="text-[14px] 2xl:text-[16px] text-[#000000] font-[400] whitespace-nowrap">
            Delivery within {time}
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
