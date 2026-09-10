<template>
  <section id="experience" class="py-16 lg:py-24 section-padding">
    <div class="container-max">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ t('experience.title') }}
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-6" />
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {{ t('experience.subtitle') }}
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-12">
        <ol class="lg:col-span-2 ms-2 border-s-2 border-primary-200 dark:border-primary-900 space-y-10">
          <li v-for="(item, index) in tm('experience.items')" :key="index" class="relative ps-8">
            <span
              class="absolute -start-[9px] top-1.5 w-4 h-4 rounded-full bg-primary-600 ring-4 ring-gray-50 dark:ring-gray-900"
              aria-hidden="true"
            />
            <p class="text-sm font-medium text-primary-600 dark:text-primary-400">
              {{ rt(item.period) }}
            </p>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ rt(item.role) }}
            </h3>
            <p class="font-medium text-gray-700 dark:text-gray-300 mb-3">
              {{ rt(item.org) }}
            </p>
            <ul class="list-disc ps-5 space-y-1.5 text-gray-600 dark:text-gray-300 marker:text-primary-400">
              <li v-for="(bullet, bulletIndex) in item.bullets" :key="bulletIndex">
                {{ rt(bullet) }}
              </li>
            </ul>
          </li>
        </ol>

        <aside class="space-y-6">
          <div class="card p-6">
            <h3 class="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white mb-4">
              <AcademicCapIcon class="h-6 w-6 text-primary-600 dark:text-primary-400" aria-hidden="true" />
              {{ t('experience.education_title') }}
            </h3>
            <ul class="space-y-3">
              <li v-for="(entry, index) in tm('experience.education')" :key="index">
                <p class="font-medium text-gray-900 dark:text-white">{{ rt(entry.degree) }}</p>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  {{ rt(entry.school) }} · {{ rt(entry.period) }}
                </p>
              </li>
            </ul>
          </div>

          <div class="card p-6">
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ t('experience.cv_note') }}</p>
            <a
              :href="site.cvPath"
              :download="site.cvFileName"
              class="btn-primary inline-flex items-center gap-2 text-sm py-2"
            >
              <DocumentArrowDownIcon class="h-4 w-4" aria-hidden="true" />
              {{ t('experience.cv_link') }}
            </a>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup>
import { AcademicCapIcon, DocumentArrowDownIcon } from '@heroicons/vue/24/outline'
import { useI18n } from 'vue-i18n'
import { site } from '../data/site'

const { t, tm, rt } = useI18n()
</script>
