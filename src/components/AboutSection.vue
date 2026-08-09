<template>
  <section id="about" class="py-16 lg:py-24 section-padding bg-white dark:bg-gray-800">
    <div class="container-max">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ t('about.title') }}
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto" />
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="animate-slide-up">
          <div
            class="relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 p-1 shadow-xl"
          >
            <img
              :src="portrait"
              :alt="t('about.portrait_alt')"
              width="675"
              height="900"
              loading="lazy"
              decoding="async"
              class="w-full rounded-xl bg-white object-cover"
            >
          </div>
        </div>

        <div class="animate-slide-up">
          <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            {{ t('about.subtitle') }}
          </h3>

          <div class="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>{{ t('about.description_1') }}</p>
            <p>{{ t('about.description_2') }}</p>
            <p>{{ t('about.description_3') }}</p>
          </div>

          <ul class="mt-8 flex flex-wrap gap-4">
            <li
              v-for="key in highlights"
              :key="key"
              class="flex items-center space-x-2 text-primary-600 dark:text-primary-400"
            >
              <CheckCircleIcon class="h-5 w-5 shrink-0" aria-hidden="true" />
              <span class="font-medium">{{ t(`about.${key}`) }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/outline'
import { useI18n } from 'vue-i18n'
import portrait from '../assets/portrait.webp'

const { t } = useI18n()

const highlights = ['highlight_fullstack', 'highlight_architecture', 'highlight_api']
</script>
