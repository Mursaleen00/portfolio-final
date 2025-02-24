import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"], // Font for headings
      },
      colors: {
        "solid-black": "#1A1A1A",
        "silver-contrast": "#C0C0C0",
        "light-silver": "#D9D9D9",
      },
    },
  },
  plugins: [],
} satisfies Config;
