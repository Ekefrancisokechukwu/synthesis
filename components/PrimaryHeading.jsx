import { manRope } from "./fonts";

const PrimaryHeading = ({ children }) => {
  return (
    <div>
      <h1
        className={`text-white sm:text-[4rem] text-[2rem] tracking-[-1.12px] leading-[108%] ${manRope.className}`}
      >
        {children}
      </h1>
    </div>
  );
};
export default PrimaryHeading;
