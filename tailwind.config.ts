import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        lora: ["var(--font-lora)"],
        inter: ["var(--font-inter)"],
        heading: ["var(--font-heading, var(--font-roboto))"],
        body: ["var(--font-body, var(--font-roboto))"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary, #00234C)",
        secondary: "var(--secondary, #E5E7EB)",
      },
      borderRadius: {
        DEFAULT: "var(--border-radius)",
        md: "var(--border-radius)",
        lg: "var(--border-radius)",
        xl: "var(--border-radius)",
        "2xl": "var(--border-radius)",
      },
      boxShadow: {
        DEFAULT: "var(--box-shadow)",
        md: "var(--box-shadow)",
        lg: "var(--box-shadow)",
        xl: "var(--box-shadow)",
        "2xl": "var(--box-shadow)",
      },
      fontSize: {
        "49": ["49px", "120%"], // line-height = 1.2 * 49px = 58.8px
        "39": ["39px", "120%"],
        "31": ["31px", "120%"],
        "25": ["25px", "120%"],
        "20": ["20px", "160%"], // line-height = 32px
        "16": ["16px", "160%"],
        "13": ["13px", "160%"],
        "10": ["10px", "160%"],
      },
      fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        bold: "700",
        black: "900",
      },
    },
  },
  plugins: [],
} satisfies Config;
