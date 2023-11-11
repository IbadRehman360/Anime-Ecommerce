module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        bungee: ['Bungee', 'sans-serif'],
        cabin: ['Cabin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        montserratextra: ['Montserrat', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        sourcesans: ['Source Sans Pro', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [
    require("daisyui"),
  ],
}
