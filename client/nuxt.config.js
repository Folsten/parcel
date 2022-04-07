export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'parcel',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: './scripts/modernizr-custom.js',
        body: true
      },
      {
        src: 'https://kit.fontawesome.com/06e40faa2f.js',
        sameSite: 'none',
        crossorigin: "anonymous",
        defer: "",
      },
    ]
  },

  image: {
    domains: ['http://localhost:1337'],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/all.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://composition-api.nuxtjs.org/getting-started/setup
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://image.nuxtjs.org/getting-started/installation/
    '@nuxt/image',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL
  },

  // https://nuxtjs.org/docs/configuration-glossary/configuration-dev
  dev: process.env.NODE_ENV !== 'production',

  // https://nuxtjs.org/docs/directory-structure/nuxt-config/#runtimeconfig
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
    apiURL: process.env.API_URL
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
