/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blackcolor: '#000', // Define custom color here
        orangeprimary: '#f16622',
        blueprimary: '#063d8f',
        bluesecondary:'#1359c3',
        orangesecondary:'#f166221c',
        grey:"#474040",
        lightgrey:"#4740401a",
        textgreen:'#369F00'
      },
      container: {
        center: true,
      },
      screens: {
        'md': '767px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      boxShadow:{
        btnshadow: 'inset 0px 0px 0px 2px #ff6400',
        custom : '0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)'
      }
    },
  },
  plugins: [],
};
