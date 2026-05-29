import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue'

import fr from './locales/fr.json'
import en from './locales/en.json'

const i18n = createI18n({
	legacy: false,
	locale: localStorage.getItem('language') || 'fr',
	fallbackLocale: 'fr',
	messages: {
		fr,
		en
	}
})

createApp(App)
	.use(i18n)
	.mount('#app')