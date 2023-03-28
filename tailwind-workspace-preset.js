const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
    darkMode: ['class'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-sans)', ...fontFamily.sans],
                condensed: ['Roboto Condensed'],
            },
        },
    },
};
