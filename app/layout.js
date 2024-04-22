import { Inter } from "next/font/google";
import "./globals.css";
import { manRope } from "@/components/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Synthetix",
  description: "Championing AI for Data Processing Excellence",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scroll-smooth ease-in-out transition-all duration-300 "
    >
      <body className={`${manRope.className} bg-[#000010] `}>
        <div className="max-w-[1400px] mx-auto ">{children}</div>
      </body>
    </html>
  );
}
