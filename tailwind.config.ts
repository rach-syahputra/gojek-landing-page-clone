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
        primary: 'var(--primary)'
      },
      fontFamily: {
        MaisonNeueBold: ['var(--font-maison-neue-bold)'],
        MaisonNeueBook: ['var(--font-maison-neue-book)'],
        MaisonNeueDemi: ['var(--font-maison-neue-demi)'],
        MaisonNeueExtendedBold: ['var(--font-maison-neue-extended-bold)']
      }
    }
  },
  plugins: []
} satisfies Config
