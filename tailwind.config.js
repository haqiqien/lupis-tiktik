/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Nunito', 'system-ui', 'sans-serif'],
      },
      colors: {
        leaf: {
          50: '#f0f7ee',
          100: '#dcefd8',
          200: '#b9dfb1',
          300: '#8ec884',
          400: '#63ac56',
          500: '#45913b',
          600: '#34732d',
          700: '#2a5c24',
          800: '#234a1e',
          900: '#1c3d18',
        },
        palm: {
          50: '#fdf6ee',
          100: '#f8e8d0',
          200: '#f0cfa0',
          300: '#e5b06a',
          400: '#d9903e',
          500: '#c4742a',
          600: '#a85d22',
          700: '#88461d',
          800: '#6e381c',
          900: '#5c2f19',
        },
        cream: {
          50: '#fffdf7',
          100: '#fef9ec',
          200: '#fdf0d0',
          300: '#fbe4ad',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
