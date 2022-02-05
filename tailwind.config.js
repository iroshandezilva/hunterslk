const _ = require("lodash");
const theme = require('./theme.json');
const tailpress = require("@jeffreyvr/tailwindcss-tailpress");

module.exports = {
    mode: 'jit',
    content: [
        './*/*.php',
        './**/*.php',
        './resources/css/*.css',
        './resources/js/*.js',
        './safelist.txt'
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '0rem'
            },
        },
        extend: {
            colors: tailpress.colorMapper(tailpress.theme('settings.color.palette', theme),),
            colors: {
                'red-ribbon': {  DEFAULT: '#EF164C',  '50': '#FBC2D0',  '100': '#F9AFC1',  '200': '#F789A4',  '300': '#F46287',  '400': '#F23C69',  '500': '#EF164C',  '600': '#C00D3A',  '700': '#8B0A2A',  '800': '#57061A',  '900': '#22020A'},
            }
        },
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': tailpress.theme('settings.layout.wideSize', theme)
        }
    },
    plugins: [
        tailpress.tailwind
    ]
};
