import { ref, watch } from 'vue'

const STORAGE_KEY = 'darkMode'
const media = window.matchMedia('(prefers-color-scheme: dark)')
const stored = localStorage.getItem(STORAGE_KEY)

const isDark = ref(stored !== null ? stored === 'true' : media.matches)

const apply = () => {
  document.documentElement.classList.toggle('dark', isDark.value)
  document.documentElement.style.colorScheme = isDark.value ? 'dark' : 'light'
}

apply()
watch(isDark, apply)

// Tant que l'utilisateur n'a pas choisi, on suit les préférences système.
media.addEventListener('change', (event) => {
  if (localStorage.getItem(STORAGE_KEY) === null) isDark.value = event.matches
})

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value
    localStorage.setItem(STORAGE_KEY, String(isDark.value))
  }

  return { isDark, toggleTheme }
}
