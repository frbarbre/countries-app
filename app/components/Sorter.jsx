"use client";

import { useState } from "react";

export default function Sorter(props) {
  const [sorterActive, setSorterActive] = useState(false);

  return (
    <div
      className="sm:max-w-[290px] w-full relative"
      onClick={() => setSorterActive((prev) => !prev)}
    >
      <div className="relative cursor-pointer">
        <h2
          className={`choice-title h-[64px] flex items-center pl-[20px] rounded-lg shadow-std ${
            props.sortText === "Sort by..." ? "text-[#9CA3A7]" : "font-bold"
          }`}
        >
          {props.sortText}
        </h2>
        <div
          className={`absolute right-[16px] top-[50%] translate-y-[-50%] transition-all ${
            sorterActive ? "rotate-180" : ""
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
      {sorterActive && (
        <ul className="choice-box font-medium absolute left-0 right-0 translate-y-[6px] flex flex-col gap-3 pl-[20px] py-4 rounded-lg shadow-std">
          <li
            className="cursor-pointer hover:translate-x-2 transition-all"
            onClick={props.popHigh}
          >
            Population (Highest - Lowest)
          </li>
          <li
            className="cursor-pointer hover:translate-x-2 transition-all"
            onClick={props.popLow}
          >
            Population (Lowest - Highest)
          </li>
          <li
            className="cursor-pointer hover:translate-x-2 transition-all"
            onClick={props.alphaFirst}
          >
            Alphabetic (A - Å)
          </li>
          <li
            className="cursor-pointer hover:translate-x-2 transition-all"
            onClick={props.alphaLast}
          >
            Alphabetic (Å - A)
          </li>
        </ul>
      )}
    </div>
  );
}
