import { useState } from "react";
import { filterButtons } from "../constants";
import { nanoid } from "nanoid";

export default function Filter({ setFilter, filter }) {
  const [filterActive, setFilterActive] = useState(false);

  return (
    <div
      className="sm:max-w-[200px] w-full relative"
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
      {filterActive && (
        <ul className="choice-box font-medium absolute left-0 right-0 translate-y-[6px] flex flex-col gap-3 pl-[20px] py-4 rounded-lg shadow-std">
          {filterButtons.map((filt) => (
            <li
              key={nanoid()}
              onClick={() => setFilter(filt.filter)}
              className="cursor-pointer hover:translate-x-2 transition-all"
            >
              {filt.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
