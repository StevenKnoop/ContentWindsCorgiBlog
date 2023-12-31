export default defineNuxtConfig({
  target: 'static',
  extends: 'content-wind',
  sitemap: false,
  modules: [
    '@nuxt/image',
    '@nuxt/content',
    '@nuxtjs/robots',
    'nuxt-simple-sitemap',
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
