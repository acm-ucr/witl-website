/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "8xl": "9rem",
        "9xl": "10rem",
        "10xl": "13rem",
      },
      colors: {
        witl: {
          "black-100": "#000000",
          "white-100": "#FFFFFF",
          "purple-100": "#F5E1FF",
          "purple-200": "#BA8CD0",
          "purple-300": "#2E0044",
          "purple-400": "#572B6C",
        },
      },
    },
  },
  plugins: [],
};
