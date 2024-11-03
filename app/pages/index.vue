<template>
  <div class>
    <!-- <h1 class="hello text-center text-3xl text-gray-500">Hello</h1> -->
    <!-- <Icon name="uil:github" color="black" /> -->
    <div class="pages">
      <main>
        <section class="bg-[#f1f1f1]">
          <div class="container flex flex-col lg:flex-row items-center py-20 gap-10">
            <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
              <h1
                class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance"
              >Master the ketchen with ease: unleash your inner chef today~!</h1>

              <p class="text-xl lg:text-2xl mb-8 text-balance">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis rerum consequuntur aspernatur!
              </p>

              <button
                class="px-4 py-4 text-white self-start bg-dodgeroll-gold rounded-md text-lg cursor-pointer"
                type="button"
              >Browser Recipes</button>
            </div>

            <div class="flex-1 order-1 lg:order-2">
              <NuxtImg
                :src="recipes.recipes[0]?.image || '/splashpage.jpg'"
                width
                height
                format="webp"
                densities="x1"
                sizes="xs:100vw sm:667px"
              />
            </div>
          </div>
        </section>

        <section class="py-20 container">
          <h2 class="text-3xl lg:text-5xl mb-2">Discover, Create, share</h2>
          <p class="text-lg lh:text-xl mb-8">check out our most popular!</p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
            <div v-for="(item, index) in recipes.recipes" :key="index + Math.random()">
              <div class="flex flex-col shadow rounded-md p-2">
                <NuxtImg
                  :src="item.image || '/splashpage.jpg'"
                  sizes="500px"
                  format="webp"
                  ref="image"
                  class="image-transition"
                />
                <p class="text-bold text-2xl">{{ item.name }}</p>
                <div
                  class="font-normal justify-between flex-1 w-full bg-white/80 flex gap-8 text-lg lg:text-xl mb-4 mt-4"
                >
                  <div class="flex flex-col items-center gap-1">
                    <Icon name="mdi:clock-time-eight-outline" style="color: #f79f1a" />
                    <span>{{ item?.cookTimeMinutes }}</span>
                  </div>

                  <div class="flex flex-col items-center gap-1">
                    <Icon name="mdi:fire" style="color: #f79f1a" />
                    <span>{{ item?.caloriesPerServing }}</span>
                  </div>

                  <div class="flex flex-col items-center gap-1">
                    <Icon name="mdi:fire" style="color: #f79f1a" />
                    <span>{{ item?.prepTimeMinutes }}</span>
                  </div>
                </div>
                <NuxtLink
                  :to="{ name: 'recipes-id', params: { id: item?.id } }"
                  class="bg-[#f79f1a] w-[100px] text-white p-2 rounded-md font-semibold m-auto mt-2"
                >View</NuxtLink>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup type="ts">
import { onMounted, onUnmounted,watch } from "vue";
const { data: recipes, error } = await useFetch(
  "https://dummyjson.com/recipes?limit=12"
);
const route = useRoute();
let observer;

useSeoMeta({
  title: 'My Home Recive',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

const createObserver = () => {
  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, 50);
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  document.querySelectorAll(".image-transition").forEach(e => {
    observer.observe(e);
  });
};

const disconnectObserver = () => {
  if (observer) {
    observer.disconnect();
  }
};

onMounted(createObserver);

onActivated(() => {
  // disconnectObserver();
  createObserver();
});

onUnmounted(disconnectObserver);
watchEffect(()=>{
  console.log('any');
  disconnectObserver();
  
})
</script>

<style lang="scss" scoped>
.image-transition {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}
.image-transition.show {
  opacity: 1;
}
</style>
