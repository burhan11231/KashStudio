import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/features/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        aurora: "#22d3ee",
        clay: "#f8fafc",
        storm: "#334155",
        ember: "#f97316"
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans]
      }
    }
  },
  plugins: []
};

export default config;
