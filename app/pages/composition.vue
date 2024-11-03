<template>
  <div>
    <!-- <button @click="incCount">increment count</button> -->
    <!-- <p>{{ count }}</p> -->
  </div>
</template>

<script setup>
import { ref,reactive,nextTick } from "vue";

const count = ref(0)
const othercount = ref(1)
const state = reactive({
  count
})

const books = reactive([ref('Vue 3 Guide')])
// need .value here
console.log(books[0].value)

const map = reactive(new Map([['count', ref(22)]]))
// need .value here
console.log(map.get('count').value)
</script>

<style lang="scss" scoped></style>
