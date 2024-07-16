module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      mob: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      laptopl: "1440px",
    },
    extend: {
      colors: {
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
    },
  },
  plugins: [],
};
