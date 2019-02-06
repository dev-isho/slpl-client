const pkg = require('./package')


module.exports = {
  mode: 'universal',

  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#fff' },

  css: [
    '~/assets/css/tailwind.css'
  ],

  plugins: ['~plugins/apolloClient'],

  modules: [
  ],

  build: {
    vendor: ['isomorphic-fetch', 'apollo-client', 'graphql-tag'],
    extend(config, ctx) {

    }
  }
}
