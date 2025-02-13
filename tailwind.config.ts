import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'telegram-bg': 'var(--telegram-bg-color)',
                'telegram-black': 'var(--telegram-text-color)',
                'telegram-hint': 'var(--telegram-hint-color)',
                'telegram-link': 'var(--telegram-link-color)',
                'telegram-primary': 'var(--telegram-button-color)',
                'telegram-primary-text': 'var(--telegram-button-text-color)',
                'telegram-secondary-white': 'var(--telegram-secondary-bg-color)',
            },
        },
    },
    plugins: [],
}
export default config
