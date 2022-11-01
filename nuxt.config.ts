// https://v3.nuxtjs.org/api/configuration/nuxt.config

import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineNuxtConfig({
  vite: {
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
        ]
      })
    ]
  },
  css: ['vuetify/lib/styles/main.sass', 'mdi/css/materialdesignicons.min.css'],
  modules: ['@vueuse/nuxt', '@nuxtjs/supabase', '@pinia/nuxt'],
  build: {
    transpile: ['vuetify'],
  },
})
