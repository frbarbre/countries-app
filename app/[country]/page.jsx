

import CountryData from "../components/CountryData";

export default async function CountryPage({params}) {

const { country } = params

  // Getting data from the entire API
  const allData = await fetch(`https://restcountries.com/v3.1/all`);
  const allRes = await allData.json();

  // Getting the data for the specific page using params
  const data = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  const res = await data.json();
  const countryData = res[0];

  return (
    <div>
      <CountryData allRes={allRes} countryData={countryData} />
    </div>
  );
}
