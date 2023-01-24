/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        primary: "var(--border-radius-primary)",
        secondary: "var(--border-radius-secondary)",
      },
      fontFamily: {
        // Add your custom fonts and enjoy.
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        inter: ["'Inter'", "sans-serif"],
        rubik: ["'Rubik'", "sans-serif"],
      },
      colors: {
        pv_primary: "var(--color-primary-main)",
        pv_primary_light: "var(--color-primary-light)",
        pv_bg: "var(--color-bg)",
        pv_dark: "var(--color-primary-dark)",
        error: "var(--color-error)",
        error_light: "var(--color-error-light)",
        warn: "var(--color-warn)",
        warn_light: "var( --color-warn-light)",
        label: "var(--color-label)",
        text: "var(--color-text)",
        input: "var(--color-input)",
        border: "var(--color-border)",
        shadow: "var(--shadow-primary)",
        // footer_bg:"#111111",

         //My color scheme
         "primary-green": "#638D33",
         "sec-green": "#89C149",
         "brown-default": "#AD905F",
         "brown-light": "#E8DBC7",
         "nude":"#E5DAC8",
         "greyText": "#707973",
         "greyText-light": "#8C9199",
 
         "carousel-one": "#E5E8C7",
         "carousel-two": "#E3DFF5",
         "carousel-three": "#C7D8E8",
         "carousel-four": "#E8DBC7",
      },
      boxShadow: {
        DEFAULT: "8px 20px 30px rgba(26, 142, 240, 0.05)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
