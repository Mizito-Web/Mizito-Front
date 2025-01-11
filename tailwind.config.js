/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  theme: {
      extend: {
          colors: {
              brand: {
                  light: '#FDE68A',
                  DEFAULT: '#F59E0B',
                  dark: '#B45309',
              },
          },
      },
  },
};
