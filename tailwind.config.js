/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "dodgeroll-gold": "#f79f1A",
        "apple-green": "#046e1b",
        "dire-wolf": "#292727",
      },
    },
    fontFamily:{
      Montserrat:"Montserrat, sans-serif",
    },
    container:{
      center:true,
      padding:"2rem",
    },
  },
  plugins: [],
}

