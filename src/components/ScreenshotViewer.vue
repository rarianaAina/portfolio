<template>
  <dialog
    ref="dialog"
    :aria-label="title"
    class="w-[calc(100%-2rem)] max-w-6xl bg-transparent p-0 backdrop:bg-gray-950/80 backdrop:backdrop-blur-sm"
    @close="onClose"
    @click="onBackdropClick"
    @keydown.left.prevent="go(-1)"
    @keydown.right.prevent="go(1)"
  >
    <figure v-if="current" class="rounded-xl bg-white dark:bg-gray-800 shadow-2xl overflow-hidden">
      <div class="flex items-center justify-between gap-4 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <p class="text-sm font-medium text-gray-900 dark:text-white truncate">{{ title }}</p>
        <div class="flex items-center gap-3 shrink-0">
          <span class="text-sm text-gray-500 dark:text-gray-400" aria-live="polite">
            {{ t('projects.counter', { current: index + 1, total: shots.length }) }}
          </span>
          <button
            type="button"
            :aria-label="t('projects.close')"
            class="p-1.5 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus-ring"
            @click="close"
          >
            <XMarkIcon class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div class="relative bg-gray-100 dark:bg-gray-900">
        <img
          :src="current.src"
          :alt="current.caption"
          class="mx-auto max-h-[75vh] w-auto object-contain"
        >
        <template v-if="shots.length > 1">
          <button
            type="button"
            :aria-label="t('projects.previous')"
            class="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 shadow text-gray-700 dark:text-gray-200 hover:text-primary-600 focus-ring"
            @click="go(-1)"
          >
            <ChevronLeftIcon class="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            :aria-label="t('projects.next')"
            class="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 shadow text-gray-700 dark:text-gray-200 hover:text-primary-600 focus-ring"
            @click="go(1)"
          >
            <ChevronRightIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </template>
      </div>

      <figcaption class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
        {{ current.caption }}
      </figcaption>
    </figure>
  </dialog>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/vue/24/outline'

// `shots` : [{ src, caption }]. Le parent appelle `open(index)` via une ref de template.
const props = defineProps({
  title: { type: String, default: '' },
  shots: { type: Array, default: () => [] }
})

const { t } = useI18n()

const dialog = ref(null)
const index = ref(0)
const current = computed(() => props.shots[index.value])

const open = (startIndex = 0) => {
  index.value = startIndex
  document.documentElement.style.overflow = 'hidden'
  dialog.value.showModal()
}

const close = () => dialog.value.close()

const onClose = () => {
  document.documentElement.style.overflow = ''
}

const go = (step) => {
  const total = props.shots.length
  index.value = (index.value + step + total) % total
}

// Un clic sur le fond (hors de la figure) ferme la visionneuse.
const onBackdropClick = (event) => {
  if (event.target === dialog.value) close()
}

defineExpose({ open })
</script>
