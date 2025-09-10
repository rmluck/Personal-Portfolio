/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                mono: ["Roboto Mono", "monospace"],
            },
            colors: {
                professional: {
                    light: "#ECF0F1",
                    dark: "#2C3E50",
                    gray100: "#F0F0F0",
                    gray200: "#B0B0B0",
                    gray300: "#707070",
                    gray400: "#333333",
                },
                personal: {
                    light: "#FFF5E5",
                    dark: "#FF2A00",
                },
            },
        },
    },
    plugins: [],
};