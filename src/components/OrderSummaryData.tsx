const OrderSummaryData = ({ text, value }: { text: string; value: number }) => {
  return (
    <div className="w-full flex justify-between">
      <p
        className={`text-[#808080]  text-[14px] 2xl:text-[16px] font-[400] leading-[1] whitespace-nowrap`}
      >
        {text}
      </p>
      <p
        className={`text-[#808080]  text-[14px] 2xl:text-[16px] font-[400] leading-[1] whitespace-nowrap`}
      >
        ₦{value.toLocaleString()}
      </p>
    </div>
  );
};

export default OrderSummaryData;
