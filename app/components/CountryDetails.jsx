import Borders from "./Borders";
import CountryInfo from "./CountryInfo";

export default function CountryDetails(props) {
  return (
    <div className="w-full max-w-[450px]">
      <h1 className="text-[38px] font-bold">{props.countryData.name.common}</h1>
      <CountryInfo countryData={props.countryData} />
      <div>
        {!props.countryData.borders === undefined > 0 && (
          <Borders allRes={props.allRes} countryData={props.countryData} />
        )}
      </div>
    </div>
  );
}
