/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mob: "480px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1440px",
      laptopl: "1536px",
    },
    extend: {
      colors: {
        "dark-bg": "#121212",
        "skeleton-bg": "#eee",
        "dark-skeleton-bg": "#313131",
        accent: "#0088a9",
        "accent-100": "#1a94b2",
        "accent-200": "#33a0ba",
        "accent-300": "#4dacc3",
        "accent-400": "#66b8cb",
        "accent-500": "#80c4d4",
        "accent-600": "#99cfdd",
        "accent-700": "#b3dbe5",
        "accent-800": "#cce7ee",
        "accent-900": "#e6f3f6",
      },
      boxShadow: {
        accent: "0 0 0.5rem rgba(0, 136, 169, 0.8) ",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-skeleton":
          "linear-gradient(-45deg, #eee 40%, #fafafa 50%, #eee 60%)",
        "gradient-dark-skeleton":
          "linear-gradient(-45deg, #313131 40%, #555555 50%, #313131 60%",
      },
    },
  },
  plugins: [],
};
