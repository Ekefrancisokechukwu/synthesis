import Image from "next/image";
import Glow from "../Glow";

const IndustriesInfo = () => {
  return (
    <div className="mt-[5rem] xl:flex items-center gap-x-7 justify-between">
      <div className="space-y-12 flex-1">
        <article
          tabIndex={"0"}
          className="border-b pb-5 border-gray-500/30 text-gray-400/50  hover:text-white transition-all duration-400"
        >
          <h1 className="sm:text-[1.5rem] text-[1.2rem]  tracking-[0em] leading-[108%] ">
            Healthcare
          </h1>

          <p className="mt-3  text-[1rem] tracking-[-.16px] leading-[144%]">
            Streamlining processes, enhancing patient care, and improving
            outcomes technology and insights.
          </p>
        </article>

        <article
          tabIndex={"0"}
          className="border-b pb-5 border-gray-500/30 text-gray-400/50  hover:text-white transition-all duration-400"
        >
          <h1 className="sm:text-[1.5rem] text-[1.2rem]  tracking-[0em] leading-[108%] ">
            Finance
          </h1>

          <p className="mt-3  text-[1rem] tracking-[-.16px] leading-[144%]">
            Optimizing operations, managing risk, and driving growth in a
            rapidly evolving financial landscape.
          </p>
        </article>

        <article
          tabIndex={"0"}
          className="border-b pb-5 border-gray-500/30 text-gray-400/50  hover:text-white transition-all duration-400"
        >
          <h1 className="sm:text-[1.5rem] text-[1.2rem]  tracking-[0em] leading-[108%] ">
            Manufacturing
          </h1>

          <p className="mt-3  text-[1rem] tracking-[-.16px] leading-[144%]">
            Optimizing production processes and enhancing supply chain
            management for productivity.
          </p>
        </article>
        <article
          tabIndex={"0"}
          className="border-b pb-5 border-gray-500/30 text-gray-400/50  hover:text-white transition-all duration-400"
        >
          <h1 className="sm:text-[1.5rem] text-[1.2rem]  tracking-[0em] leading-[108%] ">
            Retail
          </h1>

          <p className="mt-3  text-[1rem] tracking-[-.16px] leading-[144%]">
            Optimizing inventory management, and driving sales through
            data-driven strategies.
          </p>
        </article>
      </div>

      <div className="flex-auto xl:grid hidden place-items-center">
        <div className="relative w-[30rem] h-[30rem] animate-spin-slow ">
          <Image src={"/img/star.webp"} alt="img" fill sizes="100vw" />
          <Glow
            className={"top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}
          />
        </div>
      </div>
    </div>
  );
};
export default IndustriesInfo;
