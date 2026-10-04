import forms from '@tailwindcss/forms';

export default {
  ...{
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          'primary-container': '#CEFD10',
          primary: '#65a30d',
          'surface-lime': '#CEFD10',
          'surface-lime-light': '#E4FF6B',
          'surface-violet': '#8B5CF6',
          'surface-violet-dark': '#6D28D9',
          'secondary-container': '#8B5CF6',
          secondary: '#7C3AED',
          'canvas-cream': '#F5F8F2',
          'canvas-cream-subtle': '#E9EFE3',
          'surface-coral-dark': '#EC4899',
          'surface-cyan': '#06B6D4',
          'stroke-obsidian': '#0B0F19',
          'pure-white': '#FFFFFF',
          'on-surface': '#0B0F19',
          'on-surface-variant': '#374151',
          'surface-yellow-dark': '#A3E635',
        },
        borderRadius: {
          DEFAULT: '0.125rem',
          lg: '0.25rem',
          xl: '0.5rem',
          full: '0.75rem',
        },
        spacing: {
          'space-lg': '1.5rem',
          'space-xl': '2.5rem',
          'space-md': '1rem',
          margin: '2rem',
          'margin-mobile': '1rem',
          'space-2xl': '4rem',
          'space-sm': '0.5rem',
          'space-xs': '0.25rem',
          'gutter-mobile': '1rem',
          gutter: '1.5rem',
        },
        fontFamily: {
          'body-lg': ['Space Grotesk'],
          'label-badge': ['Space Grotesk'],
          'body-md': ['Space Grotesk'],
          'body-sm': ['Space Grotesk'],
          'headline-lg': ['Syne'],
          'headline-lg-mobile': ['Syne'],
          'display-hero': ['Syne'],
          'display-hero-mobile': ['Syne'],
          'label-code': ['Space Mono'],
          'headline-md-mobile': ['Syne'],
          'headline-sm': ['Syne'],
          'headline-md': ['Syne'],
        },
        fontSize: {
          'body-lg': [
            '18px',
            {
              lineHeight: '28px',
              fontWeight: '500',
            },
          ],
          'label-badge': [
            '13px',
            {
              lineHeight: '16px',
              letterSpacing: '0.01em',
              fontWeight: '700',
            },
          ],
          'body-md': [
            '16px',
            {
              lineHeight: '24px',
              fontWeight: '400',
            },
          ],
          'body-sm': [
            '14px',
            {
              lineHeight: '20px',
              fontWeight: '400',
            },
          ],
          'headline-lg': [
            '56px',
            {
              lineHeight: '64px',
              letterSpacing: '-0.03em',
              fontWeight: '800',
            },
          ],
          'headline-lg-mobile': [
            '32px',
            {
              lineHeight: '38px',
              letterSpacing: '-0.02em',
              fontWeight: '800',
            },
          ],
          'display-hero': [
            '84px',
            {
              lineHeight: '92px',
              letterSpacing: '-0.04em',
              fontWeight: '800',
            },
          ],
          'display-hero-mobile': [
            '44px',
            {
              lineHeight: '48px',
              letterSpacing: '-0.03em',
              fontWeight: '800',
            },
          ],
          'label-code': [
            '13px',
            {
              lineHeight: '18px',
              letterSpacing: '0.02em',
              fontWeight: '700',
            },
          ],
          'headline-md-mobile': [
            '26px',
            {
              lineHeight: '32px',
              letterSpacing: '-0.01em',
              fontWeight: '700',
            },
          ],
          'headline-sm': [
            '24px',
            {
              lineHeight: '30px',
              letterSpacing: '-0.01em',
              fontWeight: '700',
            },
          ],
          'headline-md': [
            '36px',
            {
              lineHeight: '44px',
              letterSpacing: '-0.02em',
              fontWeight: '700',
            },
          ],
        },
      },
    },
    content: ['./index.html', './src/**/*.{js,jsx}'],
  },
  plugins: [forms],
};
