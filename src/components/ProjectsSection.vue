<template>
  <section id="projects" class="py-16 lg:py-24 section-padding bg-white dark:bg-gray-800">
    <div class="container-max">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ t('projects.title') }}
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-6" />
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {{ t('projects.subtitle') }}
        </p>
      </div>

      <!-- Projets Odoo -->
      <ul class="space-y-10">
        <li
          v-for="project in odooProjects"
          :key="project.id"
          class="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 overflow-hidden"
        >
          <article :class="['grid', project.shots.length && 'lg:grid-cols-5']">
            <!-- Galerie -->
            <div
              v-if="project.shots.length"
              class="lg:col-span-2 p-4 sm:p-6 border-b lg:border-b-0 lg:border-e border-gray-200 dark:border-gray-700"
            >
              <button
                type="button"
                class="group block w-full overflow-hidden rounded-lg ring-1 ring-gray-200 dark:ring-gray-700 bg-white focus-ring"
                @click="openViewer(project, 0)"
              >
                <img
                  :src="project.shots[0].thumb"
                  :alt="t('projects.open_shot', { caption: caption(project, project.shots[0]) })"
                  loading="lazy"
                  decoding="async"
                  class="aspect-[16/10] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                >
              </button>

              <ul v-if="project.shots.length > 1" class="mt-3 grid grid-cols-3 gap-3">
                <li v-for="(shot, index) in project.shots.slice(1, 4)" :key="shot.slug" class="relative">
                  <button
                    type="button"
                    class="block w-full overflow-hidden rounded-md ring-1 ring-gray-200 dark:ring-gray-700 bg-white focus-ring"
                    @click="openViewer(project, index + 1)"
                  >
                    <img
                      :src="shot.thumb"
                      :alt="t('projects.open_shot', { caption: caption(project, shot) })"
                      loading="lazy"
                      decoding="async"
                      class="aspect-[16/10] w-full object-cover object-top"
                    >
                    <span
                      v-if="index === 2 && project.shots.length > 4"
                      class="absolute inset-0 flex items-center justify-center rounded-md bg-gray-900/60 text-white font-semibold"
                      aria-hidden="true"
                    >
                      +{{ project.shots.length - 4 }}
                    </span>
                  </button>
                </li>
              </ul>

              <button
                type="button"
                class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline rounded focus-ring"
                @click="openViewer(project, 0)"
              >
                <PhotoIcon class="h-5 w-5" aria-hidden="true" />
                {{ t('projects.open_gallery', { count: project.shots.length }) }}
              </button>
            </div>

            <!-- Description -->
            <div :class="['p-6 lg:p-8', project.shots.length && 'lg:col-span-3']">
              <p class="text-sm font-medium uppercase tracking-wide text-primary-600 dark:text-primary-400 mb-2">
                {{ t(`projects.odoo.${project.id}.sector`) }}
              </p>
              <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {{ t(`projects.odoo.${project.id}.name`) }}
              </h3>

              <h4 class="sr-only">{{ t('projects.context') }}</h4>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                {{ t(`projects.odoo.${project.id}.context`) }}
              </p>

              <div class="grid md:grid-cols-2 gap-6 mb-6">
                <div v-for="part in ['functional', 'technical']" :key="part">
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
                    {{ t(`projects.${part}`) }}
                  </h4>
                  <ul class="list-disc ps-5 space-y-1.5 text-sm text-gray-600 dark:text-gray-300 marker:text-primary-400">
                    <li v-for="(line, index) in tm(`projects.odoo.${project.id}.${part}`)" :key="index">
                      {{ rt(line) }}
                    </li>
                  </ul>
                </div>
              </div>

              <div class="flex flex-wrap items-center gap-2">
                <span class="sr-only">{{ t('projects.apps') }} :</span>
                <span
                  v-for="app in project.apps"
                  :key="app"
                  class="text-xs font-medium bg-accent-100 text-accent-800 dark:bg-accent-900/60 dark:text-accent-200 px-2.5 py-1 rounded-full"
                >
                  {{ t(`projects.odoo_apps.${app}`) }}
                </span>
                <span class="sr-only">{{ t('projects.stack') }} :</span>
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2.5 py-1 rounded-full"
                >
                  {{ tech }}
                </span>
              </div>

              <div v-if="project.repositories.length" class="mt-6 flex flex-wrap gap-3">
                <a
                  v-for="repository in project.repositories"
                  :key="repository.url"
                  :href="repository.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-secondary inline-flex items-center gap-2 text-sm py-2 px-4"
                >
                  <GithubIcon class="h-4 w-4" />
                  {{ t(`projects.odoo.${project.id}.${repository.key}`) }}
                </a>
              </div>
            </div>
          </article>
        </li>
      </ul>

      <!-- Autres projets -->
      <div class="mt-20">
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-2">
          {{ t('projects.other_title') }}
        </h3>
        <p class="text-gray-600 dark:text-gray-300 text-center mb-8">
          {{ t('projects.other_subtitle') }}
        </p>

        <ul class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <li
            v-for="project in otherProjects"
            :key="project.id"
            class="card p-5 flex flex-col"
          >
            <h4 class="font-semibold text-gray-900 dark:text-white mb-1">
              {{ t(`projects.items.${project.id}.name`) }}
            </h4>
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">
              {{ t(`projects.items.${project.id}.description`) }}
            </p>
            <ul class="flex flex-wrap gap-1.5 mb-4">
              <li
                v-for="tech in project.technologies"
                :key="tech"
                class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded-full"
              >
                {{ tech }}
              </li>
            </ul>
            <a
              :href="project.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="t('projects.github_aria', { name: t(`projects.items.${project.id}.name`) })"
              class="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline rounded focus-ring"
            >
              <GithubIcon class="h-4 w-4" />
              {{ t('projects.github') }}
            </a>
          </li>
        </ul>

        <div class="mt-10 text-center">
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
    </div>

    <ScreenshotViewer ref="viewer" :title="viewerTitle" :shots="viewerShots" />
  </section>
</template>

<script setup>
import { computed, nextTick, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { PhotoIcon } from '@heroicons/vue/24/outline'
import GithubIcon from './icons/GithubIcon.vue'
import ScreenshotViewer from './ScreenshotViewer.vue'
import { odooProjects, otherProjects } from '../data/projects'
import { site } from '../data/site'

const { t, tm, rt } = useI18n()

const caption = (project, shot) => t(`projects.odoo.${project.id}.shots.${shot.slug}`)

const viewer = ref(null)
const activeProject = ref(null)

const viewerTitle = computed(() =>
  activeProject.value ? t(`projects.odoo.${activeProject.value.id}.name`) : ''
)
const viewerShots = computed(() =>
  activeProject.value
    ? activeProject.value.shots.map((shot) => ({
        src: shot.src,
        caption: caption(activeProject.value, shot)
      }))
    : []
)

const openViewer = async (project, index) => {
  activeProject.value = project
  await nextTick()
  viewer.value.open(index)
}
</script>
