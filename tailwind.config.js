/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        softBlue: 'hsl(231, 69%, 60%)',
        mainOrange: 'hsl(39, 95%, 54%)',
        grayishBlue: 'hsl(229, 8%, 60%)',
        veryDarkBlue: 'hsl(229, 31%, 21%)',
        darkBg: 'hsl(204, 12%, 8%)',
        blurBg: 'rgba(0,0,0,0.6)'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
          sm: '13px',
          lg: '16px',
        '3xl': '30px',
        '4xl': ['41px', {
          lineHeight: '1.5em',
        }],
      },
      backgroundImage: () => ({
        dots: "url('../images/bg-dots.svg')",
      }),
    },
    container: {
      width: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1320px',
      },
    }
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
}

