export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'calcestruzzo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/avatar.png' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    
    ['@nuxtjs/google-fonts', {
      families: {
        Roboto: {
          wght: [100, 400, 600, 800],
          ital: [100, 400, 600, 800]
        },
        'Open+Sans': {
          wght: [100, 400, 600, 800],
          ital: [100, 400, 600, 800]
        },
        Lato: {
          wght: [100, 400, 600, 800],
          ital: [100, 400, 600, 800]
        },
        Raleway: {
          wght: [100, 400, 600, 800],
          ital: [100, 400, 600, 800]
        },
      }
    }]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
