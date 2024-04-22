"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AboutInfos = () => {
  return (
    <div className="py-[4.4rem] max-w-[1200px] border-t border-gray-500/40 mx-auto grid lg:grid-cols-3 gap-x-10 gap-y-8">
      <motion.article
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        tabIndex="0"
      >
        <figure>
          <Image src={"/img/can1.svg"} alt="svg icon" width={40} height={40} />
        </figure>
        <h1 className="text-white text-[1.5rem] mt-10 font-medium tracking-[0em] leading-[107%]">
          Cutting-Edge Expertise
        </h1>
        <p className="text-gray-500 mt-3">
          With over 10 years of industry experience, we boast a team of
          professionals who bring a wealth of knowledge and expertise to every
          project. From our skilled technicians to our customer service
          representatives, our team is committed to delivering top-notch
          solutions.
        </p>
      </motion.article>
      <motion.article
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        tabIndex="0"
      >
        <figure>
          <Image src={"/img/can2.svg"} alt="svg icon" width={40} height={40} />
        </figure>
        <h1 className="text-white text-[1.5rem] mt-10 font-medium tracking-[0em] leading-[107%]">
          Cutting-Edge Expertise
        </h1>
        <p className="text-gray-500 mt-3">
          Innovation is at the core of everything we do. We pride ourselves on
          staying at the forefront of technological advancements and constantly
          seeking out new ways to improve our services. By embracing innovation,
          we're able to provide our clients with solutions that drive success.
        </p>
      </motion.article>
      <motion.article
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        tabIndex="0"
      >
        <figure>
          <Image src={"/img/can3.svg"} alt="svg icon" width={40} height={40} />
        </figure>
        <h1 className="text-white text-[1.5rem] mt-10 font-medium tracking-[0em] leading-[107%]">
          Cutting-Edge Expertise
        </h1>
        <p className="text-gray-500 mt-3">
          Our clients are our top priority, and we go above and beyond to ensure
          their satisfaction. We strive to exceed our clients' expectations at
          every turn. With a focus on building long-term relationships and
          fostering trust, we're dedicated to providing a seamless experience
          for our clients.
        </p>
      </motion.article>
    </div>
  );
};
export default AboutInfos;
