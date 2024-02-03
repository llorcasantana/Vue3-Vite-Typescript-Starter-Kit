import { createI18n as langSystem } from 'vue-i18n'
import { useStorage } from '@vueuse/core'

import es from './locales/es-ES.json'

export function createI18n() {
  const defaultLocale = useStorage('locale', navigator?.language || 'es-ES')
  return langSystem({
    locale: defaultLocale.value,
    messages: {
      es
    },
  });

}