"use client";

import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import Image from "next/image";
import { testimonialsData } from "@/lib/data";
import { useScroll, motion, useSpring } from "framer-motion";

register();

const TestimonalsContainer = () => {
  const swiperElRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const handlePrevClick = () => {
    swiperElRef.current.swiper.slidePrev();
  };

  const handleNextClick = () => {
    swiperElRef.current.swiper.slideNext();
  };
  const scale = useSpring(scrollYProgress);

  return (
    <motion.div
      style={{ scale }}
      transition={{ stiffness: 80 }}
      role="region"
      aria-label="Testimonials"
      className="mt-[4rem] border relative border-gray-400/40 rounded-lg w-full bg-gradient-to-r from-white/10 to-[#ffffff26] lg:py-[8rem] py-[4rem] px-4"
    >
      <button
        aria-label="Previous Testimonial"
        onClick={handlePrevClick}
        className="absolute lg:inline-block hidden z-30 top-1/2 -translate-x-1/2 left-14"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={handleNextClick}
        aria-label="Next Testimonial"
        className="absolute lg:inline-block hidden z-30 top-1/2 -translate-x-1/2 right-14 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="1"
        speed="500"
        loop="true"
        autoplay
      >
        {testimonialsData.map((testimonial, i) => {
          return (
            <swiper-slide key={i}>
              <div className="max-w-[700px] cursor-grab space-y-12 mx-auto text-center">
                <Image
                  src={testimonial.img}
                  alt="logo"
                  width={60}
                  height={60}
                  className="mx-auto"
                />
                <p className="md:text-[1.34rem] text-[1rem] leading-[144%] text-white">
                  {testimonial.paragraph}
                </p>

                <div className="">
                  <span className="text-white text-[1.2rem]">
                    {testimonial.name}
                  </span>
                  <p className="text-gray-400/55 mt-2">{testimonial.info}</p>
                </div>
              </div>
            </swiper-slide>
          );
        })}
      </swiper-container>
      <div className="flex lg:hidden  items-center justify-center gap-x-14 mt-[6rem]">
        <button
          aria-label="Previous Testimonial (Mobile)"
          onClick={handlePrevClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          aria-label="Next Testimonial (Mobile)"
          onClick={handleNextClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};
export default TestimonalsContainer;
