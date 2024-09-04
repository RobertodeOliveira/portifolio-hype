import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'tight': '1.225'
      },
      screens: {
        'xl': '1320px',
      },
      colors: {
        'purple': '#7D00FF',
        'pink': '#ED1CA6',
        'gray': '#A5A5A5',
        'gray-100': '#DFE3EB',
        'gray-500': '#A5A5A5',
        'translucentPurple': '#684FFF1A',
      },
      backgroundImage: {
        'banner-section': '/image/Shapes.svg',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
