<template>
  <NuxtLayout name="default">
    <div class="flex flex-col min-h-screen">
      <!-- Main Content Area -->
      <main class="flex-1 p-6">
        <NuxtPage />
      </main>
      <NuxtLayout name="footer" />
    </div>
  </NuxtLayout>
</template>
