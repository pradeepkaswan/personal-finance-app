import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      beige: {
        100: "#F8F4F0",
        500: "#98908B",
      },
      grey: {
        100: "#F2F2F2",
        300: "#B3B3B3",
        500: "#696868",
        900: "#201F24",
      },
      purple: {
        100: "#AFB1BA",
        400: "#826CB0",
      },
      green: "#277C78",
      yellow: "#F2CDAC",
      cyan: "#82C9D7",
      navy: "#626070",
      red: "#C94736",
      turquoise: "#597C7C",
      brown: "#93674F",
      magenta: "#934F6F",
      blue: "#3F62B2",
      navyGrey: "#97A0AC",
      armyGreen: "#7F9161",
      gold: "#CAB361",
      orange: "#BE6C49",
    },
    fontFamily: {
      sans: ["Public Sans", "sans-serif"],
    },
    fontSize: {
      "preset-1": ["2rem", { lineHeight: "120%", fontWeight: 700 }],
      "preset-2": ["1.25rem", { lineHeight: "120%", fontWeight: 700 }],
      "preset-3": ["1rem", { lineHeight: "150%", fontWeight: 700 }],
      "preset-4": ["0.875rem", { lineHeight: "150%", fontWeight: 400 }],
      "preset-4-bold": ["0.875rem", { lineHeight: "150%", fontWeight: 700 }],
      "preset-5": ["0.75rem", { lineHeight: "150%", fontWeight: 400 }],
      "preset-5-bold": ["0.75rem", { lineHeight: "150%", fontWeight: 700 }],
    },
    spacing: {
      "50": "4px",
      "100": "8px",
      "150": "12px",
      "200": "16px",
      "250": "20px",
      "300": "24px",
      "400": "32px",
      "500": "48px",
    },
  },
  plugins: [],
};
export default config;
