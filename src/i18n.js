import { createI18n } from 'vue-i18n'
import fr from './locales/fr.json'
import en from './locales/en.json'

// Le libellé de chaque langue est écrit dans sa propre langue (convention i18n).
export const LANGUAGES = [
  { code: 'fr', label: 'Français', short: 'FR' },
  { code: 'en', label: 'English', short: 'EN' }
]

const SUPPORTED = LANGUAGES.map((language) => language.code)
const DEFAULT_LOCALE = 'fr'
export const LOCALE_STORAGE_KEY = 'language'

// Priorité : choix explicite de l'utilisateur > langue du navigateur > français.
function resolveInitialLocale() {
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
  if (stored && SUPPORTED.includes(stored)) return stored

  const preferred = navigator.languages?.length ? navigator.languages : [navigator.language]
  for (const tag of preferred) {
    const base = String(tag).toLowerCase().split('-')[0]
    if (SUPPORTED.includes(base)) return base
  }
  return DEFAULT_LOCALE
}

export const i18n = createI18n({
  legacy: false,
  locale: resolveInitialLocale(),
  fallbackLocale: DEFAULT_LOCALE,
  messages: { fr, en }
})
