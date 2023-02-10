/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {},
    container: {
      center: true
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
