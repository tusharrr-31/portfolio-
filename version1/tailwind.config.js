/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT( {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Space Grotesk', 'sans-serif'],
        secondary: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
        '6xl': '4rem', // 64px
        '7xl': '5rem', // 80px
        hero: '6rem', // Custom size for hero sections (96px)
        subtitle: '1.75rem', // Custom subtitle font (28px)
      },
      colors: {
        primary: '#5840BA', //  Voilet
        subheading: "#99999", //grey-black
        secondary: '#121212', // Gray shade
        PrimaryBorder: '#1F1F1F',
      },
      animation: {
        "move-left": "move-left 30s linear infinite",
      },
      keyframes: {
        "move-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
});

