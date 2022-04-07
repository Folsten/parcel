const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    container: false,
  },
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      'xl': { 'max': '1279px' },
      'lg': { 'max': '1023px' },
      'md': { 'max': '767px' },
      'sm': { 'max': '639px' },
      'xs': { 'max': '399px' },
    },
    borderColor: {
      secondary: '#F3F4F7',
      secondaryLight: '#F7F8FB',
      secondaryDark: '#ECEDF0',
      secondarySuperDark: '#DDDEE1',
      secondaryUltraDark: '#ACACAF',
      coloredPrimary: '#0066FF',
      coloredPrimaryDark: '#0052eb',
      coloredSecondary: '#FFD401'
    },
    colors: {
      primary: '#0066FF',
      primaryLight: '',
      primaryDark: '#0052eb',
      secondary: '#FFD401',
      secondaryLight: '#F8F9FC',
      secondaryDark: '',
      bgSecondaryLight: '#F7F8FB',
      third: '#57B793',
      link: '#0077FF',
      text: '#646464',
      textLight: '#828282',
      textDark: '#464646',
      text05: "rgba(0,0,0,0.5)",
      text07: "rgba(0,0,0,0.7)",
      darkAction: '#B4B4B4',
      // textAction: '',
      black: 'black',
      white: "white",
      whiteDarker: '#a6a4a0',
      // whiteDarkest: '',
      semigrey: '#BEBEBE',
      grey: 'grey',
      success: '#41a153',
      error: '#ff4e50',
    },
    backgroundColor: {
      // primary: '',
      // primaryLight: '',
      // primaryDark: '',
      secondary: '#F3F4F7',
      secondaryLight: '#F7F8FB',
      secondaryDark: '#ECEDF0',
      secondarySuperDark: '#DDDEE1',
      coloredPrimary: '#0066FF',
      // coloredPrimaryLight: '',
      coloredPrimaryDark: '#0052eb',
      coloredSecondary: '#FFD401',
      // coloredSecondaryLight: '',
      // coloredSecondaryDark: '',
      darkAction: "#242424",
      success: '#41a153',
      error: '#ff4e50',
      // whiteDark: '',
      white: 'white',
      black: 'black',
      discord: '#7289da',
      discordDark: '#697eca',
      skype: '#00aff0',
      skypeDark: '#009bd3',
      // hr: '',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    // EXTEND
    extend: {
      // brightness: {
      //   85: '.85',
      // },
      // animation: {
      //   goBack: 'goBack 1s infinite ease-in-out alternate',
      // },
      // keyframes: {
      //   goBack: {
      //     'from': { transform: 'translateX(0px)' },
      //     'to': { transform: 'translateX(-3px)' }
      //   }
      // },
      // flex: {
      //   '1.5': '1.5 1.5 0%',
      //   '2': '2 2 0%',
      //   '2.5': '2.5 2.5 0%',
      //   '3': '3 3 0%',
      // },
      // maxWidth: {
      //   'ultima': '1920px'
      // },
      // maxHeight: {
      //   'almost': '94vh'
      // },
      // letterSpacing: {
      //   'widest2xl': '0.2rem',
      //   'widest3xl': '0.3rem',
      // },
      // lineHeight: {
      //   'h1': '3rem'
      // },
      // fontSize: {
      //   'sm-base': '0.940rem',
      //   '1.5xl': '1.37rem',
      //   'h1': '2rem',
      //   'sectionTitle': '2rem',
      // },
      // borderRadius: {
      //   'main': '3px',
      // },
      // width: {
      //   '4/7': '55%',
      // },
    },
  },
  variants: {
    // extend: {
    //   translate: ['group-hover']
    // },
  },
  plugins: [],
}
