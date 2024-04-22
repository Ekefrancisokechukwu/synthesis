import PrimaryHeading from "@/components/PrimaryHeading";
import SubHeading from "@/components/SubHeading";
import SingleServices from "./SingleServices";
import { servicesData } from "@/lib/data";
import Glow from "../Glow";

const Services = () => {
  return (
    <section
      id="services"
      className="max-w-[1240px] scroll-m-[6rem] mx-auto py-[5rem] px-5"
    >
      <div className="max-w-[600px] relative space-y-8">
        <SubHeading>SERVICES</SubHeading>
        <PrimaryHeading>
          Elevate Your Business with Our Solutions
        </PrimaryHeading>
        <Glow className={"top-0"} />
      </div>
      <div className="mt-[4.3rem] grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {servicesData.map((service, i) => {
          return <SingleServices key={i} service={service} />;
        })}
      </div>
    </section>
  );
};
export default Services;
