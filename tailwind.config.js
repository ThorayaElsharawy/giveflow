/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            fontFamily: {
                "roboto-regular": ["roboto-regular"],
                "roboto-bold": ["roboto-bold"],
                "roboto-medium": ["roboto-medium"],
                "roboto-light": ["roboto-light"],
            },
        },
    },
    plugins: [],
};