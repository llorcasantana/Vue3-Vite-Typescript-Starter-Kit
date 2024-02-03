import { createI18n as langSystem } from 'vue-i18n'
import { useStorage } from '@vueuse/core'

import es from './locales/es-ES.json'
import en from './locales/en-US.json'

export function createI18n() {
  const defaultLocale = useStorage('locale', navigator?.language || 'en-US')
  return langSystem({
    locale: defaultLocale.value,
    messages: {
      es, en
    },
  });

}