import { nanoid } from "nanoid";
import Link from "next/link";

export default function Borders({ allRes, countryData }) {
    return (
      <ul>
        {countryData.borders.map((border) => {
          const countryName = allRes.find((country) => country.cca3 === border);
          return (
            <Link key={nanoid()} href={`/${countryName.name.common}`}>
              <li className="borders">{countryName.name.common}</li>
            </Link>
          );
        })}
      </ul>
    );
  }