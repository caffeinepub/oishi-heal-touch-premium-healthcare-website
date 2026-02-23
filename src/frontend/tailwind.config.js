import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            fontFamily: {
                sans: [
                    'Inter',
                    'system-ui',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'Segoe UI',
                    'Roboto',
                    'sans-serif'
                ]
            },
            colors: {
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))'
                },
                chart: {
                    1: 'oklch(var(--chart-1))',
                    2: 'oklch(var(--chart-2))',
                    3: 'oklch(var(--chart-3))',
                    4: 'oklch(var(--chart-4))',
                    5: 'oklch(var(--chart-5))'
                },
                sidebar: {
                    DEFAULT: 'oklch(var(--sidebar))',
                    foreground: 'oklch(var(--sidebar-foreground))',
                    primary: 'oklch(var(--sidebar-primary))',
                    'primary-foreground': 'oklch(var(--sidebar-primary-foreground))',
                    accent: 'oklch(var(--sidebar-accent))',
                    'accent-foreground': 'oklch(var(--sidebar-accent-foreground))',
                    border: 'oklch(var(--sidebar-border))',
                    ring: 'oklch(var(--sidebar-ring))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                xl: '1.25rem',
                '2xl': '1.5rem',
                '3xl': '2rem'
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
                soft: '0 4px 24px rgba(0,0,0,0.06)',
                medium: '0 8px 32px rgba(0,0,0,0.08)',
                large: '0 20px 48px rgba(0,0,0,0.12)',
                'premium-sm': '0 4px 24px oklch(var(--primary) / 0.18)',
                'premium-md': '0 8px 32px oklch(var(--primary) / 0.22)',
                'premium-lg': '0 20px 48px oklch(var(--primary) / 0.28)',
                'glow-primary': '0 0 40px oklch(var(--primary) / 0.5)',
                'glow-accent': '0 0 40px oklch(var(--accent) / 0.5)'
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '26': '6.5rem',
                '30': '7.5rem'
            },
            letterSpacing: {
                tighter: '-0.03em',
                tight: '-0.02em',
                normal: '0',
                wide: '0.01em',
                wider: '0.02em',
                widest: '0.03em'
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'fade-in': {
                    from: { opacity: '0', transform: 'translateY(10px)' },
                    to: { opacity: '1', transform: 'translateY(0)' }
                },
                'fade-in-hero': {
                    from: { opacity: '0', transform: 'translateY(30px)' },
                    to: { opacity: '1', transform: 'translateY(0)' }
                },
                'slide-up': {
                    from: { opacity: '0', transform: 'translateY(40px)' },
                    to: { opacity: '1', transform: 'translateY(0)' }
                },
                'float': {
                    '0%, 100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
                    '33%': { transform: 'translate(40px, -40px) rotate(120deg) scale(1.1)' },
                    '66%': { transform: 'translate(-30px, 30px) rotate(240deg) scale(0.9)' }
                },
                'icon-bounce': {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.15)' }
                },
                'glow-pulse': {
                    '0%, 100%': { boxShadow: '0 0 20px oklch(var(--primary) / 0.3)' },
                    '50%': { boxShadow: '0 0 40px oklch(var(--primary) / 0.6)' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                'fade-in-hero': 'fade-in-hero 1s cubic-bezier(0.4, 0, 0.2, 1)',
                'slide-up': 'slide-up 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                'float': 'float 25s ease-in-out infinite',
                'icon-bounce': 'icon-bounce 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                'glow-pulse': 'glow-pulse 2.5s ease-in-out infinite'
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
