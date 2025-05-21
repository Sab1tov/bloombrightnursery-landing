module.exports = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2B7A78",
        secondary: "#D95C3A",
        bgLight: "#F4EBD6",
        accent: "#CFE3D1",
        warm: "#AA7756",
        muted: "#D6DDE4",
      },
    },
  },
  plugins: [],
};
