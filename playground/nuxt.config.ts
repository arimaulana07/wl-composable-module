export default defineNuxtConfig({
  modules: ['wl-api-collections-module', '../src/module', '@nuxtjs/tailwindcss'],
  runtimeConfig: {
    baseApiUrl: '',
    trailingApiUrl: '',
    grantType: '',
    clientId: '',
    clientSecret: '',
    public: {
      clientId: process.env.NUXT_CLIENT_ID,
      clientSecret: process.env.NUXT_CLIENT_SECRET,
      grantType: process.env.NUXT_GRANT_TYPE,
      appUrl: process.env.NUXT_APP_URL
    }
  },
  build: {
    transpile: ['@vuepic/vue-datepicker']
  },
  devtools: { enabled: true },
})
