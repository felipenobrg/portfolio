import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import enTranslations from "./locales/en/en-us.json"
import ptTranslations from "./locales/pt/pt-br.json"

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      pt: {
        translation: ptTranslations
      }
    },
    fallbackLng: "pt",
    debug: false,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n