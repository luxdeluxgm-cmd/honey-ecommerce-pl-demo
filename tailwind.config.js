/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tailwind przeszukuje te pliki i generuje CSS tylko dla klas, których naprawdę używasz.
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        laka: '#EEF0DE',
        wosk: '#FAF8EC',
        miod: { DEFAULT: '#E4A52A', pale: '#F4D98C' },
        kora: { DEFAULT: '#3E2B1B', soft: '#6B5440' },
        mech: { DEFAULT: '#56693B', deep: '#2F3D26' }
      },
      fontFamily: {
        serif: ['Alegreya', 'Georgia', 'serif'],
        sans: ['"Nunito Sans"', 'system-ui', 'sans-serif']
      }
    }
  }
};
