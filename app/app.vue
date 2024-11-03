<template>
  <div>
    <div class="font-Montserrat ">
      <!-- <nav>Nav</nav> -->
      <!-- <NavBar /> -->

      <NuxtLayout >
        <NuxtPage />
      </NuxtLayout>
      <!-- <footer>Footer</footer> -->
    </div>
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->
  </div>
</template>

<script setup>
// import NavBar from './components/NavBar.vue';

const route = useRoute();
useHead({
  title: route.name,
});

provide("route", route);
</script>
