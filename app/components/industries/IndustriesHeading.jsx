import PrimaryHeading from "@/components/PrimaryHeading";
import SubHeading from "@/components/SubHeading";
import ButtonLink from "@/components/button";
import Glow from "../Glow";

const IndustriesHeading = () => {
  return (
    <div className="text-center relative space-y-5 max-w-[680px] mx-auto">
      <SubHeading>INDUSTRIES</SubHeading>
      <PrimaryHeading>
        Transformative Solutions Across the Spectrum
      </PrimaryHeading>
      <p className="text-white sm:text-[1.33rem] text-[1rem] tracking-[-.21px]  leading-[144%]">
        Our range of solutions tailored to meet the unique needs of diverse
        industries, driving transformation across the entire spectrum.
      </p>

      <ButtonLink
        href={"#"}
        text={"Contact Us"}
        lable={"Learn more about Contacts"}
        className={
          "bg-gradient-to-b from-transparent to-[#8e37ff38] hover:bg-[#8e37ff38] transition-all duration-300 rounded-full border-white/40 bg-[rgba(143, 55, 255, .5)] "
        }
      />

      <Glow className={"top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"} />
    </div>
  );
};
export default IndustriesHeading;
