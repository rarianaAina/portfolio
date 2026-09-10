<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-200"
    :aria-label="t('nav.primary')"
  >
    <div class="container-max section-padding">
      <div class="flex items-center justify-between h-16">
        <a
          href="#home"
          class="font-bold text-xl text-primary-600 dark:text-primary-400 rounded focus-ring"
        >
          R.A.A
        </a>

        <!-- Menu bureau -->
        <div class="hidden lg:flex items-center space-x-4">
          <a
            v-for="item in menuItems"
            :key="item"
            :href="`#${item}`"
            class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200 text-sm rounded focus-ring"
          >
            {{ t(`nav.${item}`) }}
          </a>

          <a
            :href="site.cvPath"
            :download="site.cvFileName"
            :aria-label="t('nav.cv_aria')"
            class="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors duration-200 text-sm focus-ring"
          >
            <DocumentArrowDownIcon class="h-4 w-4" aria-hidden="true" />
            {{ t('nav.cv') }}
          </a>

          <div class="flex gap-2" role="group" :aria-label="t('nav.language')">
            <button
              v-for="language in LANGUAGES"
              :key="language.code"
              type="button"
              :aria-pressed="locale === language.code"
              :title="language.label"
              :class="[
                'px-3 py-2 rounded-lg font-medium transition-colors duration-200 text-sm focus-ring',
                locale === language.code
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-primary-600'
              ]"
              @click="changeLanguage(language.code)"
            >
              {{ language.short }}
            </button>
          </div>

          <button
            type="button"
            :aria-label="isDark ? t('nav.theme_light') : t('nav.theme_dark')"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 focus-ring"
            @click="toggleTheme"
          >
            <SunIcon v-if="isDark" class="h-5 w-5" aria-hidden="true" />
            <MoonIcon v-else class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <!-- Menu mobile -->
        <div class="lg:hidden flex items-center space-x-1">
          <button
            type="button"
            :aria-label="isDark ? t('nav.theme_light') : t('nav.theme_dark')"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 focus-ring"
            @click="toggleTheme"
          >
            <SunIcon v-if="isDark" class="h-5 w-5" aria-hidden="true" />
            <MoonIcon v-else class="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            aria-controls="mobile-menu"
            :aria-expanded="mobileMenuOpen"
            :aria-label="mobileMenuOpen ? t('nav.close_menu') : t('nav.open_menu')"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors duration-200 focus-ring"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <Bars3Icon v-if="!mobileMenuOpen" class="h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div v-if="mobileMenuOpen" id="mobile-menu" class="lg:hidden py-4 animate-fade-in space-y-2">
        <a
          v-for="item in menuItems"
          :key="item"
          :href="`#${item}`"
          class="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200 rounded focus-ring"
          @click="mobileMenuOpen = false"
        >
          {{ t(`nav.${item}`) }}
        </a>

        <a
          :href="site.cvPath"
          :download="site.cvFileName"
          :aria-label="t('nav.cv_aria')"
          class="flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors duration-200 w-full justify-center focus-ring"
          @click="mobileMenuOpen = false"
        >
          <DocumentArrowDownIcon class="h-5 w-5" aria-hidden="true" />
          {{ t('nav.cv') }}
        </a>

        <div class="flex gap-2 mt-4" role="group" :aria-label="t('nav.language')">
          <button
            v-for="language in LANGUAGES"
            :key="language.code"
            type="button"
            :aria-pressed="locale === language.code"
            :class="[
              'flex-1 px-3 py-2 rounded-lg font-medium transition-colors duration-200 focus-ring',
              locale === language.code
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
            ]"
            @click="changeLanguage(language.code); mobileMenuOpen = false"
          >
            {{ language.label }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
  DocumentArrowDownIcon
} from '@heroicons/vue/24/outline'
import { site } from '../data/site'
import { LANGUAGES, LOCALE_STORAGE_KEY } from '../i18n'
import { useTheme } from '../composables/useTheme'

const { t, locale } = useI18n()
const { isDark, toggleTheme } = useTheme()

const mobileMenuOpen = ref(false)
const menuItems = ['home', 'about', 'experience', 'projects', 'skills', 'contact']

const changeLanguage = (code) => {
  locale.value = code
  localStorage.setItem(LOCALE_STORAGE_KEY, code)
}
</script>
