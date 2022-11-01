import { createI18n } from 'vue-i18n'

import en from "@/locales/en.json";
import ptBR from "@/locales/pt-BR.json";

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en,
      'pt-BR': ptBR,
    }
  })

  vueApp.use(i18n)
})