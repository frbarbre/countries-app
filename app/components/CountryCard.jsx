import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CountryCard({
  name,
  population,
  region,
  image,
  alt,
  capital,
}) {
  return (
    <motion.div initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}}>
      <Link
        href={`/${name}`}
        className="flex flex-col items-center shadow-std rounded-lg"
      >
        <Image
          src={image}
          alt={alt === undefined ? `flag of ${name}` : alt}
          width={500}
          height={250}
          className="aspect-flag object-cover rounded-t-xl"
        ></Image>
        <div className="pl-10 mr-8 py-6 flex flex-col w-full overflow-hidden">
          <h2 className="text-[18px] font-bold break-keep w-max pb-3">
            {name}
          </h2>
          <p>
            <span className="font-bold">Population: </span>
            {population.toLocaleString()}
          </p>
          <p>
            <span className="font-bold">Region: </span>
            {region === "Americas" ? "America" : region}
          </p>
          <p className="w-max break-keep">
            <span className="font-bold">Capital: </span>
            {capital === undefined
              ? "Unknown"
              : name === "South Africa"
              ? "Cape Town"
              : capital}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
