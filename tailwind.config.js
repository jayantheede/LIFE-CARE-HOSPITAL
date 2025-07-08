/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        'primary': {
          DEFAULT: '#0084c7',
          'dark': '#006094',
        },
        'secondary': '#ff6b6b',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'in': 'in 0.5s ease-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        in: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },
    },
  },
  plugins: [],
}