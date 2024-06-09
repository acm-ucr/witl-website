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
      color: {
        witl: {
          "pink-100": "#F8DFDF",
          "purple-100": "#572B6C",
          "purple-200": "#D0BCE0",
          "yellow-100": "#FFF6EB",
        },
      },
    },
  },
  plugins: [],
};
