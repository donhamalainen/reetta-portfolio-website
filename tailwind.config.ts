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
        //mono: ["var(--font-roboto-mono)"],
      },
      colors: {
        primary: {
          light: "#d1ebfe", // vaalea tila
          dark: "#083c5a", // tumma tila
        },
        // Voit lisätä muita värejä tässä
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
