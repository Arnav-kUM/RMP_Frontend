/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], 
  theme: {
    extend: {
      keyframes:{
        dropdown:{
          transform: 'translate(0, 20px)',
        opacity: '1',
        visibility: 'visible',
        }
      },
      animation:{
        dropdown:"dropdown "
      }
    },
  },
  plugins: [],
}

