module.exports = {
  style: {
    postcss: {
      plugins: [
        require("tailwindcss")("./tailwind.config.js"),
        require("flex-gap-polyfill"),
        require("autoprefixer"),
      ],
    },
  },
};
