import Countries from "./components/Countries";

export default async function Home() {
  const data = await fetch(`https://restcountries.com/v3.1/all`);
  const res = await data.json();

  return (
    <main>
      <Countries res={res} />
    </main>
  );
}
