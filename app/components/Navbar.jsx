import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar({ setDarkMode, darkMode }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{delay: 0.1}}
      className="navbar flex justify-between items-center gap-4 p-8 shadow-std"
    >
      <Link href={"/"} className="font-bold text-[16px] sm:text-[24px]">
        Where in the world?
      </Link>
      <div
        onClick={() => setDarkMode((prev) => !prev)}
        className="flex gap-2 items-center cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
        >
          <path
            fill={darkMode ? "#FFF" : "none"}
            stroke={darkMode ? "#FFF" : "#131416"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
          />
        </svg>
        <div className="font-bold">Dark Mode</div>
      </div>
    </motion.header>
  );
}
