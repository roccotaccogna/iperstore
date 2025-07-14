/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html", 
        "./src/**/*.{js,ts,jsx,tsx}", 
        "*.{js,ts,jsx,tsx,mdx}"
    ],
  theme: {
    extend: {
      colors: {
        // Colori personalizzati per Iper Store
        green: {
          700: "#16A34A", // Verde principale
          800: "#047857", // Verde più scuro per hover
        },
        black: {
          DEFAULT: "#000000", // Nero per testo e icone
          light: "#333333", // Nero più chiaro per dettagli
        },
        white: "#FFFFFF", // Sfondo principale
        gray: {
          100: "#F3F4F6", // Grigio chiaro per sfondi secondari
          200: "#E5E7EB", // Grigio per hover
          600: "#4B5563", // Grigio per testo secondario
        },
      },
    },
  },
  plugins: [],
}