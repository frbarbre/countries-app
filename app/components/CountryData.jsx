"use client";

import BackButton from "./BackButton";
import CountryDetails from "./CountryDetails";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CountryData(props) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <BackButton />
      </motion.div>
      {props.countryData && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{delay: 0.2}}
          className="flex gap-6 flex-wrap md:flex-nowrap justify-center max-w-[1050px] mx-auto md:justify-between px-6 pb-6"
        >
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
          <CountryDetails
            countryData={props.countryData}
            allRes={props.allRes}
          />
        </motion.div>
      )}
    </div>
  );
}
