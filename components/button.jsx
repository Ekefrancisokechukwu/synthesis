import Link from "next/link";

const ButtonLink = ({ href, text, lable, className }) => {
  return (
    <Link
      href={href}
      aria-label={lable}
      className={`text-white font-semibold border inline-block sm:w-auto w-full rounded-full border-white/40  px-7 py-3.5 transition-all duration-300 ${className}`}
    >
      {text}
    </Link>
  );
};
export default ButtonLink;
