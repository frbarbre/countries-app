import { nanoid } from "nanoid";

export default function Error({ res, search, setFilter, filter, searchArray }) {
  const found = res.find((country) =>
    country.name.common.toLowerCase().includes(search)
  );

  return (
    <div>
      {found ? (
        <div>
          <div>
            Sorry we couldn't any results with the specifications: {search} in{" "}
            {filter === "Americas" ? "America" : filter}
          </div>
          <h2>Did you mean?</h2>
          {searchArray.map((country) => (
            <div key={nanoid()} onClick={()=>setFilter(country.region)}>
              <span>{country.name.common} in </span>
              {country.region === "Americas" ? "America" : country.region}
            </div>
          ))}
        </div>
      ) : (
        <div>Error: {search} does not exist</div>
      )}
    </div>
  );
}
