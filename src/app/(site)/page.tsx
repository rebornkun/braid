import Image from "next/image";
import FirstSection from "./sections/FirstSection";
import Partners from "./sections/Partners";
import SecondSection from "./sections/SecondSection";
import ThirdSection from "./sections/ThirdSection";
import ForthSection from "./sections/ForthSection";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col bg-[#F6F5F5]">
      <FirstSection />
      <Partners />
      <SecondSection />
      <ThirdSection />
      <ForthSection />
    </main>
  );
}
