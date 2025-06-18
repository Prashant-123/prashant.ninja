/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "rgb(var(--app-gray-50) / <alpha-value>)",
          100: "rgb(var(--app-gray-100) / <alpha-value>)",
          200: "rgb(var(--app-gray-200) / <alpha-value>)",
          300: "rgb(var(--app-gray-300) / <alpha-value>)",
          400: "rgb(var(--app-gray-400) / <alpha-value>)",
          500: "rgb(var(--app-gray-500) / <alpha-value>)",
          600: "rgb(var(--app-gray-600) / <alpha-value>)",
          700: "rgb(var(--app-gray-700) / <alpha-value>)",
          800: "rgb(var(--app-gray-800) / <alpha-value>)",
          900: "rgb(var(--app-gray-900) / <alpha-value>)",
          950: "rgb(var(--app-gray-950) / <alpha-value>)",
        },
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        accent: {
          50: "#fdf4ff",
          100: "#fae8ff",
          200: "#f5d0fe",
          300: "#f0abfc",
          400: "#e879f9",
          500: "#d946ef",
          600: "#c026d3",
          700: "#a21caf",
          800: "#86198f",
          900: "#701a75",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-mesh": "linear-gradient(45deg, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "card-gradient":
          "linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
      },
      keyframes: {
        open: {
          "0%": {
            opacity: 1,
            transform: "translateX(100%)",
          },
        },
        close: {
          to: {
            opacity: 0,
            transform: "translateX(100%)",
          },
        },
        waving: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "slide-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(59, 130, 246, 0.8)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "pulse-slow": {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.5",
          },
        },
      },
      animation: {
        "drawer-open": "open 0.3s ease-in-out",
        "drawer-close": "close 0.3s ease-in-out",
        "waving-hand": "waving 2s linear 3",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in-down": "fade-in-down 0.6s ease-out forwards",
        "slide-in-left": "slide-in-left 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.6s ease-out forwards",
        "scale-in": "scale-in 0.6s ease-out forwards",
        glow: "glow 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(31, 38, 135, 0.37)",
        neon: "0 0 5px theme(colors.primary.400), 0 0 20px theme(colors.primary.400), 0 0 35px theme(colors.primary.400)",
        "glow-sm": "0 0 10px rgba(59, 130, 246, 0.5)",
        "glow-md": "0 0 20px rgba(59, 130, 246, 0.5)",
        "glow-lg": "0 0 30px rgba(59, 130, 246, 0.5)",
      },
    },
  },
  plugins: [],
};

// Ref :: https://twitter.com/steventey/status/1677339375645126659
// Ref :: https://tailwindcss.com/docs/customizing-colors#using-css-variables
