/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#00D2FF",
        "custom-pink": "#EC008C",
        "custom-purple": "#9733EE",
      },
      backgroundImage: {
        "gradient-to-r":
          "linear-gradient(to right, #00D2FF 0%, #EC008C 76%, #9733EE 100%)",
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        scroll: "scroll 40s linear infinite",
        scrolled: "scrolled 40s linear infinite",
        horiz: "horiz 40s linear infinite",
        horizontal: "horizontal 40s linear infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        scroll: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(calc(-250px * 3))" },
        },
        scrolled: {
          "0%": { transform: "translateY(calc(-250px * 3))" },
          "100%": { transform: "translateY(0)" },
        },
        horiz: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-100px * 3))" },
        },
        horizontal: {
          "0%": { transform: "translateX(calc(-100px * 3))" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
