<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
    <!-- Navigation -->
    <Navigation 
      :dark-mode="darkMode" 
      @toggle-dark-mode="toggleDarkMode"
    />
    
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- About Section -->
    <AboutSection />
    
    <!-- Projects Section -->
    <ProjectsSection />
    
    <!-- Skills Section -->
    <SkillsSection />
    
    <!-- Contact Section -->
    <ContactSection />
    
    <!-- Footer -->
    <footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8">
      <div class="container-max section-padding text-center text-gray-600 dark:text-gray-400">
        <p>&copy; 2025 Rariana Aina ANDRIAMIADANA. Tous droits réservés.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import Navigation from './components/Navigation.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    HeroSection,
    AboutSection,
    ProjectsSection,
    SkillsSection,
    ContactSection
  },
  setup() {
    const darkMode = ref(false)
    
    const toggleDarkMode = () => {
      darkMode.value = !darkMode.value
      localStorage.setItem('darkMode', darkMode.value.toString())
      updateDarkMode()
    }
    
    const updateDarkMode = () => {
      if (darkMode.value) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
    
    onMounted(() => {
      const savedDarkMode = localStorage.getItem('darkMode')
      if (savedDarkMode !== null) {
        darkMode.value = savedDarkMode === 'true'
      } else {
        darkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
      }
      updateDarkMode()
    })
    
    return {
      darkMode,
      toggleDarkMode
    }
  }
}
</script>