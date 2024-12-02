/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '568px',
        md: '770px',
        lg: '991px',
        xl: '1300px',
        '2xl': '1500px',
        '3xl': '1700px', 
      },
      container: {
        center: true,
      },
      colors: {
        primary: "#1C1E53"
      }
    },
  },
  plugins: [],
}