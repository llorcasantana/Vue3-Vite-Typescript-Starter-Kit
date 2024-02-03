<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'


const { t } = useI18n()

const router = useRouter()
</script>

<template>
  <div><button class="button" @click="router.push({name: 'component'})">{{t('to_components')}}</button></div>
</template>

<style scoped>

</style>