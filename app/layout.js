"use client";

import "./globals.css";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import { Nunito_Sans } from "next/font/google"

const nunitoSans = Nunito_Sans({subsets: ["latin"]})

export default function RootLayout({ children }) {
  
  const [isSystemDark, setIsSystemDark] = useState(false)
  const [darkMode, setDarkMode] = useState(isSystemDark);

  useEffect(() => {
    setIsSystemDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  useEffect(() => {
    setDarkMode(isSystemDark);
  }, [isSystemDark]);


  return (
    <html lang="en">
      <head />
      <body
        className={`
        ${nunitoSans.className} 
        ${darkMode ? "bg-[#202D36] text-white dark" : "bg-white text-[#131416]"} 
        transition-all`}
      >
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
        {children}
      </body>
    </html>
  );
}
