/** @type {import('tailwindcss').Config} */

import { colors } from './src/styles/colors'
import { fontFamily } from './src/styles/fonts'

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors,
      fontFamily,
    },
  },
  plugins: [require('flowbite/plugin')],
}
