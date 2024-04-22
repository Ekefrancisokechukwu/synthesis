const SubHeading = ({ children }) => {
  return (
    <div
      tabIndex="0"
      className="inline-block border px-3 py-2 border-white/40 rounded-3xl"
    >
      <p className="inline-block text-transparent bg-clip-text text-sm bg-gradient-to-r from-[#e964ff] to-[#8f37ff] ">
        {children}
      </p>
    </div>
  );
};
export default SubHeading;
