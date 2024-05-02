import ShopFirstSection from "./sections/ShopFirstSection";
import ShopSecondSection from "./sections/ShopSecondSection";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#F6F5F5]">
      <ShopFirstSection />
      <ShopSecondSection />
    </div>
  );
};

export default page;
