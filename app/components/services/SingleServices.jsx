"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SingleServices = ({ service }) => {
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      tabIndex={"0"}
    >
      <div className="relative w-full sm:h-[23rem] h-[18rem] rounded-xl">
        <Image
          src={service.img}
          alt={service.title}
          fill
          sizes="100vw"
          className="object-cover rounded-xl"
        />
      </div>

      <div className="mt-5">
        <h1 className="text-white md:text-[1.5rem] text-[1rem] tracking-[0em] leading-[108%] ">
          {service.title}
        </h1>

        <p className="text-gray-600 mt-3 font-semibold  tracking-[-.16px] leading-[144%]">
          {service.info}
        </p>
      </div>
    </motion.div>
  );
};
export default SingleServices;
