/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f4f7",
          100: "#d9e6ed",
          200: "#b7ceda",
          300: "#8ab0c2",
          400: "#5d90a6",
          500: "#456882", // medium-blue
          600: "#385a70",
          700: "#2e4a5b",
          800: "#283f4d",
          900: "#253543",
          950: "#1b3c53", // dark-blue
        },
        accent: {
          50: "#f9f7f4",
          100: "#f2ede6",
          200: "#e4d8ca",
          300: "#d2c1b6", // light-beige
          400: "#bfa394",
          500: "#ad8874",
          600: "#9d7660",
          700: "#826150",
          800: "#6a5045",
          900: "#56433a",
        },
        cream: "#f9f3ef", // light-cream
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
