<template>
  <section id="accueil" class="pt-24 pb-16 lg:pt-32 lg:pb-24 section-padding">
    <div class="container-max">
      <div class="text-center animate-slide-up">
        <div class="mb-6">
          <div class="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary-400 to-accent-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
            R.A
          </div>
        </div>
        
        <h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          {{ $t('hero.greeting') }}
          <span class="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            {{ $t('hero.name') }}
          </span>
        </h1>
        
        <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          {{ $t('hero.subtitle') }}
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#projects" class="btn-primary">
            {{ $t('hero.cta_projects') }}
          </a>
          <a href="#contact" class="btn-secondary">
            {{ $t('hero.cta_contact') }}
          </a>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="mt-16 animate-bounce-slow">
          <ChevronDownIcon class="h-6 w-6 mx-auto text-gray-400 dark:text-gray-500" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import { useI18n } from 'vue-i18n'

export default {
  name: 'HeroSection',
  components: {
    ChevronDownIcon
  },
  setup() {
    useI18n()
    return {}
  }
}
</script>