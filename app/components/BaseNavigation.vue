<template>
  <div>
    <header class="py-4 border-b">
      <nav class="flex container items-center">
        <NuxtLink to="/" class="flex gap-1 items-center">
          <!-- <img width="56px" src="/favicon.ico" alt="icon" /> -->
          <NuxtImg width="56px" src="/d.jpg" alt="icon" format="web" />

          <span class="text-3xl font-bold">NuxtCipes</span>
        </NuxtLink>
        <ul class="flex gap-6 ml-auto text-xl font-bold capitalize">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
            {{ title }}
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title:string;
}>();
</script>

<style lang="scss" scoped></style>
