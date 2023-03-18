/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

const customPlugin = plugin(({ matchUtilities, addComponents, theme }) => {
  addComponents({
    '.scrollbar': {
      overflowY: 'auto',
      scrollbarColor: `${theme('colors.zinc.400')} ${theme('colors.zinc')}`,
      scrollbarWidth: 'thin',
      '&::-webkit-scrollbar-track': {
        background: theme('colors.zinc.200'),
        borderRadius: theme('spacing.2'),
      },
      '&::-webkit-scrollbar': {
        width: theme('spacing.2'),
        height: theme('spacing.2'),
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: theme('spacing.2'),
        backgroundColor: theme('colors.zinc.400'),
        width: theme('spacing.2'),
        height: theme('spacing.2'),
      },
    },
  });
  matchUtilities({
    'scrollbar-track-mt': (value) => ({
      '&::-webkit-scrollbar-track': {
        marginTop: value,
      },
    }),
  });
});
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [customPlugin],
};
