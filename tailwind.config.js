/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        headerAnimation: {
          '100%': {
            background: 'gray', 
            backdropFilter: 'blur(5px)',
            fontSize: '18px',
            color: 'black'
          }
        },
        imgReveal: {
          '0%': {opacity: 0},
          '100%': {opacity: 1}
        }
      },
      animation: {
        'header-animation': 'headerAnimation linear both',
        'img-reveal': 'imgReveal linear both'
      },
    } 
  },
  plugins: [],
}