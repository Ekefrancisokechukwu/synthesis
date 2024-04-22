import ButtonLink from "@/components/button";
import Logo from "../logo/Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="w-[90vw] lg:flex hidden -translate-x-1/2 z-50 h-[5rem] backdrop-blur  justify-between items-center px-7 fixed top-5 rounded-full border border-gray-500/55 left-1/2 bg-gradient-to-b from-transparent to-gray-500/40">
      <Logo />
      <Nav />
      <ButtonLink
        lable={"contact us button "}
        className={
          "text-[1rem] bg-gradient-to-b from-transparent to-[#8e37ff38] hover:bg-[#8e37ff38] transition-all duration-300 rounded-full border-white/40 bg-[rgba(143, 55, 255, .5)]"
        }
        href={"#contact"}
        text={"Contact Us"}
      />
    </header>
  );
};
export default Header;
