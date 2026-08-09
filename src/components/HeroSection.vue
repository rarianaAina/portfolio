<template>
  <section id="home" class="pt-24 pb-16 lg:pt-32 lg:pb-24 section-padding">
    <div class="container-max">
      <div class="text-center animate-slide-up">
        <div class="mb-6">
          <img
            :src="portrait"
            :alt="t('about.portrait_alt')"
            width="128"
            height="128"
            fetchpriority="high"
            class="w-32 h-32 mx-auto mb-6 rounded-full object-cover object-top bg-white shadow-xl ring-4 ring-white dark:ring-gray-800"
          >
        </div>

        <p class="text-base md:text-lg font-medium text-primary-600 dark:text-primary-400 mb-3">
          {{ t('hero.greeting') }}
        </p>

        <h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          <span
            class="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent"
          >
            {{ t('hero.name') }}
          </span>
        </h1>

        <p class="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 mb-4">
          {{ t('hero.role') }}
        </p>

        <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          {{ t('hero.subtitle') }}
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#projects" class="btn-primary">{{ t('hero.cta_projects') }}</a>
          <a href="#contact" class="btn-secondary">{{ t('hero.cta_contact') }}</a>
        </div>

        <div class="mt-16">
          <a
            href="#about"
            :aria-label="t('hero.scroll')"
            class="inline-flex animate-bounce-slow rounded-full focus-ring"
          >
            <ChevronDownIcon
              class="h-6 w-6 mx-auto text-gray-400 dark:text-gray-500"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import { useI18n } from 'vue-i18n'
import portrait from '../assets/portrait.webp'

const { t } = useI18n()
</script>
