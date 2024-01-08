export default defineNuxtConfig({
  target: 'static',
  extends: 'content-wind',
  modules: [
    '@nuxt/image',
    '@nuxt/content',
    '@nuxtjs/robots',
  ],
  content: {
    documentDriven: true
  },
  image: {
    format: ['webp']
  },
  publicRuntimeConfig: {
    public: {
      NUXT_PUBLIC_STUDIO_TOKENS: process.env.NUXT_PUBLIC_STUDIO_TOKENS,
      siteUrl: 'https://www.corgipuppies.co.za',
    }
  }
})
