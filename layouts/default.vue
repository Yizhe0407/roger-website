<template>
  <div class="flex h-full w-full bg-[#1d232a]">
    <!-- 桌面端侧边栏 -->
    <nav class="hidden lg:flex flex-col items-center w-72 bg-[#191e24] p-4 fixed h-full top-0 z-10 justify-between">
      <!-- 包含个人信息和菜单的顶部部分 -->
      <div class="flex flex-col w-full">
        <ProfilePicture />
        <ul class="flex flex-col gap-8 p-4">
          <li v-for="(item, index) in menuItems" :key="index" class="flex justify-center">
            <NuxtLink :to="item.path"
              class="inline-block rounded-lg p-2 w-32 text-white font-bold text-lg text-center hover:bg-[#353b42]"
              @click="closeDrawer">
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <!-- 底部的社交图标部分 -->
      <SocialIcons />
    </nav>

    <!-- 内容区域（移动端隐藏） -->
    <div class="hidden lg:flex flex-1 ml-64 justify-center items-center">
      <div class="w-full max-w-screen-lg p-4">
        <slot />
      </div>
    </div>

    <!-- 移动端抽屉 -->
    <div class="lg:hidden drawer">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <!-- 移动端导航栏 -->
        <nav class="w-full bg-[#191e24] p-4 flex justify-between items-center fixed top-0 z-20">
          <label for="my-drawer" class="btn btn-square btn-ghost">
            <font-awesome-icon :icon="['fas', 'bars']" size="xl" />
          </label>
          <NuxtLink to="/"
            class="text-white font-semibold text-lg rounded-lg hover:bg-[#384046] px-4 py-2 mx-auto absolute left-1/2 transform -translate-x-1/2">
            Roger Web
          </NuxtLink>
        </nav>

        <!-- 内容区域（桌面端隐藏） -->
        <div class="block lg:hidden flex-1 mt-16 justify-center items-center">
          <div class="w-full max-w-screen-lg p-4">
            <slot />
          </div>
        </div>
      </div>
      <div class="drawer-side fixed top-0 h-full z-20">
        <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>

        <ul class="flex flex-col gap-8 p-4 bg-[#191e24] w-64 h-full">
          <!-- 侧边栏内容 -->
          <ProfilePicture />
          <li v-for="(item, index) in menuItems" :key="index" class="flex justify-center">
            <NuxtLink :to="item.path" @click="closeDrawer"
              class="inline-block rounded-lg p-2 w-32 text-white font-bold text-lg text-center hover:bg-[#353b42]">
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <!-- 返回顶部按钮 -->
    <div class="hidden lg:block fixed">
      <ChevronUp />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const menuItems = ref([
  { name: "首頁", path: "/" },
  { name: "專案", path: "/projects" },
  { name: "文章", path: "/articles" },
]);

const closeDrawer = () => {
  document.getElementById("my-drawer").checked = false;
};
</script>
