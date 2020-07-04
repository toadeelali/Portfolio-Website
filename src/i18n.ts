import i18n from 'i18next'
import detector from 'i18next-browser-languagedetector'
import backend from 'i18next-xhr-backend'
import {reactI18nextModule} from 'react-i18next'

import translationEN from './locales/en/translation.json'

const resources = {
  en: {translation: translationEN},
}

i18n
  .use(detector)
  .use(backend)
  .use(reactI18nextModule as any)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
      prefix: 'GL'
    }
  })

export default i18n
