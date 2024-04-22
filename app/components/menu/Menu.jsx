"use client";

import { navLinks } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMenu } from "@/hooks/use-menu";

const Menu = () => {
  const { isOpen, closeMenu } = useMenu();

  return (
    <nav
      className={` ${
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } w-screen h-screen bg-[#000010] transition-all duration-300 fixed top-0 left-0 z-30 lg:hidden block`}
    >
      <motion.ul
        initial={{ y: "30%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className=" flex flex-col mt-[4rem] justify-center gap-y-11 w-full items-center  bg-gradient-radial from-[#3d1877] to-[#000010,_transparent] backdrop-blur-2xl"
      >
        {navLinks.map((link, i) => {
          return (
            <li key={i}>
              <Link
                onClick={closeMenu}
                href={link.href}
                className="font-medium capitalize text-white text-[1.1rem]"
              >
                {link.text}
              </Link>
            </li>
          );
        })}
      </motion.ul>
    </nav>
  );
};
export default Menu;
