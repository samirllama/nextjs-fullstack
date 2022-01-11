const colors = require('tailwindcss/colors');

module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        fontFamily: {
            sans: 'Arial, sans-serif'
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: '#000',
            white: '#fff',
            yetiGreen: '#57844d',
            ...colors
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
