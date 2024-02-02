<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div><button class="button" @click="router.push({name: 'component'})">Go to Component</button></div>
</template>

<style scoped>

</style>