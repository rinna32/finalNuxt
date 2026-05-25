export default defineNuxtConfig({
  compatibilityDate: '2026-05-04',
  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt',
    '@nuxt/image'
  ]
})