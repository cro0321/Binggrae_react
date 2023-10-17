/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts}"],
  theme: {
   screens : {
    'sm': {'max': '768'},
    'md': {'min': '769', 'max': '1024'},
    'lg': {'min': '1025'}
   },
   extend: {},
 },
 plugins: [],
} 
