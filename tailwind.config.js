const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/modules/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta SansVariable', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        brand: {
          blue: '#007AFF',
          'light-blue': '#E7F2FF',
          'text-black': '#05122E',
          'text-grey': '#5E6C8B',
          bg: '#FFF',
          'bg-light': '#F5F7FB'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
}
