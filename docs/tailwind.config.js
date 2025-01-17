module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        "50vh": "50vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
