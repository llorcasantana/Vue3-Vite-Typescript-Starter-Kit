<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import AppLayout from '@/layouts/AppLayout.vue'
import SectionOne from '@/components/sections/SectionOne.vue'


const { t } = useI18n()

const router = useRouter()
</script>

<template>
  <AppLayout>
    <SectionOne/>
  </AppLayout>
</template>

<style scoped>

</style>