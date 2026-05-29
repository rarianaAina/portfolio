<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
    <div class="container-max section-padding">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="font-bold text-xl text-primary-600 dark:text-primary-400">
          R.A.A
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-4">
          <a 
            v-for="item in menuItems" 
            :key="item"
            :href="`#${item}`" 
            class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200 text-sm"
          >
            {{ $t(`nav.${item}`) }}
          </a>
          
          <!-- Download CV Button -->
          <a 
            href="/CV_Rariana Aina ANDRIAMIADANA.pdf" 
            download="CV_Rariana Aina ANDRIAMIADANA.pdf"
            class="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors duration-200 text-sm"
          >
            <DocumentArrowDownIcon class="h-4 w-4" />
            {{ $t('nav.cv') }}
          </a>
          
          <!-- Language Selector -->
          <div class="flex gap-2">
            <button
              @click="changeLanguage('fr')"
              :class="['px-3 py-2 rounded-lg font-medium transition-colors duration-200 text-sm', currentLanguage === 'fr' ? 'bg-primary-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-primary-600']"
            >
              FR
            </button>
            <button
              @click="changeLanguage('en')"
              :class="['px-3 py-2 rounded-lg font-medium transition-colors duration-200 text-sm', currentLanguage === 'en' ? 'bg-primary-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-primary-600']"
            >
              EN
            </button>
          </div>
          
          <!-- Dark Mode Toggle -->
          <button 
            @click="$emit('toggle-dark-mode')"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
          >
            <SunIcon v-if="darkMode" class="h-5 w-5" />
            <MoonIcon v-else class="h-5 w-5" />
          </button>
        </div>
        
        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center space-x-1">
          <button 
            @click="$emit('toggle-dark-mode')"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
          >
            <SunIcon v-if="darkMode" class="h-5 w-5" />
            <MoonIcon v-else class="h-5 w-5" />
          </button>
          
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors duration-200"
          >
            <Bars3Icon v-if="!mobileMenuOpen" class="h-6 w-6" />
            <XMarkIcon v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
      
      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden py-4 animate-fade-in space-y-2">
        <a 
          v-for="item in menuItems" 
          :key="item"
          :href="`#${item}`"
          @click="mobileMenuOpen = false"
          class="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200"
        >
          {{ $t(`nav.${item}`) }}
        </a>
        
        <!-- Download CV Button Mobile -->
        <a 
          href="/CV_Rariana Aina ANDRIAMIADANA.pdf" 
          download="CV_Rariana Aina ANDRIAMIADANA.pdf"
          @click="mobileMenuOpen = false"
          class="flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors duration-200 w-full justify-center"
        >
          <DocumentArrowDownIcon class="h-5 w-5" />
          {{ $t('nav.cv') }}
        </a>
        
        <!-- Language Selector Mobile -->
        <div class="flex gap-2 mt-4">
          <button
            @click="changeLanguage('fr'); mobileMenuOpen = false"
            :class="['flex-1 px-3 py-2 rounded-lg font-medium transition-colors duration-200', currentLanguage === 'fr' ? 'bg-primary-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400']"
          >
            Français
          </button>
          <button
            @click="changeLanguage('en'); mobileMenuOpen = false"
            :class="['flex-1 px-3 py-2 rounded-lg font-medium transition-colors duration-200', currentLanguage === 'en' ? 'bg-primary-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400']"
          >
            English
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon, DocumentArrowDownIcon } from '@heroicons/vue/24/outline'

export default {
  name: 'Navigation',
  components: {
    Bars3Icon,
    XMarkIcon,
    SunIcon,
    MoonIcon,
    DocumentArrowDownIcon
  },
  props: {
    darkMode: Boolean
  },
  emits: ['toggle-dark-mode'],
  setup() {
    const { locale } = useI18n()
    const mobileMenuOpen = ref(false)
    
    const menuItems = ['home', 'about', 'projects', 'skills', 'contact']
    
    const currentLanguage = computed(() => locale.value)
    
    const changeLanguage = (lang) => {
      locale.value = lang
      localStorage.setItem('language', lang)
    }
    
    return {
      mobileMenuOpen,
      menuItems,
      currentLanguage,
      changeLanguage
    }
  }
}
</script>