import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#0071b7",
        "primary-fg": "#ffffff",
        "primary-bg-hover": "#29a6dd",
        "secondary-fg": "#374151",
      },
    },
  },
  plugins: [],
};
export default config;
