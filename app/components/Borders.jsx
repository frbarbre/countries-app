import { nanoid } from "nanoid";
import Link from "next/link";

export default function Borders({ allRes, countryData }) {
  return (
    <div className="flex gap-4 flex-wrap sm:flex-nowrap items-center">
      <h2 className="min-w-[120px] text-[14px] text-semibold">Border Countries:</h2>
      <ul className="flex flex-wrap gap-3">
        {countryData.borders.map((border) => {
          const countryName = allRes.find((country) => country.cca3 === border);
          return (
            <Link key={nanoid()} href={`/${countryName.name.common}`}>
              <li className="borders w-max px-2 py-1 rounded-md shadow-std hover:scale-105 transition-all">
                {countryName.name.common}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
