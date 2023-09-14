/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        purple: "#7E3AF2",
        grey: "#6B7280",
        almostwhite: "#E3E5E8",
        almostblack: "#060607",
        scroll: "#F2F3F5",
        lightblack: "#36393F",
      },
    },
  },
  plugins: [],
};
