<template>
  <section id="projects" class="py-16 lg:py-24 section-padding">
    <div class="container-max">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ t('projects.title') }}
        </h2>
        <div
          class="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-6"
        />
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {{ t('projects.subtitle') }}
        </p>
      </div>

      <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <li
          v-for="(project, index) in projects"
          :key="project.id"
          class="card p-6 flex flex-col animate-slide-up hover:-translate-y-1"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div
            class="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white text-2xl mb-4"
            aria-hidden="true"
          >
            {{ project.icon }}
          </div>

          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {{ t(`projects.items.${project.id}.name`) }}
          </h3>

          <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
            {{ t(`projects.items.${project.id}.description`) }}
          </p>

          <ul class="flex flex-wrap gap-2 mb-6">
            <li
              v-for="tech in project.technologies"
              :key="tech"
              class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
            >
              {{ tech }}
            </li>
          </ul>

          <a
            :href="project.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="t('projects.github_aria', { name: t(`projects.items.${project.id}.name`) })"
            class="btn-primary mt-auto flex items-center justify-center gap-2 text-sm py-2"
          >
            <GithubIcon class="h-4 w-4" />
            <span>{{ t('projects.github') }}</span>
          </a>
        </li>
      </ul>

      <div class="mt-12 text-center">
        <a
          :href="site.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-secondary inline-flex items-center gap-2"
        >
          <GithubIcon class="h-5 w-5" />
          {{ t('projects.view_all') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import GithubIcon from './icons/GithubIcon.vue'
import { projects } from '../data/projects'
import { site } from '../data/site'

const { t } = useI18n()
</script>
