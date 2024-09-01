<template>
  <div
    @click="scrollToTop"
    class="fixed bottom-5 right-5 bg-gray-700 rounded-lg shadow-lg w-10 h-10 flex items-center justify-center cursor-pointer"
  >
    <button class="text-gray-400 hover:text-white">
      <font-awesome-icon :icon="['fas', 'chevron-up']" />
    </button>
  </div>
</template>
  
<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>
  