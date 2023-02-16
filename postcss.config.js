const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
      require('postcss-nested'),
      require('postcss-import'),
      require('tailwindcss/nesting')(require('postcss-nesting')),
      tailwindcss('./tailwind.config.cjs'), 
      autoprefixer,
    ],
};