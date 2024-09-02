<!-- articles.vue -->
<template>
  <section class="flex-auto p-6 mt-4">
    <h2 class="text-4xl font-bold pb-4">作品集</h2>

    <div>
      <nuxt-link to="https://github.com/Yizhe0407/Yunnet_homework" target="_blank" rel="noopener noreferrer">
        <ProjectCard title="Nuxt 3 + Express Login Template"
          description="The front-end is built with Nuxt 3, while the back-end uses Express. Database is uses MySQL."
          image="https://imgur.com/n8htzxv.png" />
      </nuxt-link>

      <div class="border-b-2 my-4 border-[#2b3039]"></div>

      <nuxt-link to="https://megatire.net/" target="_blank" rel="noopener noreferrer">
        <ProjectCard title="汽車修護廠網頁"
          description="本次專案的最大挑戰在於購買合適的網域名稱、配置 DNS 記錄，以及將網站新增至 Google Search Console 以進行 SEO 優化。"
          image="https://imgur.com/xiAVhha.png" />
      </nuxt-link>
    </div>
  </section>
</template>