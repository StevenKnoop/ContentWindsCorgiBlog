export default defineNuxtConfig({
  extends: 'content-wind',
  modules: [
    '@nuxt/image',
    '@nuxt/content',
  ],
  image: {
    format: ['webp']
  }
})
