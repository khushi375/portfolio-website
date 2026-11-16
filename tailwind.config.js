/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#08090D',
        panel: '#101119',
        card: '#141621',
        violet: '#8B5CF6',
        cyan: '#22D3EE',
      },
      boxShadow: {
        glow: '0 0 30px rgba(139, 92, 246, 0.28)',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

