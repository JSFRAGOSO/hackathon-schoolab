module.exports = {
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
      body: ["Poppins", "sans-serif"]
    },
    customForms: theme => ({
      default: {
        select: {
          iconColor: theme("colors.brand.600")
        }
      }
    }),
    extend: {
      colors: {
        brand: {
          200: "#CCE8FF",
          400: "#BCE0FD",
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
  plugins: [require("@tailwindcss/custom-forms")]
};
