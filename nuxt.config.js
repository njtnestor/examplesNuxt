export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  // mode: 'universal'(default) or 'spa'
  // target: 'server'(default) or 'static'
  head: {
    title: 'techtalknuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  serverMiddleware: {
    '/api': '~/api'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/vue-multiselect.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  /* components: {
    dirs: [
      '~/components/nested'
    ]
  }, */

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxt/content',
    'nuxt-i18n'
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en-us.js'
      },
      {
        code: 'es',
        iso: 'es-ES',
        name: 'Español',
        file: 'es-es.js'
      }
    ],
    detectBrowserLanguage: false,
    noPrefixDefaultLocale: true,
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
    baseUrl: 'http://localhost:3000',
    seo: false
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true
  },
  proxy: {
    '/api/expandurl/': { target: 'http://expandurl.com', pathRewrite: { '^/api/expandurl/': '/api/v1/' }, changeOrigin: true }
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Nuxt tech talk',
      short_name: 'NuxtTT', // install name,
      theme_color: '#008aff',
      background_color: '#ffffff',
      lang: 'en',
      useWebmanifestExtension: false
    },
    workbox: {
      // offlineStrategy: 'NetworkFirst'(Default) or  'CacheFirst'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
