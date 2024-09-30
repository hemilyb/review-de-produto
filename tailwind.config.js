/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontVariationSettings: {
        'fill-1': "'FILL' 1",
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.fill-1': {
          'font-variation-settings': "'FILL' 1",
        }
      });
    },
  ],
}