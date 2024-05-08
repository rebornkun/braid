"use client";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countryList } from "@/utils/country";
import { nigeriaStates } from "@/utils/state";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSolidBank } from "react-icons/bi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email(),
  newsletter: z.boolean().default(false).optional(),
  country: z.string().default("Nigeria"),
  firstname: z.string().min(1, { message: "Enter a first name" }),
  lastname: z.string().min(1, { message: "Enter a last name" }),
  address: z.string().min(1, { message: "Enter a address" }),
  apartment: z.string().optional(),
  city: z.string().min(1, { message: "Enter a city" }),
  state: z.string().default("Lagos"),
  postalcode: z.string().optional(),
  phone: z.string({
    required_error: "Phone number is required",
    invalid_type_error: "Phone number must be a number",
  }),
  shippingmethod: z.string().default("Express"),
  paymentmethod: z.string().default("direct"),
  saveinfo: z.boolean().default(false).optional(),
});

const AddressAndPayment = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      newsletter: false,
      country: "Nigeria",
      firstname: "",
      lastname: "",
      address: "",
      apartment: "",
      city: "",
      state: "Lagos",
      postalcode: "",
      phone: undefined,
      shippingmethod: "Express",
      paymentmethod: "direct",
      saveinfo: false,
    },
  });

  const router = useRouter();
  // 2. Define a submit handler.
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    router.push("/payment");
  };

  return (
    <div className="flex-[1_1_60%] w-full lg:w-[60%] flex flex-col gap-4 ">
      <Link
        href="/shop"
        className="flex gap-4 hover:underline text-green max-md:hidden"
      >
        <h1 className="Inter text-[14px] 2xl:text-[16px] font-[400] tracking-[-0.02em] flex gap-2 items-center">
          <IoMdArrowRoundBack className="text-[16px] cursor-pointer" />
          Back To Shop
        </h1>
      </Link>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col w-full gap-2">
            <div className="w-full flex items-center justify-between py-2 ">
              <h5 className=" text-[20px] 2xl:text-[24px] font-[500] leading-[1] text-[#767676]">
                Contact
              </h5>
              <Link
                href=""
                className=" text-[14px] 2xl:text-[16px] text-green font-[500] whitespace-nowrap underline"
              >
                Login here
              </Link>
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      type="email"
                      className="h-[50px] focus:outline-green"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[12px] font-[400] !mt-0" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newsletter"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex gap-2 items-center mt-[5px] ">
                      <Checkbox
                        id={"newsletter"}
                        className="border-green data-[state=checked]:!bg-green "
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <label
                        htmlFor={"newsletter"}
                        className="text-[12px] 2xl:text-[14px] w-full leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Click here to receive special discounts and promotions.
                      </label>
                    </div>
                  </FormControl>
                  <FormMessage className="text-[12px] font-[400] mt-0" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col w-full gap-4">
            <h5 className=" text-[20px] 2xl:text-[24px] font-[500] leading-[1] text-[#767676] pt-2">
              Delivery
            </h5>

            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="h-[50px]">
                        <div className="flex flex-col w-full items-start">
                          <p className="text-[#767676] text-[12px] ">
                            Country/Region
                          </p>
                          <SelectValue placeholder="Select a Country" />
                        </div>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {countryList.map((country: string, index: number) => {
                        return (
                          <SelectItem key={index} value={country}>
                            {country}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-4 w-full">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="First Name"
                        type="text"
                        className="h-[50px] w-full focus:outline-green"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[12px] font-[400] !mt-0" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="Last Name"
                        type="text"
                        className="h-[50px] w-full focus:outline-green"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[12px] font-[400] !mt-0" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Address"
                      type="text"
                      className="h-[50px] w-full focus:outline-green"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[12px] font-[400] !mt-0" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="apartment"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Apartment, suite, etc. (optional)"
                      type="text"
                      className="h-[50px] w-full focus:outline-green"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[12px] font-[400] !mt-0" />
                </FormItem>
              )}
            />

            <div className="flex gap-4 w-full">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="city"
                        type="text"
                        className="h-[50px] w-full focus:outline-green"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[12px] font-[400] !mt-0" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-[50px]">
                          <div className="flex flex-col w-full items-start">
                            <p className="text-[#767676] text-[12px] ">State</p>
                            <SelectValue placeholder="Select a state" />
                          </div>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {nigeriaStates.map((state: string, index: number) => {
                          return (
                            <SelectItem key={index} value={state}>
                              {state}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="postalcode"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="Postal code"
                        type="text"
                        className="h-[50px] w-full focus:outline-green"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[12px] font-[400] !mt-0" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Phone"
                      type="tel"
                      className="h-[50px] w-full focus:outline-green"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[12px] font-[400] !mt-0" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col w-full gap-4">
            <h5 className=" text-[20px] 2xl:text-[24px] font-[500] leading-[1] text-[#767676] pt-2">
              Shipping Method
            </h5>
            <p className="text-[12px] 2xl:text-[14px] text-[#767676] font-[300] whitespace-nowrap -mt-2">
              Prices may change due to distance
            </p>

            <FormField
              control={form.control}
              name="shippingmethod"
              render={({ field }) => (
                <FormItem>
                  <RadioGroup
                    className="w-full flex flex-col gap-4"
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioBtn
                          id={"optionTwo"}
                          value={"Express"}
                          price={3500}
                          time={"24 to 72 Hours"}
                        />
                      </FormControl>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioBtn
                          id={"optionOne"}
                          value={"GIGM"}
                          price={8500}
                          time={"2 to 5 business days"}
                        />
                      </FormControl>
                    </FormItem>
                  </RadioGroup>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col w-full gap-4">
            <h5 className=" text-[20px] 2xl:text-[24px] font-[500] leading-[1] text-[#767676] pt-2">
              Payment Method
            </h5>
            <p className="text-[12px] 2xl:text-[14px] text-[#767676] font-[300] whitespace-nowrap -mt-2">
              All transactions are secure and encrypted.
            </p>

            <FormField
              control={form.control}
              name="paymentmethod"
              render={({ field }) => (
                <FormItem>
                  <RadioGroup
                    className="w-full flex flex-col gap-4"
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <PaymentRadioBtn
                          id={"optionThree"}
                          value={"direct"}
                          title={"DIRECT BANK TRANSFER"}
                          desc={
                            "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account."
                          }
                        />
                      </FormControl>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <PaymentRadioBtn
                          id={"optionFour"}
                          value={"paystack"}
                          title={"DEBIT/CREDIT CARDS"}
                          desc={
                            "Make payment using your debit and credit cards with paystack"
                          }
                        />
                      </FormControl>
                    </FormItem>
                  </RadioGroup>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col w-full gap-4">
            <h5 className=" text-[20px] 2xl:text-[24px] font-[500] leading-[1] text-[#767676] pt-2">
              Remeber me
            </h5>

            <div className="border-[#767676] border-[0.5px] rounded-[5px] p-6 flex items-center">
              <FormField
                control={form.control}
                name="saveinfo"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex gap-2 items-center ">
                        <Checkbox
                          id={"saveinfo"}
                          className="border-green data-[state=checked]:!bg-green "
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <label
                          htmlFor={"saveinfo"}
                          className="text-[12px] 2xl:text-[14px] w-full leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Save my information for a faster checkout
                        </label>
                      </div>
                    </FormControl>
                    <FormMessage className="text-[12px] font-[400] mt-0" />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <p className="text-[12px] 2xl:text-[14px] text-[#767676] font-[300]">
            By clicking below and completing your order, you agree to purchase
            your item(s) from BraidsWigsExtra as merchant of record for this
            transaction, on BraidsWigsExtra&apos;s{" "}
            <Link href="" className="text-green font-[500]">
              Terms and Conditions
            </Link>{" "}
            and{" "}
            <Link href="" className="text-green font-[500]">
              Privacy Policy
            </Link>
            .
          </p>

          <Button
            type="submit"
            className="h-[50px] bg-green hover:bg-green hover:opacity-[0.8] cursor-pointer"
          >
            Place Order
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddressAndPayment;

const RadioBtn = ({
  id,
  value,
  price,
  time,
}: {
  id: string;
  value: string;
  price: number;
  time: string;
}) => {
  return (
    <div className="flex items-center space-x-2 w-full">
      <RadioGroupItem
        value={value}
        id={id}
        className="  data-[state=checked]:!text-green  data-[state=checked]:!border-green border-[1.5px]"
      />
      <label
        htmlFor={id}
        className="text-[14px] 2xl:text-[16px] cursor-pointer flex w-full justify-between"
      >
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            <TbTruckDelivery className="text-[20px] " />
            <p className="MainFont text-[20px] 2xl:text-[24px] text-[#000000] font-[500]">
              {value}
            </p>
          </div>

          <p className="text-[12px] 2xl:text-[14px] text-[#767676] font-[300] ">
            Delivery within {time}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-[14px] 2xl:text-[16px] text-[#000000] font-[500] whitespace-nowrap">
            ₦{price.toLocaleString()}
          </p>
        </div>
      </label>
    </div>
  );
};

const PaymentRadioBtn = ({
  id,
  value,
  title,
  desc,
}: {
  id: string;
  value: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="flex items-center space-x-2 w-full">
      <RadioGroupItem
        value={value}
        id={id}
        className="  data-[state=checked]:!text-green  data-[state=checked]:!border-green border-[1.5px]"
      />
      <label
        htmlFor={id}
        className="text-[14px] 2xl:text-[16px] cursor-pointer flex w-full justify-between"
      >
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            {value === "paystack" ? (
              <RiSecurePaymentFill className="text-[20px] " />
            ) : (
              <BiSolidBank className="text-[20px] " />
            )}
            <p className=" text-[16px] 2xl:text-[18px] text-[#000000] font-[500]">
              {title}
            </p>
          </div>

          <p className="text-[12px] 2xl:text-[14px] text-[#767676] font-[300]">
            {desc}
          </p>
        </div>
      </label>
    </div>
  );
};
