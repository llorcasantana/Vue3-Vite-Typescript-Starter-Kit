<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const router = useRouter()
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="mb-6 pb-3 columns is-multiline">
        <div class="column is-12 mx-auto has-text-centered">
          <h2 class="mb-4 is-size-1 is-size-3-mobile has-text-weight-bold">Vue 3 + Vite + Typescript</h2>
          <p class="subtitle has-text-grey mb-5">
            {{t('subtitle')}}
          </p>
          <div class="buttons is-centered">
            <button class="button" @click="router.push({name: 'component'})">{{t('to_example_route')}}</button>
            <a class="button is-primary" href="https://github.com/new?template_name=Vue3-Vite-Typescript-Starter-Kit&template_owner=llorcasantana" target="_blank">{{t('to_deploy')}}</a>

          </div>
        </div>
      </div>
      <div class="libraries columns is-multiline">
        <div class="column is-12 is-4-desktop">
          <div class="mb-6 is-flex">
              <span>
                <img src="@/assets/logo.svg" width="48" height="48" alt="">
              </span>
            <div class="ml-3">
              <h4 class="is-size-4 has-text-weight-bold mb-2">Vue 3.4.15</h4>
              <p class="subtitle has-text-grey">The Progressive JavaScript Framework</p>
            </div>
          </div>
          <div class="mb-6 is-flex">
              <span>
                <img src="https://vitejs.dev/logo.svg" width="48" height="48" alt="">
              </span>
            <div class="ml-3">
              <h4 class="is-size-4 has-text-weight-bold mb-2">Vite 5.0.11</h4>
              <p class="subtitle has-text-grey">Next Generation Frontend Tooling</p>
            </div>
          </div>
          <div class="mb-6 is-flex">
              <span>
                <img src="https://vue-i18n.intlify.dev/vue-i18n-logo.svg" width="48" height="48" alt="">
              </span>
            <div class="ml-3">
              <h4 class="is-size-4 has-text-weight-bold mb-2">Vue I18n 9.9.1</h4>
              <p class="subtitle has-text-grey">Internationalization plugin for Vue.js</p>
            </div>
          </div>
        </div>
        <div class="column is-12 is-4-desktop">
          <div class="mb-6 is-flex">
            <span>
                <img src="https://axios-http.com/assets/logo.svg" width="58" height="48" alt="">
              </span>
            <div class="ml-3">
              <h4 class="is-size-4 has-text-weight-bold mb-2">Axios 1.6.7</h4>
              <p class="subtitle has-text-grey">Promise based HTTP client for the browser and node.js</p>
            </div>
          </div>
          <div class="mb-6 is-flex">
            <span>
                <img src="https://sass-lang.com/assets/img/logos/logo.svg" width="48" height="48" alt="">
              </span>
            <div class="ml-3">
              <h4 class="is-size-4 has-text-weight-bold mb-2">Sass 1.70.0</h4>
              <p class="subtitle has-text-grey">CSS with superpowers</p>
            </div>
          </div>
          <div class="mb-6 is-flex">

            <span>
                <img src="@/assets/bulma-logo.png" width="58" height="48" alt="">
              </span>
            <div class="ml-3">
              <h4 class="is-size-4 has-text-weight-bold mb-2">Bulma 0.9.4</h4>
              <p class="subtitle has-text-grey">The modern
                CSS framework that
                just works.</p>
            </div>
          </div>
        </div>
        <div class="column is-12 is-4-desktop">
          <div class="mb-6 is-flex">
            <span>
                <img src="https://pinia.vuejs.org/logo.svg" width="48" height="48" alt="">
              </span>
            <div class="ml-3">
              <h4 class="is-size-4 has-text-weight-bold mb-2">Pinia 2.1.7</h4>
              <p class="subtitle has-text-grey">The intuitive store for Vue.js</p>
            </div>
          </div>
          <div class="mb-6 is-flex">
            <span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png" width="48" height="48" alt="">
              </span>
            <div class="ml-3">
              <h4 class="is-size-4 has-text-weight-bold mb-2">Typescript 5.3.0</h4>
              <p class="subtitle has-text-grey">TypeScript is JavaScript with syntax for types.</p>
            </div>
          </div>
          <div class="mb-6 is-flex">
            <span>
                <img src="https://llorcadev.com/assets/llorcadev_BOX-f11766ff.png" width="58" height="48" alt="">
              </span>
            <div class="ml-3">
              <h4 class="is-size-4 has-text-weight-bold mb-2">Made with love by <a href="https://llorcadev.com/?ref=github_starter_kit">llorcadev</a></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>