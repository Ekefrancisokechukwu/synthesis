"use client";

import { useMenu } from "@/hooks/use-menu";

const MenuToggleBtn = () => {
  const { handleToggle, isOpen } = useMenu();

  return (
    <button
      onClick={handleToggle}
      className="w-[3rem] border border-gray-100/25 lg:hidden grid fixed top-[1.2rem] left-[2rem] z-50 backdrop-blur-3xl  place-items-center h-[3rem] rounded-full bg-gradient-to-b from-transparent to-gray-600/30"
    >
      {isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      )}
    </button>
  );
};
export default MenuToggleBtn;
