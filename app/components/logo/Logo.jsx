import Link from "next/link";

const Logo = () => {
  return (
    <div
      aria-label="Synthesis logo"
      className="w-[3rem] h-[3rem] grid place-items-center backdrop-blur-[50px] bg-gradient-to-b from-[#8f37ff7f] to-[#8e37ff38] transition-all duration-500 hover:bg-[#8e37ff38] rounded-full"
    >
      <Link href="#" className="w-full grid place-items-center h-full ">
        <svg
          data-name="Layer 1"
          viewBox="0 0 24 24"
          fill="white"
          height="1.4em"
          width="1.4em"
        >
          <path d="M6 6a2 2 0 012-2 1 1 0 000-2 4 4 0 00-4 4v3a2 2 0 01-2 2 1 1 0 000 2 2 2 0 012 2v3a4 4 0 004 4 1 1 0 000-2 2 2 0 01-2-2v-3a4 4 0 00-1.38-3A4 4 0 006 9zm16 5a2 2 0 01-2-2V6a4 4 0 00-4-4 1 1 0 000 2 2 2 0 012 2v3a4 4 0 001.38 3A4 4 0 0018 15v3a2 2 0 01-2 2 1 1 0 000 2 4 4 0 004-4v-3a2 2 0 012-2 1 1 0 000-2z" />
        </svg>
      </Link>
    </div>
  );
};
export default Logo;
