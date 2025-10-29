/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
      }
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /^(bg|text|border|from|to|via)-(purple|cyan|green|amber|orange|pink|blue|emerald)-(500|600)/,
    },
    {
      pattern: /^hover:/,
    },
    {
      pattern: /^group-hover:/,
    }
  ]
};
