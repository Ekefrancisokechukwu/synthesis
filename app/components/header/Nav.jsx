"use client";

import { useNavigation } from "@/hooks/use-navigation";
import { navLinks } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";

const Nav = () => {
  const { activeSection, handleActiveSection } = useNavigation();

  return (
    <nav>
      <ul className="flex items-center gap-x-9">
        {navLinks.map((link, i) => {
          const activeLink = activeSection === link.text;

          return (
            <motion.li
              layout
              key={i}
              className="relative px-3 py-1.5 rounded-lg "
            >
              <Link
                href={link.href}
                onClick={() => handleActiveSection(link.text)}
                className={` ${
                  activeLink ? "text-white" : "text-gray-300/50"
                }  hover:text-white transition-all capitalize duration-300 inline-block text-[.9rem]`}
              >
                {link.text}
              </Link>
              {activeLink && (
                <motion.span
                  layoutId="nav"
                  className="inset-0  absolute border border-gray-50/20 bg-gray-50/10 inline-block  rounded-md"
                />
              )}
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Nav;
