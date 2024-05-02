import { TbNorthStar } from "react-icons/tb";
import ArrowBtn from "@/components/ArrowBtn";
import NewCollectionCard from "@/components/NewCollectionCard";
import { GateSvg } from "@/components/svg";
import { productsMock } from "@/utils/mock";

const ThirdSection = () => {
  return (
    <section className="h-full pt-[3rem] pb-[6rem] w-full relative overflow-hidden">
      <GateSvg className="absolute right-4 bottom-[60px] z-[1] scale-[1.3]" />
      <div className="container mx-auto relative flex flex-col h-full w-full px-[20px] justify-center gap-[5rem] items-center overflow-visible z-[2]">
        <div className="flex w-full justify-between">
          <div className="text flex  gap-2 z-[2] relative h-fit w-fit">
            <TbNorthStar className="text-green text-[18px] animate-ping absolute right-0" />
            <h1 className="MainFont text-[#383838] text-[36px] 2xl:text-[50px] font-[400] leading-[50px] 2xl:leading-[70px] tracking-[-0.02em]">
              New Collection
            </h1>
          </div>
          <ArrowBtn text={"All Collection"} link={"/shop"} />
        </div>
        <div className="w-full flex gap-4 py-8 px-4 w-full overflow-scroll">
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
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
