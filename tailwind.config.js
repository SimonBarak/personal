module.exports = {
  purge: ["./_includes/*.html", "./_layouts/*.html", "./index.markdown"],
  theme: {
    fontFamily: {
      body: ["Inter", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
