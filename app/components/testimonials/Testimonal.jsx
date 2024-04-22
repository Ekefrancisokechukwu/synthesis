import PrimaryHeading from "@/components/PrimaryHeading";
import SubHeading from "@/components/SubHeading";
import Glow from "../Glow";
import TestimonalsContainer from "./TestimonalsContainer";

const Testimonal = () => {
  return (
    <section
      id="testimonials"
      className="max-w-[1200px] scroll-m-[5rem] mx-auto px-5 py-[5rem]"
    >
      <div className="relative text-center space-y-7 max-w-[650px] mx-auto">
        <SubHeading>TESTIMONIALS</SubHeading>
        <PrimaryHeading>Client Voices</PrimaryHeading>
        <p className="text-white sm:text-[1.33rem] text-[1rem] tracking-[-.21px]  leading-[144%]">
          Explore firsthand testimonials highlighting the value and impact of
          our solutions on client success stories.
        </p>
        <Glow
          className={"top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"}
        />
      </div>
      <TestimonalsContainer />
    </section>
  );
};
export default Testimonal;
