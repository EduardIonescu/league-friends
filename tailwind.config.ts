import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: { light: "0px 4px 6px rgba(0, 0, 0, 0.08)" },
      borderColor: { light: "rgb(171, 171, 171)" },
    },
  },
  plugins: [],
};
export default config;
