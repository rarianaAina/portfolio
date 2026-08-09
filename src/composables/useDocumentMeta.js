import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

/**
 * Garde `<html lang>`, le titre et les métadonnées de la page synchronisés
 * avec la langue active — indispensable pour le SEO et les lecteurs d'écran.
 */
export function useDocumentMeta() {
  const { t, locale } = useI18n()

  const setMeta = (selector, value) => {
    const tag = document.head.querySelector(selector)
    if (tag) tag.setAttribute('content', value)
  }

  const apply = () => {
    const title = t('meta.title')
    const description = t('meta.description')

    document.documentElement.lang = locale.value
    document.title = title
    setMeta('meta[name="description"]', description)
    setMeta('meta[property="og:title"]', title)
    setMeta('meta[property="og:description"]', description)
    setMeta('meta[property="og:locale"]', locale.value === 'fr' ? 'fr_FR' : 'en_US')
    setMeta('meta[name="twitter:title"]', title)
    setMeta('meta[name="twitter:description"]', description)
  }

  watch(locale, apply, { immediate: true })
}
