"use client";

import CountryData from "../components/CountryData";
import { usePathname } from "next/navigation";

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
      <CountryData allRes={allRes} countryData={countryData} />
    </div>
  );
}
