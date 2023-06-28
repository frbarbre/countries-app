import Borders from "../components/Borders";
import BackButton from "../components/BackButton";
import Image from "next/image";

export default async function CountryPage({ params }) {
  // Getting data from the entire API
  const allData = await fetch(`https://restcountries.com/v3.1/all`);
  const allRes = await allData.json();

  // Getting the data for the specific page using params
  const data = await fetch(
    `https://restcountries.com/v3.1/name/${params.country}`
  );
  const res = await data.json();
  const countryData = res[0];

  return (
    <div>
      <BackButton />
      {countryData && (
        <div>
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
          {!countryData.borders === undefined > 0 && (
            <Borders allRes={allRes} countryData={countryData} />
          )}
        </div>
      )}
    </div>
  );
}
