/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      'smallDevices': '320.8px',
      'phone': '425.8px',
      'tablet': '768.8px',
      'laptop': '1024.8px',
      'desktop': '1440.8px',
    },
    extend: {},
  },
  plugins: [],
};
