/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        ss: '#17a2b8',  
      },
      fontFamily: {
        forum: ['Forum', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
