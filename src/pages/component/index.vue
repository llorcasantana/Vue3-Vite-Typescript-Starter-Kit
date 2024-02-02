<script setup lang="ts">
import { useRouter } from 'vue-router'
const onClick = () => {
  router.push({name: 'index'})
}

const router = useRouter()
</script>

<template>
  <div><button class="button" @click="onClick">Go to Index</button></div>
</template>

<style scoped>

</style>