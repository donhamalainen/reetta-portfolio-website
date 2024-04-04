import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        author: ["var(--font-AuthorVariable)"],
        authorItalic: ["var(--font-AuthorVariableItalic)"],
        darker: ["var()"],
      },
      colors: {
        secondary: {
          darkText: "#395886",
          lightText: "#d5deef",
        },
        primary: {
          background: "#f0f3fa",
          secondBackground: "#d5deef",
        },
        // Voit lisätä muita värejä tässä
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
