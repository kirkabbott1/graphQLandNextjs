const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkblue: "#020818",
        lightteal: "#9bfffd",
        medteal: "#3ffefb",
        darkteal: "#15d6d2",
      },
      backgroundImage: {
        Zbackground: "url('/breaker.jpg')",
      },
      fontFamily: {
        sans: ['"EB Garamond"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
