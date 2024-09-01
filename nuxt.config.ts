export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  devtools: { enabled: true },
  image: {
    domains: ['imgur']
  },

  // 配置插件
  plugins: [{ src: '~/plugins/fontawesome.js', mode: 'client' }],

  // 添加 app 配置
  app: {
    head: {
      meta: [
        { name: 'referrer', content: 'no-referrer' }
      ]
    }
  }
})
