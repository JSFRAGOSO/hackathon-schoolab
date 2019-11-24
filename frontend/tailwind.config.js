module.exports = {
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
      body: ["Poppins", "sans-serif"]
    },
    extend: {
      colors: {
        brand: {
          600: "#2699FB"
        }
      },
      borderRadius: {
        xl: ".6rem"
      }
    }
  },
  variants: {
    boxShadow: [
      "responsive",
      "hover",
      "focus",
      "focus-within",
      "active",
      "group-hover"
    ]
  },
  plugins: []
};
