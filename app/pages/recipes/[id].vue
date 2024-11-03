<template>
  <div>
    <div class="flex flex-col max-w-screen-lg container py-20">
      <div class="flex flex-col mb-6">
        <h2 class="text-5xl mb-4 font-semibold">
          {{ data?.name }}
        </h2>
        <div class="flex gap-4 text-xl mb-6">
          <div class="flex items-center gap-1">
            <Icon name="mdi:clock-time-eight-outline" style="color: #f79f1a" />
            <span>{{ data?.cookTimeMinutes }}</span>
          </div>
          <div class="flex items-center gap-1">
            <Icon name="mdi:clock-time-eight-outline" style="color: #f79f1a" />
            <span>{{ data?.caloriesPerServing }}</span>
          </div>
          <div class="flex items-center gap-1">
            <Icon name="mdi:clock-time-eight-outline" style="color: #f79f1a" />
            <span>{{ data?.rating }}({{ data?.reviewCount }})</span>
          </div>
        </div>
        <hr />
      </div>
      <NuxtImg :src="data?.image" sizes="100vw" class="" format="webp" />

      <h3 class="mb-1 mt-6 text-xl font-semibold">Information</h3>
      <ul>
        <li
          v-for="(item, index) in data?.instructions"
          :key="index + Math.random()"
          class="border-b py-2 transition duration-150 ease-in-out cursor-pointer hover:text-red-400 hover:skew-y-4"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { data, error } = await useFetch(
  `https://dummyjson.com/recipes/${route.params.id}`
);

if (error.value) {
  // navigateTo('/error-page')
  throw createError({
    statusCode: error.value?.statusCode,
    statusMessage: error.value?.statusMessage,
  });
}

useSeoMeta({
  title: data.value?.name,
  ogTitle: data.value?.name,
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: data.value?.image,
  twitterCard: 'summary_large_image',
  twitterTitle: data.value?.name,
  twitterImage: data.value?.image,
})
</script>

<style scoped></style>
