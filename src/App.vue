<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
    <a href="#main" class="skip-link">{{ t('nav.skip_to_content') }}</a>

    <Navigation />

    <main id="main">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>

    <footer
      class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8"
    >
      <div
        class="container-max section-padding text-center text-sm text-gray-600 dark:text-gray-400 space-y-1"
      >
        <p>{{ t('footer.copyright', { year: currentYear }) }}</p>
        <p>{{ t('footer.built_with') }}</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import Navigation from './components/Navigation.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'
import { useDocumentMeta } from './composables/useDocumentMeta'

const { t } = useI18n()
const currentYear = new Date().getFullYear()

useDocumentMeta()
</script>
