// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Make sure to include all your source files
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins as a custom font family
      },
    },
  },
  plugins: [],
}
