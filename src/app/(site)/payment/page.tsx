"use client";
import OrderSummaryData from "@/components/OrderSummaryData";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex min-h-screen max-h-fit flex-col bg-[#F6F5F5]  max-md:pt-[100px]  pt-[120px] pb-[40px]">
      <div className="container mx-auto relative px-[20px] flex-1 h-full flex max-md:flex-col max-md:gap-6 ">
        <div className="md:flex-[1_1_50%] flex-[1_1_60%] w-full md:w-[50%] lg:w-[60%] flex flex-col gap-4 ">
          <h5 className="MainFont text-[30px] 2xl:text-[40px] font-[500] leading-[1] text-[#767676]g text-black">
            Thank You, Your Order Has Been Received{" "}
            <span className="text-red animate-ping">&hearts;</span>.
          </h5>

          <div className="w-full flex flex-col mt-4">
            <div className="py-4 border-b-[0.5px] border-grey flex gap-2 items-center">
              <p
                className={`text-[#808080]  text-[14px] 2xl:text-[16px] font-[400] leading-[1] `}
              >
                Order Id:
              </p>
              <p
                className={`text-[#808080]  text-[14px] 2xl:text-[16px] font-[500] leading-[1] `}
              >
                33435345
              </p>
            </div>
            <div className="py-4 border-b-[0.5px] border-grey flex gap-2 items-center">
              <p
                className={`text-[#808080]  text-[14px] 2xl:text-[16px] font-[400] leading-[1] `}
              >
                Date:
              </p>
              <p
                className={`text-[#808080]  text-[14px] 2xl:text-[16px] font-[500] leading-[1] `}
              >
                May 4, 2024
              </p>
            </div>
            <div className="py-4 border-b-[0.5px] border-grey flex gap-2 items-center">
              <p
                className={`text-[#808080]  text-[14px] 2xl:text-[16px] font-[400] leading-[1] `}
              >
                Total:
              </p>
              <p
                className={`text-[#808080]  text-[14px] 2xl:text-[16px] font-[500] leading-[1] `}
              >
                ₦{(800000).toLocaleString()}
              </p>
            </div>
            <div className="py-4 border-b-[0.5px] border-grey flex gap-2 items-center">
              <p
                className={`text-[#808080]  text-[14px] 2xl:text-[16px] font-[400] leading-[1] `}
              >
                Payment Method:
              </p>
              <p
                className={`text-[#808080]  text-[14px] 2xl:text-[16px] font-[500] leading-[1] `}
              >
                Direct Bank Transfer
              </p>
            </div>
          </div>

          <div className="ifBankTransfer mt-4 flex flex-col gap-4">
            <p className="text-[#808080]  text-[14px] 2xl:text-[16px] font-[400] leading-[1]">
              Kindly forward your payment receipt to{" "}
              <Link
                href="mailto:braidwigsextra@gmail.com"
                className="text-green font-[600]"
              >
                braidwigsextra@gmail.com
              </Link>
            </p>
            <ul className=" list-disc mb-2 text-[14px] 2xl:text-[16px] font-[300] ">
              <h5 className="font-[400] text-[16px] font-[500]">
                Bank Details:
              </h5>
              <li className="ml-4">Bank: Access Bank Plc </li>
              <li className="ml-4">Account Name: Braids Wigs Extra</li>
              <li className="ml-4">Account Number: 000000000</li>
            </ul>
          </div>

          <h5 className="MainFont text-[30px] 2xl:text-[40px] font-[500] leading-[1] text-[#767676]g text-black mt-4">
            Sit Tight, We Are Working!{" "}
            <span className="text-red animate-ping">&hearts;</span>.
          </h5>
        </div>

        <div className="md:flex-[1_1_50%] flex-[1_1_40%] w-full md:w-[50%] lg:w-[40%] flex flex-col gap-2 lg:px-4 relative  ">
          <div className="w-full bg-white shadow rounded-[5px] p-6 sticky top-[100px] flex flex-col gap-6">
            <p
              role="textbox"
              aria-multiline="true"
              className="MainFont w-full text-[30px] text-pink"
            >
              BraidsEx
            </p>
            <h5 className=" text-[14px] 2xl:text-[16px] text-[#767676] font-[400] leading-[1]">
              Order Id: 2343245345
            </h5>
            <div className="w-full flex flex-col gap-4 ">
              <div className="w-full flex gap-2 md:gap-4 items-center">
                <div className="productImg min-h-[100px] max-h-[100px] min-w-[70px] max-w-[70px] bg-grey border-[0.5px] border-[#767676] rounded-[5px] flex items-end">
                  <Image
                    src={"/hairs/hairOne.webp"}
                    alt="product"
                    height={10000}
                    width={10000}
                    priority
                    className="w-fit h-fit  mx-auto transition-all ease-in-out duration-300"
                  />
                </div>

                <div className="flex flex-col flex-1 w-full gap-[3px]">
                  <div className="flex justify-between items-start">
                    <h5 className="Inter text-[14px] 2xl:text-[16px] font-[600] leading-[1] w-[50%]">
                      Color 50 braid nano slim wig X5
                    </h5>
                    <p
                      className={`text-[#0E0E0E] Inter text-[14px] 2xl:text-[16px] font-[300] leading-[1] whitespace-nowrap`}
                    >
                      ₦ {(800000).toLocaleString()}
                    </p>
                  </div>
                  <h5 className=" text-[12px] 2xl:text-[14px] font-[300] leading-[1] w-[50%] mt-[5px]">
                    BraidsExtra
                  </h5>

                  <div className="flex gap-2 items-center">
                    <p className=" text-[12px] 2xl:text-[14px] font-[300] ">
                      Color:
                    </p>
                    <div className="h-[15px] w-[15px] rounded-full bg-green"></div>
                  </div>

                  <h5 className=" text-[12px] 2xl:text-[14px] font-[300] leading-[1] w-[50%]">
                    Length: 23&quot;
                  </h5>
                </div>
              </div>

              <div className="w-full flex gap-2 md:gap-4 items-center">
                <div className="productImg min-h-[100px] max-h-[100px] min-w-[70px] max-w-[70px] bg-grey border-[0.5px] border-[#767676] rounded-[5px] flex items-end">
                  <Image
                    src={"/hairs/hairOne.webp"}
                    alt="product"
                    height={10000}
                    width={10000}
                    priority
                    className="w-fit h-fit  mx-auto transition-all ease-in-out duration-300"
                  />
                </div>

                <div className="flex flex-col flex-1 w-full gap-[3px]">
                  <div className="flex justify-between items-start">
                    <h5 className="Inter text-[14px] 2xl:text-[16px] font-[600] leading-[1] w-[50%]">
                      Color 50 braid nano slim wig X5
                    </h5>
                    <p
                      className={`text-[#0E0E0E] Inter text-[14px] 2xl:text-[16px] font-[300] leading-[1] whitespace-nowrap`}
                    >
                      ₦ {(800000).toLocaleString()}
                    </p>
                  </div>
                  <h5 className=" text-[12px] 2xl:text-[14px] font-[300] leading-[1] w-[50%] mt-[5px]">
                    BraidsExtra
                  </h5>

                  <div className="flex gap-2 items-center">
                    <p className=" text-[12px] 2xl:text-[14px] font-[300] ">
                      Color:
                    </p>
                    <div className="h-[15px] w-[15px] rounded-full bg-green"></div>
                  </div>

                  <h5 className=" text-[12px] 2xl:text-[14px] font-[300] leading-[1] w-[50%]">
                    Length: 23&quot;
                  </h5>
                </div>
              </div>
            </div>
            <div className="w-full h-[0.5px] bg-grey"></div>
            <div className="w-full flex flex-col gap-4 ">
              <OrderSummaryData text="Items (2):" value={800000} />
              <OrderSummaryData text="Shipping $ handling:" value={5000} />
              <OrderSummaryData text="Before Tax:" value={800000} />
              <OrderSummaryData text="Tax Collected:" value={4000} />
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
