import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "10px",
          lg: "70px",
        },
      }, animation: {
                "beam": "beam 3s linear infinite",
                "shimmer": "shimmer 2s linear infinite",
            },
            keyframes: {
                beam: {
                    "0%": { transform: "translateY(10%) translateX(10%) rotate(0deg)" },
                    "100%": { transform: "translateY(-10%) translateX(-10%) rotate(360deg)" },
                },
                shimmer: {
                    from: { backgroundPosition: "0 0" },
                    to: { backgroundPosition: "-200% 0" },
                },
            },
      colors: {
        primary: {
          '50': '#edf0ff',
          '100': '#dee4ff',
          '200': '#c3cdff',
          '300': '#9fabff',
          '400': '#797fff',
          '500': '#5d59fb',
          '600': '#4e3bf0',
          '700': '#432ed4',
          '800': '#3628ab',
          '900': '#2b2478',
          '950': '#1e184e',
        }
      }
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  
  addBase({
    ":root": newVars,
  });
}

export default config;