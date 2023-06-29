import { nanoid } from "nanoid";
import Image from "next/image";

export default function Error({ res, search, setFilter, filter, searchArray }) {
  const found = res.find((country) =>
    country.name.common.toLowerCase().includes(search)
  );

  return (
    <div className="max-w-[500px] mx-auto p-6">
      {found ? (
        <div>
          <div className="flex flex-col items-center">
            <p className="text-[18px] font-medium">
              Sorry we couldn't any results with the specifications:{" "}
            </p>
            <h2 className="text-[28px] font-bold">
              <span className="italic">"{search}"</span> in{" "}
              {filter === "Americas" ? "America" : filter}
            </h2>
          </div>
          <h2 className="text-center p-6 italic text-[16px] font-medium">
            Did you mean?
          </h2>
          <div className="flex flex-col gap-2 items-center">
            {searchArray.map((country) => (
              <div
                key={nanoid()}
                onClick={() => setFilter(country.region)}
                className="flex gap-2 items-center justify-center cursor-pointer hover:translate-x-2 transition-all w-full"
              >
                <Image
                  src={country.flags.svg}
                  alt={
                    country.flags.alt === undefined
                      ? `flag of ${country.name.common}`
                      : country.flags.alt
                  }
                  width={500}
                  height={250}
                  className="aspect-flag max-w-[30px] w-full h-max object-cover"
                />
                <div>
                  <span className="font-bold">{country.name.common}</span> in{" "}
                  {country.region === "Americas" ? "America" : country.region}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <p className="font-bold text-[24px] text-red-600">ERROR 404:</p>
          <h2 className="text-[30px]">
            <span className="font-bold italic">"{search}"</span> does not exist.
          </h2>
        </div>
      )}
    </div>
  );
}
