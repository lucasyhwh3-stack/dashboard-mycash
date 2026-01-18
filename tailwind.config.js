/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'md': '768px',   // Tablet
            'lg': '1280px',  // Desktop
            'xl': '1920px',  // Wide / 4K
        },
        extend: {
            colors: {
                brand: {
                    primary: 'var(--color-brand-primary)',
                    'primary-hover': 'var(--color-brand-primary-hover)',
                },
                neutral: {
                    0: '#FFFFFF',
                    100: '#F3F4F6',
                    200: '#E5E7EB',
                    400: '#94A3B8',
                    600: '#64748B',
                    900: '#0F172A',
                    1000: '#000000',
                },
                feedback: {
                    success: '#10B981',
                    error: '#E01A4F',
                    warning: '#F59E0B',
                    info: '#0066FF',
                },
                // Backward compatibility mapping
                primary: '#DAFD01',
                success: '#10B981',
                error: '#E01A4F',
            },
            width: {
                'sidebar-expanded': 'var(--sidebar-width-expanded)',
                'sidebar-collapsed': 'var(--sidebar-width-collapsed)',
                'layout-max': 'var(--layout-max-width)',
            },
            spacing: {
                'xs': 'var(--spacing-4)',
                'sm': 'var(--spacing-8)',
                'md': 'var(--spacing-16)',
                'lg': 'var(--spacing-24)',
                'xl': 'var(--spacing-32)',
                '2xl': 'var(--spacing-48)',
                // Keep numeric values if needed but map them correctly to tokens
                'space-4': 'var(--spacing-4)',
                'space-8': 'var(--spacing-8)',
                'space-12': 'var(--spacing-12)',
                'space-16': 'var(--spacing-16)',
                'space-20': 'var(--spacing-20)',
                'space-24': 'var(--spacing-24)',
                'space-32': 'var(--spacing-32)',
                'space-40': 'var(--spacing-40)',
                'space-48': 'var(--spacing-48)',
            },
            borderRadius: {
                'full': '1000px',
                'xl': '20px',
                'lg': '16px',
                'md': '12px',
                'sm': '8px',
                'xs': '4px',
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
