module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {   backgroundImage: theme => ({
               'hero-pattern': "url('https://4kwallpapers.com/images/walls/thumbs_2t/1455.jpg')",
              'footer-texture': "url('/img/bg.png')",
              }) },
  },
  variants: {
    extend: {},
  },
  plugins: [],


  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
 
  },
}
}