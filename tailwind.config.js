/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'sign-in-bgImage' : "url('../Recidish_Images/sign-in-bgImage.svg')",
      }
    },
  },
  plugins: [],
}

