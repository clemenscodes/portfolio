import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
    content: [],
    plugins: [require('tailwindcss-animate')],
    darkMode: ['class'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-sans)', ...fontFamily.sans],
                condensed: ['Roboto Condensed'],
            },
            keyframes: {
                wave: {
                    '0%': { transform: 'rotate(0deg)' },
                    '10%': { transform: 'rotate(-10deg)' },
                    '20%': { transform: 'rotate(12deg)' },
                    '30%': { transform: 'rotate(-10deg)' },
                    '40%': { transform: 'rotate(9deg)' },
                    '50%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(0deg)' },
                },
            },
            animation: {
                wave: 'wave 1.8s ease-in-out infinite',
            },
        },
    },
} satisfies Config;
