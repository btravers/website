module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: false, // or "media" or "class"
    theme: {
        extend: {
            colors: {
                "color-1-200": "#E1E1EB",
                "color-1-400": "#676B9C",
                "color-1-800": "#2B2D42",
                "color-1-900": "#252739",

                "color-2-500": "#FB4D6A",
                "color-2-600": "#FB294C",
                "color-2-700": "#FA062E",
                "color-2-800": "#D90429",
                "color-2-900": "#BC0423",
                "color-2-1000": "#A1031E",
                "color-2-1100": "#860319",
                "color-2-1200": "#6B0214",
            },
            screens: {
                "print": {
                    "raw": "print",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
