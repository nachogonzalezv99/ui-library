/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fill, minmax(14rem, 1fr))",
      },
      animation: {
        "slide-down": "slideDown 0.3s cubic-bezier(0.87, 0, 0.13, 1) ",
        "slide-up": "slideUp 0.3s  cubic-bezier(0.87, 0, 0.13, 1)",
      },
      keyframes: {
        slideDown: {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        slideUp: {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-radix")()],
};
