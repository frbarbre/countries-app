"use client";

import Borders from "../components/Borders";
import BackButton from "../components/BackButton";
import Image from "next/image";
import { usePathname } from "next/navigation";

// export async function generateStaticParams() {
//   const data = await fetch(`https://restcountries.com/v3.1/all`);
//   const result = await data.json();

//   return result.name.map((country) => ({
//     country: toString(country.common),
//   }));
// }

export default async function CountryPage() {
  const path = usePathname();

  // Getting data from the entire API
  const allData = await fetch(`https://restcountries.com/v3.1/all`);
  const allRes = await allData.json();

  // Getting the data for the specific page using params
  const data = await fetch(`https://restcountries.com/v3.1/name${path}`);
  const res = await data.json();
  const countryData = res[0];

  return (
    <div>
      <BackButton />
      {countryData && (
        <div className="flex gap-6 flex-wrap md:flex-nowrap justify-center max-w-[1200px] mx-auto md:justify-between px-6 pb-6">
          <Image
            src={countryData.flags.svg}
            alt={
              countryData.flags.alt === undefined
                ? `flag of ${countryData.name.common}`
                : countryData.flags.alt
            }
            width={500}
            height={250}
            className="aspect-flag max-w-[500px] w-full h-max object-cover"
          ></Image>
          <div className="w-full max-w-[450px]">
            <h1 className="text-[38px] font-bold">{countryData.name.common}</h1>
            <div className="flex gap-2 xs:gap-4 justify-between w-full my-4 flex-wrap xs:flex-nowrap">
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-[14px]">
                  Native Name:{" "}
                  <span className="font-light text-[14px]">
                    {
                      countryData.name.nativeName[
                        Object.keys(countryData.name.nativeName)[0]
                      ].official
                    }
                  </span>
                </p>
                <p className="font-semibold text-[14px]">
                  Population:{" "}
                  <span className="font-light text-[14px]">
                    {countryData.population.toLocaleString()}
                  </span>
                </p>
                <p className="font-semibold text-[14px]">
                  Region:{" "}
                  <span className="font-light text-[14px]">
                    {countryData.region}
                  </span>
                </p>
                <p className="font-semibold text-[14px]">
                  Sub Region:{" "}
                  <span className="font-light text-[14px]">
                    {countryData.subregion}
                  </span>
                </p>
                <p className="font-semibold text-[14px]">
                  Capital:{" "}
                  <span className="font-light text-[14px]">
                    {countryData.capital === undefined
                      ? "Unknown"
                      : countryData.name.common === "South Africa"
                      ? "Cape Town"
                      : countryData.capital}
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-[14px]">
                  Top Level Domain:{" "}
                  <span className="text-[14px] font-light">
                    {countryData.tld[0]}
                  </span>
                </p>
                {countryData.currencies === undefined ? (
                  ""
                ) : (
                  <p className="font-semibold text-[14px]">
                    Currencies:{" "}
                    <span className="font-light text-[14px]">
                      {
                        countryData.currencies[
                          Object.keys(countryData.currencies)[0]
                        ].name
                      }
                    </span>
                  </p>
                )}
                <p className="font-semibold text-[14px]">
                  Language:{" "}
                  <span className="font-light text-[14px]">
                    {
                      countryData.languages[
                        Object.keys(countryData.languages)[0]
                      ]
                    }
                  </span>
                </p>
              </div>
            </div>
            <div>
              {!countryData.borders === undefined > 0 && (
                <Borders allRes={allRes} countryData={countryData} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
