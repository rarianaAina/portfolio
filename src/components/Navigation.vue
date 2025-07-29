<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
    <div class="container-max section-padding">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="font-bold text-xl text-primary-600 dark:text-primary-400">
          R.A.A
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a 
            v-for="item in menuItems" 
            :key="item.name"
            :href="item.href" 
            class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200"
          >
            {{ item.name }}
          </a>
          
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
        <div class="md:hidden flex items-center space-x-2">
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
      <div v-if="mobileMenuOpen" class="md:hidden py-4 animate-fade-in">
        <a 
          v-for="item in menuItems" 
          :key="item.name"
          :href="item.href"
          @click="mobileMenuOpen = false"
          class="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/vue/24/outline'

export default {
  name: 'Navigation',
  components: {
    Bars3Icon,
    XMarkIcon,
    SunIcon,
    MoonIcon
  },
  props: {
    darkMode: Boolean
  },
  emits: ['toggle-dark-mode'],
  setup() {
    const mobileMenuOpen = ref(false)
    
    const menuItems = [
      { name: 'Accueil', href: '#accueil' },
      { name: 'À propos', href: '#apropos' },
      { name: 'Projets', href: '#projets' },
      { name: 'Compétences', href: '#competences' },
      { name: 'Contact', href: '#contact' }
    ]
    
    return {
      mobileMenuOpen,
      menuItems
    }
  }
}
</script>