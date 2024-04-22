"use client";

import PrimaryHeading from "@/components/PrimaryHeading";
import SubHeading from "@/components/SubHeading";
import Glow from "../Glow";
import { motion } from "framer-motion";

const HighLights = () => {
  return (
    <section className="px-5 max-w-[1250px] mx-auto py-[5rem]">
      <div className="max-w-[700px] relative  space-y-5">
        <SubHeading>HIGHLIGHTS</SubHeading>
        <PrimaryHeading>
          Insightful Metrics and Key Highlights of Our Work
        </PrimaryHeading>
        <Glow className={"left-0 top-0"} />
      </div>

      <div className="py-11 border-y border-gray-500/35  grid lg:grid-cols-3 sm:grid-cols-2 gap-y-[2rem] mt-[3rem]">
        <motion.div
          initial={{ y: "30%", opacity: 0, scale: 0.5 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
          viewport={{ once: true }}
          tabIndex={0}
        >
          <h1 className="md:text-[5rem] text-[2rem] text-white">280+</h1>
          <p className="text-gray-500 sm:text-[1.5rem] text-[1rem] tracking-[-.21px]">
            Clients Served
          </p>
        </motion.div>

        <motion.div
          initial={{ y: "30%", opacity: 0, scale: 0.5 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
          viewport={{ once: true }}
          tabIndex={0}
        >
          <h1 className="md:text-[5rem] text-[2rem] inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#8f37ff] to-[#e964ff] ">
            96.4%
          </h1>
          <p className="text-gray-500 sm:text-[1.5rem] text-[1rem] tracking-[-.21px]">
            Satisfaction Rate
          </p>
        </motion.div>
        <motion.div
          initial={{ y: "30%", opacity: 0, scale: 0.5 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
          viewport={{ once: true }}
          tabIndex={0}
          className="xl:grid place-items-center"
        >
          <h1 className="md:text-[5rem] text-[2rem] text-white ">12+</h1>
          <p className="text-gray-500 sm:text-[1.5rem] text-[1rem] tracking-[-.21px]">
            Years of Experience
          </p>
        </motion.div>
        <motion.div
          initial={{ y: "30%", opacity: 0, scale: 0.5 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
          viewport={{ once: true }}
          tabIndex={0}
        >
          <h1 className="md:text-[5rem] text-[2rem] inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#8f37ff] to-[#e964ff]">
            600+
          </h1>
          <p className="text-gray-500 sm:text-[1.5rem] text-[1rem] tracking-[-.21px]">
            Projects Completed
          </p>
        </motion.div>
        <motion.div
          initial={{ y: "30%", opacity: 0, scale: 0.5 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
          viewport={{ once: true }}
          tabIndex={0}
        >
          <h1 className="md:text-[5rem] text-[2rem] text-white ">37</h1>
          <p className="text-gray-500 sm:text-[1.5rem] text-[1rem] tracking-[-.21px]">
            Awards and Recognitions
          </p>
        </motion.div>
        <motion.div
          initial={{ y: "30%", opacity: 0, scale: 0.5 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
          viewport={{ once: true }}
          tabIndex={0}
          className="xl:grid place-items-center"
        >
          <h1 className="md:text-[5rem] text-[2rem] inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#8f37ff] to-[#e964ff]">
            $1.2B+
          </h1>
          <p className="text-gray-500 sm:text-[1.5rem] text-[1rem] tracking-[-.21px]">
            Revenue for Clients
          </p>
        </motion.div>
      </div>
    </section>
  );
};
export default HighLights;
