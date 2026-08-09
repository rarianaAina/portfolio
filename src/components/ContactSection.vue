<template>
  <section id="contact" class="py-16 lg:py-24 section-padding">
    <div class="container-max">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ t('contact.title') }}
        </h2>
        <div
          class="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-6"
        />
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {{ t('contact.subtitle') }}
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Coordonnées -->
          <div class="animate-slide-up">
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              {{ t('contact.stay_connected') }}
            </h3>

            <ul class="space-y-6">
              <li v-for="channel in channels" :key="channel.key" class="flex items-center space-x-4">
                <div
                  class="w-12 h-12 shrink-0 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400"
                >
                  <component :is="channel.icon" class="h-6 w-6" aria-hidden="true" />
                </div>
                <div class="min-w-0">
                  <h4 class="font-medium text-gray-900 dark:text-white">
                    {{ t(`contact.${channel.key}`) }}
                  </h4>
                  <a
                    :href="channel.href"
                    :target="channel.external ? '_blank' : undefined"
                    :rel="channel.external ? 'noopener noreferrer' : undefined"
                    class="text-primary-600 dark:text-primary-400 hover:underline break-words rounded focus-ring"
                  >
                    {{ channel.label }}
                  </a>
                </div>
              </li>
            </ul>

            <div class="mt-8">
              <h4 class="font-medium text-gray-900 dark:text-white mb-4">
                {{ t('contact.follow') }}
              </h4>
              <ul class="flex space-x-4">
                <li v-for="channel in channels" :key="channel.key">
                  <a
                    :href="channel.href"
                    :target="channel.external ? '_blank' : undefined"
                    :rel="channel.external ? 'noopener noreferrer' : undefined"
                    :aria-label="t(`contact.${channel.key}`)"
                    class="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 focus-ring"
                  >
                    <component :is="channel.icon" class="h-5 w-5" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <!-- Formulaire (traité par Netlify Forms) -->
          <div class="animate-slide-up">
            <h3 class="sr-only">{{ t('contact.form_title') }}</h3>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              class="space-y-6"
              @submit.prevent="handleSubmit"
            >
              <p class="hidden">
                <label>
                  Do not fill this out if you are human:
                  <input v-model="honeypot" name="bot-field" tabindex="-1" autocomplete="off">
                </label>
              </p>

              <div v-for="field in fields" :key="field.name">
                <label
                  :for="field.name"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {{ t(`contact.form_${field.name}`) }}
                </label>
                <component
                  :is="field.multiline ? 'textarea' : 'input'"
                  :id="field.name"
                  v-model="form[field.name]"
                  :name="field.name"
                  :type="field.multiline ? undefined : field.type"
                  :rows="field.multiline ? 5 : undefined"
                  :autocomplete="field.autocomplete"
                  :placeholder="t(`contact.form_${field.name}_placeholder`)"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-800 focus:border-primary-500 transition-colors duration-200"
                />
              </div>

              <button type="submit" class="w-full btn-primary" :disabled="status === 'sending'">
                {{ status === 'sending' ? t('contact.form_sending') : t('contact.form_submit') }}
              </button>

              <p
                v-if="status === 'success'"
                role="status"
                class="rounded-lg bg-green-50 dark:bg-green-900/40 px-4 py-3 text-sm text-green-800 dark:text-green-200"
              >
                {{ t('contact.form_success') }}
              </p>
              <p
                v-else-if="status === 'error'"
                role="alert"
                class="rounded-lg bg-red-50 dark:bg-red-900/40 px-4 py-3 text-sm text-red-800 dark:text-red-200"
              >
                {{ t('contact.form_error', { email: site.email }) }}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { EnvelopeIcon } from '@heroicons/vue/24/outline'
import { useI18n } from 'vue-i18n'
import GithubIcon from './icons/GithubIcon.vue'
import LinkedinIcon from './icons/LinkedinIcon.vue'
import { site } from '../data/site'

const { t } = useI18n()

const channels = [
  { key: 'email', icon: EnvelopeIcon, href: `mailto:${site.email}`, label: site.email },
  {
    key: 'github',
    icon: GithubIcon,
    href: site.githubUrl,
    label: `github.com/${site.githubUser}`,
    external: true
  },
  {
    key: 'linkedin',
    icon: LinkedinIcon,
    href: site.linkedinUrl,
    label: t('contact.linkedin_value'),
    external: true
  }
]

const fields = [
  { name: 'name', type: 'text', autocomplete: 'name' },
  { name: 'email', type: 'email', autocomplete: 'email' },
  { name: 'subject', type: 'text', autocomplete: 'off' },
  { name: 'message', multiline: true, autocomplete: 'off' }
]

const form = reactive({ name: '', email: '', subject: '', message: '' })
const honeypot = ref('')
const status = ref('idle')

const handleSubmit = async () => {
  status.value = 'sending'
  try {
    const body = new URLSearchParams({
      'form-name': 'contact',
      'bot-field': honeypot.value,
      ...form
    })
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body
    })
    if (!response.ok) throw new Error(`Netlify Forms responded with ${response.status}`)

    status.value = 'success'
    Object.assign(form, { name: '', email: '', subject: '', message: '' })
  } catch {
    status.value = 'error'
  }
}
</script>
