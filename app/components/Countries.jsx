"use client";

import CountryCard from "./CountryCard";
import Search from "./Search";
import Filter from "./Filter";
import Sorter from "./Sorter";
import Error from "./Error";
import { useState } from "react";

export default function Countries({ res }) {
  const [searchValue, setSearchValue] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const [sortValue, setSortValue] = useState("");
  const [sortText, setSortText] = useState("Sort by...");

  const searchedArray = res.filter((country) =>
    country.name.common.toLowerCase().includes(search)
  );

  const results = searchedArray.find(
    (country) => country.region === filter || filter === ""
  );

  function handleSubmit(e) {
    e.preventDefault();
    setSearch(searchValue.toLowerCase());
  }

  if (sortValue === "populationHighest") {
    res.sort(function (a, b) {
      if (a.population > b.population) {
        return -1;
      }
      if (a.population < b.population) {
        return 1;
      }
      return 0;
    });
  } else if (sortValue === "populationLowest") {
    res.sort(function (a, b) {
      if (a.population < b.population) {
        return -1;
      }
      if (a.population > b.population) {
        return 1;
      }
      return 0;
    });
  } else if (sortValue === "alphaLast") {
    res.sort(function (a, b) {
      if (a.name.common > b.name.common) {
        return -1;
      }
      if (a.name.common < b.name.common) {
        return 1;
      }
      return 0;
    });
  } else if (sortValue === "alphaFirst") {
    res.sort(function (a, b) {
      if (a.name.common < b.name.common) {
        return -1;
      }
      if (a.name.common > b.name.common) {
        return 1;
      }
      return 0;
    });
  }

  function popHigh() {
    setSortValue("populationHighest");
    setSortText("Population (Highest - Lowest)");
  }

  function popLow() {
    setSortValue("populationLowest");
    setSortText("Population (Lowest - Highest)");
  }

  function alphaLast() {
    setSortValue("alphaLast");
    setSortText("Alphabetic (Å - A)");
  }

  function alphaFirst() {
    setSortValue("alphaFirst");
    setSortText("Alphabetic (A - Å)");
  }

  return (
    <div>
      <div className="flex justify-between mt-12 m-6 gap-6 flex-wrap md:flex-nowrap">
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleSubmit={handleSubmit}
        />
        <div className="flex gap-4 w-full flex-wrap sm:flex-nowrap md:justify-end">
          <Filter filter={filter} setFilter={setFilter} />
          <Sorter
            sortText={sortText}
            alphaFirst={alphaFirst}
            alphaLast={alphaLast}
            popLow={popLow}
            popHigh={popHigh}
          />
        </div>
      </div>
      {results ? (
        <div className="grid grid-cols-fluid gap-12 p-6 max-w-[1400px] mx-auto">
          {res.map((country) => {
            const searchString = country.name.common.toLowerCase();
            const searchCheck = searchString.includes(search);

            const filterString = country.region;
            const filterCheck = filterString.includes(filter);

            return (
              <div
                className={`${
                  searchCheck && filterCheck ? "" : "hidden"
                } country-card rounded-xl max-w-[500px] hover:scale-105 transition-all`}
                key={country.name.common}
              >
                <CountryCard
                  name={country.name.common}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  image={country.flags.svg}
                  alt={country.flags.alt}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <Error res={res} search={search} setFilter={setFilter} filter={filter} searchArray={searchedArray} />
      )}
    </div>
  );
}
