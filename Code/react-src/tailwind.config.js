const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    colors: {
      primary: "#ca8a04",
      secondary: "#fef08a",
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
