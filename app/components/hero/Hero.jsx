"use client";

import Image from "next/image";
import SubHeading from "@/components/SubHeading";
import ButtonLink from "@/components/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      tabIndex="1"
      className=" relative max-w-[880px] px-5 sm:pt-[12rem] pt-[8rem] pb-6 mx-auto text-center hero-gradient "
    >
      <motion.div
        style={{ position: "relative" }}
        initial={{ y: "10%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeIn",
          type: "spring",
          stiffness: 60,
        }}
      >
        <SubHeading>AI DATA PROCESSING</SubHeading>

        <h1 className="tracking-[-2px] mt-7 leading-[108%] md:text-[5rem] sm:text-[3rem] text-[2.3rem]  text-white">
          Championing AI for Data Processing Excellence
        </h1>
        <p className="tracking-[-.21px] mt-7 leading-[144%] sm:text-[1.3rem] text-[1rem] text-white">
          Experience the pinnacle of efficiency in data processing with AI at
          the helm, driving excellence in every operation.
        </p>
        <div className="flex items-center sm:flex-row flex-col justify-center gap-x-9 gap-y-5 mt-7">
          <ButtonLink
            href={"#"}
            text={"Contact Us"}
            lable={"Contact us for more information"}
            className={"bg-transparent hover:bg-[#ffffff1e]"}
          />
          <ButtonLink
            href={"#"}
            text={"Our Service"}
            lable={"Learn more about our services"}
            className={
              "bg-gradient-to-b from-transparent to-[#8e37ff38] hover:bg-[#8e37ff38] transition-all duration-300 rounded-full border-white/40 bg-[rgba(143, 55, 255, .5)] "
            }
          />
        </div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
            ease: "easeIn",
            type: "spring",
            stiffness: 60,
          }}
          className="xl:absolute  bottom-[-8rem] xl:left-[-15rem] left-[-7rem]"
        >
          <Image
            src={"/img/tan1.webp"}
            width={300}
            height={300}
            alt="tan1"
            className="mx-auto"
          />
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.9,
            ease: "easeIn",
            type: "spring",
            stiffness: 60,
          }}
          className="absolute xl:block hidden xl:right-[-15rem] right-[-7rem] bottom-[-8rem]"
        >
          <Image src={"/img/tan2.webp"} width={300} height={300} alt="tan1" />
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Hero;
