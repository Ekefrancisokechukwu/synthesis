"use client";

import PrimaryHeading from "@/components/PrimaryHeading";
import SubHeading from "@/components/SubHeading";
import ButtonLink from "@/components/button";
import AboutInfos from "./AboutInfos";
import Glow from "../Glow";
import { useNavigation } from "@/hooks/use-navigation";

const Aboutus = () => {
  const { ref } = useNavigation("about us");

  return (
    <section ref={ref} id="about-us" className="px-5 scroll-m-[5rem]">
      <div className="text-center relative py-[5rem] max-w-[600px] mx-auto space-y-8">
        <SubHeading>About Us</SubHeading>
        <PrimaryHeading>
          Crafting {`Tomorrow&apos;s`} Innovative Solutions
        </PrimaryHeading>
        <p className="text-white sm:text-[1.33rem] text-[1rem] tracking-[-.21px]  leading-[144%]">
          We'res consistently pushing the boundaries of innovation to create
          groundbreaking solutions that effectively meet today`s challenges.
        </p>

        <ButtonLink
          href={"#"}
          text={"Our Service"}
          lable={"Learn more about our services"}
          className={
            "bg-gradient-to-b from-transparent to-[#8e37ff38] hover:bg-[#8e37ff38] transition-all duration-300 rounded-full border-white/40 bg-[rgba(143, 55, 255, .5)] "
          }
        />

        <Glow
          className={"top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}
        />
      </div>
      <AboutInfos />
    </section>
  );
};
export default Aboutus;
