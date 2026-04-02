/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1A1A1A', // Deep Charcoal Black
        card: '#D2C9B1',       // Soft Beige/Khaki
        'card-dark': '#3C3C34', // Darker Olive-Grey for Contact
        foreground: '#1A1A1A',  // Dark Text on Beige
        'foreground-light': '#D2C9B1', // Beige Text on Charcoal
      },
      borderRadius: {
        '4xl': '2.5rem',
        '5xl': '3.5rem',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        swiss: ['"Neue Haas Grotesk"', '"Inter"', 'sans-serif'],
      },
      animation: {
        'noise': 'noise 0.2s infinite',
      },
      keyframes: {
        noise: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -5%)' },
          '20%': { transform: 'translate(-10%, 5%)' },
          '30%': { transform: 'translate(5%, -10%)' },
          '40%': { transform: 'translate(-5%, 15%)' },
          '50%': { transform: 'translate(-10%, 5%)' },
          '60%': { transform: 'translate(15%, 0)' },
          '70%': { transform: 'translate(0, 10%)' },
          '80%': { transform: 'translate(-15%, 0)' },
          '90%': { transform: 'translate(10%, 5%)' },
        },
      },
    },
  },
  plugins: [],
}
