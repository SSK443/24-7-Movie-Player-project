/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Poppins", 'serif'],
    },
    extend: {
      keyframes: {
        fadeInLogo: {
          '0%': { opacity: '0', transform: 'translateY(-50px) rotate(-360deg)' },
          '100%': { opacity: '1', transform: 'translateY(0) rotate(0deg)' },
        },
      },
      animation: {
        fadeInLogo: 'fadeInLogo 2s ease-out forwards',
      },
    },
  },
  plugins: [],
}
