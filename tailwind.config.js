/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./resources/**/*.{js,jsx,ts,tsx,html,php}"],
    safelist: [
        "sm:col-span-2",
        "sm:row-span-2",
        "sm:col-start-1",
        "row-span-2",
        "col-span-2",
    ],
    theme: {
        fontFamily: {
            Inter: ["inter", "sans-serif"],
            Georgia: ["georgia", "serif"],
        },
        container: {
            center: true,
        },
        extend: {
            backgroundImage: {
                hero: `url("/public/webp/main-no-bg.webp")`,
            },
            colors: {
                "my-main-blue": "#0658E0",
                "my-blue-light": "#0388ED",
                "my-blue-dark": "#054DD7",
                "my-gray": "#567B99",
                "my-gray-dark": "#1C3749",
                "my-violet": "#666eb3",
                "my-blackest": "#000000",
                "my-blacker": "#150E0B",
                "my-black": "#211C1C",
                "my-deep-gray": "#3D3D3D",
                "my-gray-header": "#666667",
                "my-gray-medium": "#B7B7B7",
                "my-deep-light": "#C7C7C7",
                "my-white": "#F6F6F6",
            },
            fontSize: {
                base: ["15px", "19px"],
                "14px": ["14px", "18px"],
                "20px": ["20px", "26px"],
                "32px": [
                    "clamp(1.563rem, 0.688rem + 4.667vw, 2rem)",
                    "clamp(1.875rem, 0.5rem + 7.333vw, 2.563rem)",
                ],
                "12px": ["12px", "15px"],
                "hero-main": [
                    "clamp(4rem, 0rem + 6.25vw, 5rem)",
                    "clamp(4.625rem, 0.625rem + 6.25vw, 5.625rem)",
                ], // 64 строка 76 -  высота 84
                "hero-main-small-mobile": [
                    "clamp(2.625rem, -1.5rem + 18.333vw, 4rem)",
                    "clamp(3.438rem, 1.875rem + 7.813vw, 5rem)", // высота строки 55-80 320-640px
                ],
                "hero-legend": [
                    "clamp(1rem, 0.747rem + 0.941vw, 1.5rem)",
                    "clamp(1.25rem, 0.744rem + 1.882vw, 2.25rem)",
                ],
                "header-nav": [
                    "clamp(0.875rem, 0.375rem + 0.781vw, 1rem)",
                    "clamp(0.875rem, -0.375rem + 1.953vw, 1.188rem)",
                ], // 12 to 16, 14 to 19
                "header-order": [
                    "clamp(1.188rem, -0.063rem + 1.953vw, 1.5rem)",
                    "clamp(1.375rem, -0.125rem + 2.344vw, 1.75rem)",
                ],
                "footer-phone": [
                    "clamp(1.375rem, 0.063rem + 2.734vw, 2.25rem)",
                ],
                "call-us-header": [
                    "clamp(3.375rem, 0.875rem + 3.906vw, 4rem)",
                    "clamp(4rem, 0.75rem + 5.078vw, 4.813rem)",
                ], // FH:54-64 LH:65-77 SCREEN:1024-1280px
                "call-us-span": [
                    "clamp(0.813rem, 0.156rem + 1.367vw, 1.25rem)",
                    "clamp(1.063rem, 0.406rem + 1.367vw, 1.5rem)",
                ], // FH:13-20 LH:17-24 SCREEN:768-1280px
                "news-preview": [
                    "clamp(0.875rem, 0.764rem + 0.491vw, 1rem)",
                    "clamp(1rem, 0.779rem + 0.983vw, 1.25rem)",
                ], // FH 14-16 LH: 16-20 SCREEN: 360-767px
                "call-us-header-mobile": [
                    "clamp(2.125rem, 0.467rem + 7.368vw, 3rem)",
                    "clamp(2.5rem, 0.487rem + 8.947vw, 3.563rem)",
                ], //FH:34-48 LH:40-57 SCREEN:360-550
                "call-us-span-mobile": [
                    "clamp(1rem, 0.526rem + 2.105vw, 1.25rem)",
                    "clamp(1.188rem, 0.595rem + 2.632vw, 1.5rem)",
                ], //FH:16-20 LH:19-24 SCREEN:360-550
            },
        },
    },
    plugins: [require("tailwind-scrollbar")],
};
