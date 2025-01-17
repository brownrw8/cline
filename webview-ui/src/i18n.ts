import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import translationEN from "./locales/en/translation.json"
import translationDE from "./locales/de/translation.json"
import translationZH from "./locales/zh/translation.json"
import translationJA from "./locales/ja/translation.json"

i18n.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		fallbackLng: "en",
		load: "languageOnly",
		debug: true,
	})

i18n.addResourceBundle("de", "translation", translationDE)
i18n.addResourceBundle("en", "translation", translationEN)
i18n.addResourceBundle("zh", "translation", translationZH)
i18n.addResourceBundle("ja", "translation", translationJA)

export default i18n
