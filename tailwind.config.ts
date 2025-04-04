import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#2563eb",
        "primary-foreground": {
          200: "#2563e0",
        },
        turquoise: {
          200: "#9fffff",
        },
        pearl: {
          950: "#001B2D",
        },
        "gradient-start": "#00F0FF",
        "gradient-end": "#2C82BC",
      },
    },
  },
  plugins: [],
};
export default config;
