import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#11100E",
        ink: "#F4EFE7",
        accent: "#E87A2E",
        accent2: "#CF641E",
        "menu-current": "#D43A2F",
        "profile-accent": "#D43A2F",
        muted: "#B8AA96",
        line: "#2A2520",
        surface: "#1A1713",
        "surface-elev": "#221D18"
      },
      fontFamily: {
        heading: ["Palatino Linotype", "Book Antiqua", "Palatino", "serif"],
        body: ["Segoe UI", "Trebuchet MS", "Arial", "sans-serif"]
      },
      boxShadow: {
        card: "0 22px 44px -30px rgba(0, 0, 0, 0.75)"
      }
    }
  },
  plugins: []
};

export default config;
