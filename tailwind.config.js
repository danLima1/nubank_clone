/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#9c44dc",
        "secondary": "#fff",
        "secondary-foreground": "#000",
        "background": "#fff",
        "muted": "#bc8ae1"
      }
    },
  },
  plugins: [],
}

