import { useState } from "react";
import { filterButtons } from "../constants";
import { nanoid } from "nanoid";
import { motion, AnimatePresence } from "framer-motion";

export default function Filter({ setFilter, filter }) {
  const [filterActive, setFilterActive] = useState(false);

  return (
    <div
      className="sm:max-w-[200px] w-full relative z-50"
      onClick={() => setFilterActive((prev) => !prev)}
    >
      <div className="relative cursor-pointer">
        {filter === "" ? (
          <h2 className="choice-title text-[#9CA3A7] h-[64px] flex items-center pl-[20px] rounded-lg shadow-std">
            Filter by Region
          </h2>
        ) : (
          <h2 className="choice-title font-bold h-[64px] flex items-center pl-[20px] rounded-lg shadow-std">
            {filter === "Americas" ? "America" : filter}
          </h2>
        )}
        <div
          className={`absolute right-[16px] top-[50%] translate-y-[-50%] transition-all ${
            filterActive ? "rotate-180" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="8"
            viewBox="0 0 14 8"
          >
            <path
              id="arrow"
              fill="none"
              stroke="#131416"
              strokeWidth="1.5"
              d="m1 1 6 6 6-6"
            />
          </svg>
        </div>
      </div>
      <AnimatePresence>
        {filterActive && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 6 }}
            exit={{ opacity: 0, y: -20 }}
            className="choice-box font-medium absolute left-0 right-0 flex flex-col gap-3 pl-[20px] py-4 rounded-lg shadow-std bg-white"
          >
            {filterButtons.map((filt) => (
              <li
                key={nanoid()}
                onClick={() => setFilter(filt.filter)}
                className="cursor-pointer hover:translate-x-2 transition-all"
              >
                {filt.title}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
