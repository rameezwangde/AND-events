/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F4F0E9",
        "warm-white": "#FBF8F3",
        "deep-maroon": "#930708",
        "dark-maroon": "#7A0507",
        "wine-red": "#930708",
        "soft-beige": "#D9C5AA",
        black: "#111111",
        "muted-black": "#292525",
        "logo-red": "#930708",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
