/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    glow: {
      colors: {
        // Defaults to all theme colors
        // ...
      },
      styles: {
        // Defaults to these values
        default: (baseColor) =>
          `0 1px 3px 0 rgba(${baseColor}, 0.4), 0 1px 2px 0 rgba(${baseColor}, 0.24)`,
        md: (baseColor) =>
          `0 4px 6px -1px rgba(${baseColor}, 0.4), 0 2px 4px -1px rgba(${baseColor}, 0.24)`,
        lg: (baseColor) =>
          `0 10px 15px -3px rgba(${baseColor}, 0.4), 0 4px 6px -2px rgba(${baseColor}, 0.20)`,
        xl: (baseColor) =>
          `0 20px 25px -5px rgba(${baseColor}, 0.4), 0 10px 10px -5px rgba(${baseColor}, 0.16)`,
        "2xl": (baseColor) => `0 25px 50px -12px rgba(${baseColor}, 1)`,
        outline: (baseColor) => `0 0 0 3px rgba(${baseColor}, 0.5)`,
        none: "none",
      },
    },
    extend: {
      fontFamily: {
        comfortaa: ["Confortaa", "sans-serif"],
      },
      colors: {
        primary: "#3E61AD", //dodger Blue
        secondary: "#E6A1C8", //pink
        tertiary: "#6FA0FC", //malibu
        quaternary: "#0657FB", //Blue ribbon
      },
      backgroundImage: {
        "hero-pattern": "url('../public/hero-bg.jpg')",
      },
    
    },
  },
  plugins: [require("tailwindcss-glow")()],
};
