<template>
  <section id="skills" class="py-16 lg:py-24 section-padding">
    <div class="container-max">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ t('skills.title') }}
        </h2>
        <div
          class="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-6"
        />
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {{ t('skills.subtitle') }}
        </p>
      </div>

      <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <li
          v-for="category in skillCategories"
          :key="category.key"
          class="card p-6 animate-slide-up"
        >
          <div class="flex items-center mb-6">
            <div
              class="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white text-xl mr-4"
              aria-hidden="true"
            >
              {{ category.icon }}
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ t(`skills.${category.key}`) }}
            </h3>
          </div>

          <ul class="flex flex-wrap gap-3">
            <li v-for="skill in itemsOf(category)" :key="skill" class="skill-badge">
              {{ skill }}
            </li>
          </ul>
        </li>
      </ul>

      <div class="mt-16">
        <h3
          class="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8"
        >
          {{ t('skills.processes_title') }}
        </h3>
        <ul class="flex flex-wrap justify-center gap-4">
          <li
            v-for="process in tm('skills.processes')"
            :key="rt(process)"
            class="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-xl px-5 py-3 shadow border border-gray-100 dark:border-gray-700 font-medium text-gray-900 dark:text-white text-sm"
          >
            <CheckCircleIcon class="h-5 w-5 shrink-0 text-primary-600 dark:text-primary-400" aria-hidden="true" />
            {{ rt(process) }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/outline'
import { useI18n } from 'vue-i18n'

const { t, tm, rt } = useI18n()

// `key` référence une clé de traduction. Les listes traduites vivent dans
// `skills.lists.<key>` ; les noms de technologies, eux, ne se traduisent pas.
const skillCategories = [
  { key: 'odoo_apps', icon: '🧩', translated: true },
  { key: 'configuration', icon: '⚙️', translated: true },
  { key: 'consulting', icon: '🤝', translated: true },
  {
    key: 'odoo_tech',
    icon: '🐍',
    skills: ['Python (ORM)', 'XML', 'QWeb', 'OWL / JavaScript', 'PostgreSQL', 'Linux']
  },
  {
    key: 'development',
    icon: '💻',
    skills: ['Java / Spring Boot', '.NET', 'Vue.js', 'React', 'SQL Server', 'REST API', 'Docker', 'Git']
  },
  { key: 'soft_skills', icon: '🧠', translated: true }
]

const itemsOf = (category) =>
  category.translated ? tm(`skills.lists.${category.key}`).map((item) => rt(item)) : category.skills
</script>
