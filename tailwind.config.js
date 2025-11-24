/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#0F0F0F',
        onyx: '#161616',
        obsidian: '#1F1F1F',
        cream: '#F5F0E8',
        parchment: '#E5E5E5',
        gold: '#D4AF37',
        sage: '#8AA48A',
        champagne: '#F0E5D0',
      },
      fontFamily: {
        display: ['Playfair Display', 'Cinzel', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Cinzel', 'serif'],
      },
      boxShadow: {
        soft: '0 10px 40px rgba(0, 0, 0, 0.35)',
        glow: '0 0 35px rgba(212, 175, 55, 0.45)',
      },
      backgroundImage: {
        'grid-lux':
          'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-lux': '120px 120px',
      },
    },
  },
  plugins: [],
};

