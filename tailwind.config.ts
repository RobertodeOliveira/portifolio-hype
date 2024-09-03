import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl': '1320px',
      },
      colors: {
        'purple': '#7D00FF',
        'pink': '#ED1CA6',
        'gray': '#A5A5A5',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
