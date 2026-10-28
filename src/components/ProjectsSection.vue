<template>
  <section id="projects" class="py-16 lg:py-24 section-padding">
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

      <!-- Réalisations clients -->
      <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
        {{ t('projects.clients_title') }}
      </h3>
      <p class="text-gray-600 dark:text-gray-300 mb-8">
        {{ t('projects.clients_subtitle') }}
      </p>

      <ul class="grid lg:grid-cols-2 gap-8">
        <li
          v-for="project in clientProjects"
          :key="project.id"
          class="card overflow-hidden flex flex-col"
        >
          <button
            type="button"
            class="group block w-full overflow-hidden bg-gray-100 dark:bg-gray-900 focus-ring"
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

          <div class="p-6 flex flex-col flex-1">
            <p class="text-sm font-medium uppercase tracking-wide text-primary-600 dark:text-primary-400 mb-1">
              {{ t(`projects.items.${project.id}.sector`) }}
            </p>
            <h4 class="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              {{ t(`projects.items.${project.id}.name`) }}
            </h4>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              {{ t(`projects.items.${project.id}.description`) }}
            </p>
            <TechList :technologies="project.technologies" class="mb-6" />

            <div class="mt-auto flex flex-wrap gap-3">
              <a
                :href="project.siteUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-primary inline-flex items-center gap-2 text-sm py-2"
              >
                <ArrowTopRightOnSquareIcon class="h-4 w-4" aria-hidden="true" />
                {{ t('projects.visit_site') }}
              </a>
              <button
                v-if="project.shots.length > 1"
                type="button"
                class="btn-secondary inline-flex items-center gap-2 text-sm py-2"
                @click="openViewer(project, 0)"
              >
                <PhotoIcon class="h-4 w-4" aria-hidden="true" />
                {{ t('projects.open_gallery', { count: project.shots.length }) }}
              </button>
            </div>
          </div>
        </li>
      </ul>

      <!-- Applications en ligne -->
      <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mt-20 mb-2">
        {{ t('projects.featured_title') }}
      </h3>
      <p class="text-gray-600 dark:text-gray-300 mb-8">
        {{ t('projects.featured_subtitle') }}
      </p>

      <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <li
          v-for="project in featuredProjects"
          :key="project.id"
          class="card overflow-hidden flex flex-col hover:-translate-y-1"
        >
          <button
            v-if="project.shots.length"
            type="button"
            class="group block w-full overflow-hidden bg-gray-100 dark:bg-gray-900 focus-ring"
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
          <div
            v-else
            class="aspect-[16/10] w-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center"
            aria-hidden="true"
          >
            <span class="text-white text-3xl font-bold tracking-tight">
              {{ t(`projects.items.${project.id}.name`) }}
            </span>
          </div>

          <div class="p-6 flex flex-col flex-1">
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {{ t(`projects.items.${project.id}.name`) }}
            </h4>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {{ t(`projects.items.${project.id}.description`) }}
            </p>
            <TechList :technologies="project.technologies" class="mb-6" />

            <div class="mt-auto flex flex-wrap gap-3">
              <a
                v-if="project.demoUrl"
                :href="project.demoUrl"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="t('projects.demo_aria', { name: t(`projects.items.${project.id}.name`) })"
                class="btn-primary inline-flex items-center gap-2 text-sm py-2"
              >
                <ArrowTopRightOnSquareIcon class="h-4 w-4" aria-hidden="true" />
                {{ t('projects.demo') }}
              </a>
              <a
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="t('projects.github_aria', { name: t(`projects.items.${project.id}.name`) })"
                class="btn-secondary inline-flex items-center gap-2 text-sm py-2"
              >
                <GithubIcon class="h-4 w-4" />
                {{ t('projects.github') }}
              </a>
            </div>
          </div>
        </li>
      </ul>

      <!-- Spécialité Odoo -->
      <aside class="mt-16 rounded-2xl border border-accent-200 dark:border-accent-900 bg-accent-50 dark:bg-accent-900/20 p-6 lg:p-8">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {{ t('projects.odoo_title') }}
        </h3>
        <p class="text-gray-700 dark:text-gray-300 mb-4">
          {{ t('projects.odoo_text') }}
        </p>
        <div class="flex flex-wrap gap-3">
          <a
            v-if="site.odooUrl"
            :href="site.odooUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary inline-flex items-center gap-2 text-sm py-2"
          >
            <ArrowTopRightOnSquareIcon class="h-4 w-4" aria-hidden="true" />
            {{ t('projects.odoo_link') }}
          </a>
          <a
            v-for="repository in odooRepositories"
            :key="repository.url"
            :href="repository.url"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary inline-flex items-center gap-2 text-sm py-2"
          >
            <GithubIcon class="h-4 w-4" />
            {{ t(`projects.${repository.key}`) }}
          </a>
        </div>
      </aside>

      <!-- Autres projets -->
      <div class="mt-20">
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-2">
          {{ t('projects.other_title') }}
        </h3>
        <p class="text-gray-600 dark:text-gray-300 text-center mb-8">
          {{ t('projects.other_subtitle') }}
        </p>

        <ul class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <li v-for="project in otherProjects" :key="project.id" class="card p-5 flex flex-col">
            <h4 class="font-semibold text-gray-900 dark:text-white mb-1">
              {{ t(`projects.items.${project.id}.name`) }}
            </h4>
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">
              {{ t(`projects.items.${project.id}.description`) }}
            </p>
            <TechList :technologies="project.technologies" small class="mb-4" />
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
import { computed, defineComponent, h, nextTick, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { ArrowTopRightOnSquareIcon, PhotoIcon } from '@heroicons/vue/24/outline'
import GithubIcon from './icons/GithubIcon.vue'
import ScreenshotViewer from './ScreenshotViewer.vue'
import { clientProjects, featuredProjects, odooRepositories, otherProjects } from '../data/projects'
import { site } from '../data/site'

const { t } = useI18n()

// Liste de technologies, en pastilles.
const TechList = defineComponent({
  props: { technologies: { type: Array, required: true }, small: Boolean },
  setup: (props) => () =>
    h(
      'ul',
      { class: 'flex flex-wrap gap-2' },
      props.technologies.map((tech) =>
        h(
          'li',
          {
            key: tech,
            class: `${props.small ? 'text-xs px-2 py-0.5' : 'text-xs px-2.5 py-1'} bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full`
          },
          tech
        )
      )
    )
})

const caption = (project, shot) => t(`projects.items.${project.id}.shots.${shot.slug}`)

const viewer = ref(null)
const activeProject = ref(null)

const viewerTitle = computed(() =>
  activeProject.value ? t(`projects.items.${activeProject.value.id}.name`) : ''
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
