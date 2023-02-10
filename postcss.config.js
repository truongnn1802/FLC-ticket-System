const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
      tailwindcss('./tailwind.config.cjs'), 
      autoprefixer,
      require('postcss-import'),
      require('tailwindcss/nesting')(require('postcss-nesting')),
      require('autoprefixer'),
      require('tailwindcss'),
    ],
};