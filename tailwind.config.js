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
    'sm': {'max': '768px'},
    'md': {'min': '769px', 'max': '1024px'},
    'lg': {'min': '1025px'}
   },
   extend: {},
 },
 plugins: [],
} 
