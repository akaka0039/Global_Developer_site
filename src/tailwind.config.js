import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors:{
                "primary":"#9BD5FA",
                "primary-hover":"#82CCFA",
                "secondary":"#9AEDAF",
                "secondary-hover":"#82ED9D",
                "tertiary":"#FEFC94"
            },
        },
    },

    plugins: [forms],
};
