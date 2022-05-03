module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#B257E6',
        }
      },
      keyframes: {
        visible: {
          '0%': {
            // transform: 'translateY(2rem)',
            opacity: 0,
            width: 0,
            height: 0
          },
          '100%': {
            // transform: 'translateY(0)',
            opacity: 1,
            width: '336px',
            height: '264px'
          },
        }
      }
    },
  },
  plugins: [],
}
