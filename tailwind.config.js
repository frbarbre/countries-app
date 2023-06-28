/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(15rem, 1fr))",
      },
      aspectRatio: {
        flag: "16/10",
      },
      height: {
        max: "max-content",
      },
      width: {
        max: "max-content",
      },
      boxShadow: {
        std: "0px 4px 10px rgba(0,0,0,0.24)",
      },
    },
    screens: {
      sm: "480px",
      md: "885px",
    },
  },
  plugins: [],
};
