/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "Arial", "sans-serif"],
        Montserrat: ["Montserrat"]
      },
    },
    screens: {
      xs: "480px", //Mobile devices
      sm: "768px", // Small tablets and larger mobile devices
      md: "1080px", // Tablets and smaller desktops
      lg: "1280px", // Standard desktops
      xl: "1536px", // Large desktops and higher resolutions
    },
    
  },
  plugins: [],
};
