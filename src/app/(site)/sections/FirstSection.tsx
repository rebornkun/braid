import GlassProduct from "@/components/GlassProduct";
import HomeSwiper from "@/components/HomeSwiper";
import { BagSvg, StarSvg } from "@/components/svg";
import Image from "next/image";
import Link from "next/link";
import { getFeaturedItems } from "../../../../sanity/sanity-utils";

const FirstSection = async () => {
  const featuredItems = await getFeaturedItems();
  return (
    <section className="h-screen 3xl:h-[80vh] w-full relative">
      <div className="background flex w-full h-full absolute top-0 left-0 right-0 bottom-o m-auto">
        <div className="w-[50%] bg-[#f5d7ce] h-full"></div>
        <div className="w-[50%] bg-green h-full"></div>
      </div>
      <div className="container mx-auto relative px-[20px] h-full">
        <div className="w-full h-full flex flex-col justify-center gap-[1rem] relative">
          <div className="w-[200px] h-[200px] rounded-full bg-[#044e4f] blur-[70px] absolute top-[150px] right-0 max-md:hidden"></div>
          <div className="w-[200px] h-[200px] rounded-full bg-[#044e4f] blur-[70px] absolute bottom-[-100px] right-[200px] max-md:hidden"></div>
          <Image
            src={"/womannn.png"}
            alt="hero"
            height={10000}
            width={10000}
            priority
            className="max-w-[400px] lg:max-w-[450px] w-full absolute bottom-0 left-0 right-0 m-auto z-[1] max-md:hidden"
          />
          <h1 className="MainFont text-[17vw] lg:text-[18vw] 2xl:text-[20rem] w-fit font-[500]  leading-[1] text-[#383838DF] ">
            New Fashion.
          </h1>
          <p className="max-w-full md:max-w-[500px] w-full text-[#8F8E8E] text-[16px] 2xl:text-[20px] font-[400] leading-[20px] 2xl:leading-[26px] tracking-[0.2em] mt-[-1rem] lg:mt-[-1.5rem] text-justify">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic.
          </p>
          <Link
            href={"/shop"}
            className="z-[3] group/button w-fit h-[56px] bg-green text-[#f0e8e8] py-[15px] px-[25px] cursor-pointer  text-[12px] 2xl:text-[16px] font-[400] leading-[0.5] transition-all ease duration-300 shadow-[3px_3px_rgba(0,0,0,0.9)] hover:shadow-[5px_5px_rgba(0,0,0,0.9)] flex items-center justify-center gap-[5px]"
          >
            Shop Now
            <div className="w-[0px] h-[0px] group-hover/button:h-[20px] group-hover/button:w-[20px] overflow-hidden transition-all ease duration-300">
              <BagSvg className="w-[20px] h-[20px] " />
            </div>
          </Link>
          <div className="absolute right-0 bottom-0 w-[200px] lg:w-[300px]">
            <HomeSwiper />
          </div>

          <div className="absolute top-[100px] xl:top-[200px] left-0 xl:left-[160px] z-[2] max-md:hidden">
            {
              <GlassProduct
                id={featuredItems[0]._id}
                img={featuredItems[0].image}
                type={"black"}
                name={featuredItems[0].name}
                price={featuredItems[0].price}
                rating={featuredItems[0].ratings}
                discount={featuredItems[0].discount}
              />
            }
          </div>
          <div className="absolute bottom-[260px] xl:bottom-[230px] right-0 xl:right-[260px] z-[2] max-md:hidden">
            <GlassProduct
              id={featuredItems[1]._id}
              img={featuredItems[1].image}
              type={"white"}
              name={featuredItems[1].name}
              price={featuredItems[1].price}
              rating={featuredItems[1].ratings}
              discount={featuredItems[1].discount}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
