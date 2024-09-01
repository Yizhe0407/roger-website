<!-- articles.vue -->
<template>
    <section class="flex-auto p-6 mt-4">
      <h2 class="text-4xl font-bold pb-4">作品集</h2>
  
      <div>
        <nuxt-link to="https://github.com/Yizhe0407/Yunnet_homework">
          <ProjectCard 
            title="Nuxt 3 + Express Login Template" 
            description="The front-end is built with Nuxt 3, while the back-end uses Express. Database is uses MySQL." 
            image="https://imgur.com/n8htzxv.png" 
          />
        </nuxt-link>
        <div class="border-b-2 my-4 border-[#2b3039]"></div>
      </div>
    </section>
  </template>
  