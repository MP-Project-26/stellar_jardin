import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
        "./src/**/*.{js,jsx,ts,tsx}",
        "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
        "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Saira Condensed", ...defaultTheme.fontFamily.sans],
                roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    darkMode: "class",
    daisyui: {
        themes: ["cupcake"], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
        base: false, // applies background color and foreground color for root element by default
    },

    plugins: [forms, require("daisyui")],
});
