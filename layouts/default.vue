<template>
    <div class="flex h-full w-full bg-[#1d232a]">
      <!-- Sidebar for Desktop -->
      <nav
        class="hidden lg:flex flex-col items-center w-64 bg-[#191e24] p-4 fixed h-full top-0 z-10 justify-between"
      >
        <!-- Top part with Profile and Menu -->
        <div class="flex flex-col w-full">
          <div class="text-center mt-8">
            <img
              src="/profile.jpg"
              alt="Profile"
              loading="lazy"
              class="w-36 rounded-full mb-4 mx-auto"
            />
          </div>
          <ul class="flex flex-col gap-4 text-center">
            <li v-for="(item, index) in menuItems" :key="index" class="w-full">
              <NuxtLink
                :to="item.path"
                class="btn btn-ghost w-24 text-white"
                @click="closeDrawer"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <!-- Bottom part with social icons -->
        <div class="social-icons w-full pb-2 flex justify-center">
          <a
            href="https://github.com/Yizhe0407"
            target="_blank"
            class="mx-3"
            aria-label="Github"
            title="Github"
          >
            <font-awesome-icon :icon="['fab', 'github']" size="xl" />
          </a>
          <a
            href="https://www.instagram.com/roger_0407"
            target="_blank"
            class="mx-3"
            aria-label="Instagram"
            title="Instagram"
          >
            <font-awesome-icon :icon="['fab', 'instagram']" size="xl" />
          </a>
  
          <a
            href="https://www.linkedin.com/in/yizhe-liao/"
            target="_blank"
            class="mx-3"
            aria-label="Linkedin"
            title="Linkedin"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" size="xl" />
          </a>
        </div>
      </nav>
  
      <!-- Content Area (hidden on mobile) -->
      <div class="hidden lg:flex flex-1 ml-64 justify-center items-center">
        <div class="w-full max-w-screen-lg p-4">
          <slot />
        </div>
      </div>
  
      <!-- Mobile Drawer -->
      <div class="lg:hidden drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          <!-- Mobile Navbar -->
          <nav
            class="w-full bg-[#191e24] p-4 flex justify-between items-center fixed top-0 z-20"
          >
            <label for="my-drawer" class="btn btn-square btn-ghost">
              <font-awesome-icon :icon="['fas', 'bars']" size="xl" />
            </label>
            <NuxtLink
              to="/"
              class="text-white font-semibold text-lg rounded-lg hover:bg-[#384046] px-4 py-2 mx-auto absolute left-1/2 transform -translate-x-1/2"
            >
              Roger Web
            </NuxtLink>
          </nav>
  
          <!-- Content Area (hidden on desktop) -->
          <div class="block lg:hidden flex-1 mt-16 justify-center items-center">
            <div class="w-full max-w-screen-lg p-4">
              <slot />
            </div>
          </div>
        </div>
        <div class="drawer-side fixed top-0 h-full z-20">
          <label
            for="my-drawer"
            aria-label="close sidebar"
            class="drawer-overlay"
          ></label>
  
          <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <!-- Sidebar content here -->
            <div class="text-center mt-8">
              <img
                src="/profile.jpg"
                alt="Profile"
                class="w-36 rounded-full mb-4 mx-auto"
              />
            </div>
            <li v-for="(item, index) in menuItems" :key="index">
              <NuxtLink :to="item.path" @click="closeDrawer">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
  
      <!-- Scroll to Top Button -->
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
    // { name: "履歷", path: "/" }, // resumes
  ]);
  
  const closeDrawer = () => {
    document.getElementById("my-drawer").checked = false;
  };
  </script>
  