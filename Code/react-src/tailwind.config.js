const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    colors: {
      primary: "#42a5f5",
      secondary: "#e3f2fd",
      main: "#90caf9",
      ...colors,
    },
    extend: {
      width: {
        128: "32rem",
        144: "40rem",
        192: "48rem",
        256: "64rem",
        512: "128rem",
      },
      height: {
        128: "32rem",
        144: "40rem",
        192: "48rem",
        256: "64rem",
        512: "128rem",
      },
      minWidth: {
        "384px": "384px",
        "512px": "512px",
      },
      minHeight: {
        32: "8rem",
        40: "10rem",
        48: "12rem",
        56: "14rem",
        64: "16rem",
        128: "32rem",
        144: "40rem",
      },
      maxHeight: {
        32: "8rem",
        64: "16rem",
        128: "32rem",
        144: "40rem",
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
