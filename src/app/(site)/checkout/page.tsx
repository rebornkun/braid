import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AddressAndPayment from "./AddressAndPayment";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import OrderSummaryData from "@/components/OrderSummaryData";

const page = () => {
  return (
    <div className="flex min-h-screen max-h-fit flex-col bg-[#F6F5F5]  max-md:pt-[100px]  pt-[120px] pb-[40px]">
      <div className="container mx-auto relative px-[20px] flex-1 h-full flex max-md:flex-col-reverse max-md:gap-6 gap-2 lg:gap-6">
        <AddressAndPayment />

        <div className="flex-[1_1_40%] w-full lg:w-[40%] flex flex-col gap-2 lg:px-4 relative  ">
          <Link
            href="/shop"
            className="flex gap-4 hover:underline text-green md:hidden"
          >
            <h1 className="Inter text-[14px] 2xl:text-[16px] font-[400] tracking-[-0.02em] flex gap-2 items-center">
              <IoMdArrowRoundBack className="text-[16px] cursor-pointer" />
              Back To Shop
            </h1>
          </Link>
          <div className="w-full bg-white shadow rounded-[5px] p-6 sticky top-[100px] flex flex-col gap-8">
            <h5 className=" text-[20px] 2xl:text-[24px] text-[#767676] font-[500] leading-[1]">
              Order Summary
            </h5>
            <div className="w-full flex flex-col gap-4 ">
              <OrderSummaryData text="Items (2):" value={800000} />
              <OrderSummaryData text="Shipping $ handling:" value={5000} />
              <OrderSummaryData text="Before Tax:" value={800000} />
              <OrderSummaryData text="Tax Collected:" value={4000} />
            </div>
            <div className="flex w-full items-center gap-2">
              <Input
                type="text"
                placeholder="Discount or coupon Code"
                className="h-[50px]"
              />
              <Button
                type="submit"
                className="h-[50px] bg-green hover:bg-green hover:opacity-[0.8]  "
              >
                Apply
              </Button>
            </div>
            <div className="w-full h-[0.5px] bg-grey"></div>
            <div className="w-full flex justify-between">
              <p
                className={`text-[#767676]  text-[16px] 2xl:text-[18px] font-[500] leading-[1] whitespace-nowrap`}
              >
                Order Total:
              </p>
              <p
                className={`text-[#767676]  text-[16px] 2xl:text-[18px] font-[500] leading-[1] whitespace-nowrap`}
              >
                ₦{(800000).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
