const colors = require('tailwindcss/colors')
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        '128': '32rem',
        '256': '64rem',
        '512': '128rem',
      },
      height: {
        '128': '32rem',
        '144': '40rem',
        '192': '48rem',
        '256': '64rem',
        '512': '128rem',
      },
      minWidth: {
        '384px': '384px',
        '512px': '512px',
      },
      minHeight: {
        '128': '32rem',
        '144': '40rem',
      },
      maxHeight: {
        '128': '32rem',
        '144': '40rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"), // import tailwind forms
  ],
};
