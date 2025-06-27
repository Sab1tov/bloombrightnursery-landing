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
        primary: "#A7D7C5",
        secondary: "#D95C3A",
        bgLight: "#F4EBD6",
        accent: "#E3F6ED",
        warm: "#AA7756",
        muted: "#D6DDE4",
      },
    },
  },
  plugins: [],
};
