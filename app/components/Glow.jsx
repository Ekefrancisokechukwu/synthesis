const Glow = ({ className }) => {
  return (
    <div
      // This div acts purely as a decorative element

      aria-hidden="true"
      role="presentation"
      className={`bg-[#8f37ff59] size-[240px] absolute  -z-10 rounded-full blur-[100px] ${className}`}
    ></div>
  );
};
export default Glow;
