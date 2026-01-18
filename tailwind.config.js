/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'mobile': { 'max': '640px' },
            'tablet': { 'min': '641px', 'max': '1023px' },
            'desktop': { 'min': '1024px' },
            // Standard Tailwind breakpoints for convenience
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0066FF',
                    dark: '#0052CC',
                },
                success: '#10B981',
                error: '#EF4444',
                lime: {
                    400: '#D7FF3B',
                },
                gray: {
                    50: '#F8F9FA',
                    100: '#F3F4F6',
                    200: '#E5E7EB',
                    600: '#6B7280',
                    900: '#1A1A1A',
                },
            },
            width: {
                'sidebar-expanded': '300px',
                'sidebar-collapsed': '80px',
            },
            spacing: {
                'xs': '8px',
                'sm': '12px',
                'md': '16px',
                'lg': '24px',
                'xl': '32px',
                '2xl': '48px',
            },
            borderRadius: {
                'card': '20px',
                'button': '12px',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
