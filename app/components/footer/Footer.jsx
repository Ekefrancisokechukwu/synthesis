"use client";

import { navLinks } from "@/lib/data";
import Logo from "../logo/Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-10  px-5  max-w-[1200px] mx-auto">
      <div className="py-12 border-y border-gray-400/35">
        <div className="grid place-items-center">
          <Logo />
        </div>

        <ul className="flex items-center mt-8  gap-y-5 sm:flex-row flex-col  gap-x-10 justify-center">
          {navLinks.map((link, i) => {
            return (
              <li key={i}>
                <Link
                  href={link.href}
                  className="text-gray-400/45 hover:text-white transition-all duration-300 text-[1.1rem] capitalize"
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-[2.5rem] flex items-center justify-center gap-x-8">
          <button>
            <svg
              viewBox="0 0 1024 1024"
              fill="#918e8e99"
              height="1.5em"
              width="1.5em"
            >
              <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
            </svg>
          </button>
          <button>
            <svg fill="none" viewBox="0 0 24 24" height="1.5em" width="1.5em">
              <path
                fill="#918e8e99"
                fillRule="evenodd"
                d="M8 3a2 2 0 012 2v3h6a2 2 0 110 4h-6v2a3 3 0 003 3h3a2 2 0 110 4h-3a7 7 0 01-7-7V5a2 2 0 012-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button>
            <svg
              viewBox="0 0 500 1000"
              fill="#918e8e99"
              height="1.5em"
              width="1.5em"
            >
              <path d="M500 206H358c-9.333 0-17.667 5-25 15-7.333 10-11 22.333-11 37v102h178v148H322v442H152V508H0V360h152v-86c0-62.667 19.667-115.667 59-159s88.333-65 147-65h142v156" />
            </svg>
          </button>
        </div>
      </div>

      <p className="text-center text-gray-500/70 py-6 text-sm">
        © 2024, SYNTHETIX
      </p>
    </footer>
  );
};
export default Footer;
