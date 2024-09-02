<!-- index.vue -->
<template>
  <section class="flex-auto py-8 md:py-16 px-2">
    <h2 class="text-5xl font-bold mb-2">廖邑哲</h2>
    <h3 class="text-3xl font-bold py-2">Website Engineer and Entrepreneur</h3>
    <p class="text-lg pt-4 pb-24">
      目前就讀於雲林科技大學資訊工程學系。對於網站開發有興趣，正在學習前端技術與後端技術。
    </p>


    <div class="pb-12">
      <h3 class="text-3xl font-bold pb-4">最新文章</h3>
      <nuxt-link to="/Germany-travel">
        <ProjectCard title="國教署薦派優異學生赴海外專業研習：德國之旅" description="2022年，榮獲全國工科技藝競賽-電腦修護職種第二名，並受國教署邀請前往德國參訪及研習。"
          image="/20230605_171050.jpg" />
      </nuxt-link>
      <!-- <div class="border-b-2 my-4 border-[#2b3039]"></div> -->
    </div>

    <div>
      <h3 class="text-3xl font-bold pb-4">最新專案</h3>
      <nuxt-link to="https://github.com/Yizhe0407/Yunnet_homework">
        <ProjectCard title="Nuxt 3 + Express Login Template"
          description="The front-end is built with Nuxt 3, while the back-end uses Express. Database is uses MySQL."
          image="https://imgur.com/n8htzxv.png" />
      </nuxt-link>
      <!-- <div class="border-b-2 my-4 border-[#2b3039]"></div> -->
    </div>
  </section>
</template>
