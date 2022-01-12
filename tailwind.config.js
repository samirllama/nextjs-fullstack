const colors = require('tailwindcss/colors');

module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: '#000',
            white: '#fff',
            yetiGreen: '#57844d',
            'custom-transparent': '#00000040',
            ...colors
        },
        fontFamily: {
            mono: [
                'ui-monospace',
                'SFMono-Regular',
                'Menlo, Monaco',
                'Consolas',
                'Liberation Mono',
                'Courier New',
                'monospace'
            ],
            futura: 'Futura PT W01 Bold, Futura PT W01 Book'
        },
        zIndex: {
            200: '200',
            100: '100',
            50: '50',
            40: '40',
            30: '30',
            20: '20',
            10: '10',
            9:'9',
            8:'8',
            7:'7',
            6:'6',
            5:'5',
            4:'4',
            3: '3',
            2: '2',
            1: '1'
        },
        extend: {
            keyframes: {
                wiggle: {
                    '0%, 100%': {
                        transform: 'rotate(-3deg)'
                    },
                    '50%': {
                        transform: 'rotate(3deg)'
                    },
                },
                move :{
                    from: {transform: "translateX(-400px)"},
                    to :{transform: "translateX(1350px)"}
                  }
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',   
            }
        },
    },
    variants: {

    },
    plugins: []
};
