/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        scroll: "scroll 40s linear infinite",
        scrolled: "scrolled 40s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(calc(-250px * 3))" },
        },
        scrolled: {
          "0%": { transform: "translateY(calc(-250px * 3))" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
