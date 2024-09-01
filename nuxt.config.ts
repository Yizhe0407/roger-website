export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  image: {
    dir: 'public/images'
  },
  devtools: { enabled: true },

  // 配置插件
  plugins: [{ src: '~/plugins/fontawesome.js', mode: 'client' }],
})
