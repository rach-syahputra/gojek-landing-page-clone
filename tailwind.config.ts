import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      },
      fontFamily: {
        MaisonNeueBold: ['--font-maison-neue-bold'],
        MaisonNeueBook: ['--font-maison-neue-book'],
        MaisonNeueDemi: ['--font-maison-neue-demi'],
        MaisonNeueExtendedBold: ['--font-maison-neue-extended-bold']
      }
    }
  },
  plugins: []
} satisfies Config
