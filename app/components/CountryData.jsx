import BackButton from "./BackButton";
import Borders from "./Borders";
import Image from "next/image";

export default function CountryData(props) {
    return (
      <div>
        <BackButton />
        {props.countryData && (
          <div className="flex gap-6 flex-wrap md:flex-nowrap justify-center max-w-[1050px] mx-auto md:justify-between px-6 pb-6">
            <Image
              src={props.countryData.flags.svg}
              alt={
                props.countryData.flags.alt === undefined
                  ? `flag of ${props.countryData.name.common}`
                  : props.countryData.flags.alt
              }
              width={500}
              height={250}
              className="aspect-flag max-w-[500px] w-full h-max object-cover"
            ></Image>
            <div className="w-full max-w-[450px]">
              <h1 className="text-[38px] font-bold">
                {props.countryData.name.common}
              </h1>
              <div className="flex gap-2 xs:gap-4 justify-between w-full my-4 flex-wrap xs:flex-nowrap">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-[14px]">
                    Native Name:{" "}
                    <span className="font-light text-[14px]">
                      {
                        props.countryData.name.nativeName[
                          Object.keys(props.countryData.name.nativeName)[0]
                        ].official
                      }
                    </span>
                  </p>
                  <p className="font-semibold text-[14px]">
                    Population:{" "}
                    <span className="font-light text-[14px]">
                      {props.countryData.population.toLocaleString()}
                    </span>
                  </p>
                  <p className="font-semibold text-[14px]">
                    Region:{" "}
                    <span className="font-light text-[14px]">
                      {props.countryData.region}
                    </span>
                  </p>
                  <p className="font-semibold text-[14px]">
                    Sub Region:{" "}
                    <span className="font-light text-[14px]">
                      {props.countryData.subregion}
                    </span>
                  </p>
                  <p className="font-semibold text-[14px]">
                    Capital:{" "}
                    <span className="font-light text-[14px]">
                      {props.countryData.capital === undefined
                        ? "Unknown"
                        : props.countryData.name.common === "South Africa"
                        ? "Cape Town"
                        : props.countryData.capital}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-[14px]">
                    Top Level Domain:{" "}
                    <span className="text-[14px] font-light">
                      {props.countryData.tld[0]}
                    </span>
                  </p>
                  {props.countryData.currencies === undefined ? (
                    ""
                  ) : (
                    <p className="font-semibold text-[14px]">
                      Currencies:{" "}
                      <span className="font-light text-[14px]">
                        {
                          props.countryData.currencies[
                            Object.keys(props.countryData.currencies)[0]
                          ].name
                        }
                      </span>
                    </p>
                  )}
                  <p className="font-semibold text-[14px]">
                    Language:{" "}
                    <span className="font-light text-[14px]">
                      {
                        props.countryData.languages[
                          Object.keys(props.countryData.languages)[0]
                        ]
                      }
                    </span>
                  </p>
                </div>
              </div>
              <div>
                {!props.countryData.borders === undefined > 0 && (
                  <Borders
                    allRes={props.allRes}
                    countryData={props.countryData}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }