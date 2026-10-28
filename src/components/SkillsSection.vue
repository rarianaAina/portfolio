<template>
  <section id="skills" class="py-16 lg:py-24 section-padding bg-white dark:bg-gray-800">
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
            <li v-for="skill in category.skills" :key="skill" class="skill-badge">
              {{ category.translate ? t(`skills.soft.${skill}`) : skill }}
            </li>
          </ul>
        </li>
      </ul>

      <div class="mt-16">
        <h3
          class="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8"
        >
          {{ t('skills.main_title') }}
        </h3>
        <ul class="flex flex-wrap justify-center gap-4">
          <li
            v-for="skill in mainSkills"
            :key="skill.name"
            class="bg-white dark:bg-gray-700 rounded-xl px-6 py-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-600 text-center w-32"
          >
            <div class="text-3xl mb-2" aria-hidden="true">{{ skill.icon }}</div>
            <p class="font-semibold text-gray-900 dark:text-white text-sm">
              {{ skill.name }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// `key` référence une clé de traduction ; les noms de technologies ne se traduisent pas.
const skillCategories = [
  {
    key: 'backend',
    icon: '⚙️',
    skills: ['C# / .NET', 'Java', 'Spring Boot', 'Spring Security', 'JPA/Hibernate', 'Node.js / Express', 'Python']
  },
  {
    key: 'frontend',
    icon: '🎨',
    skills: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'HTML5/CSS3']
  },
  {
    key: 'database',
    icon: '💾',
    skills: ['SQL Server', 'PostgreSQL', 'Supabase', 'MySQL', 'MongoDB', 'Redis']
  },
  {
    key: 'devops',
    icon: '🔧',
    skills: ['Git', 'GitHub Actions', 'Docker', 'Linux', 'Nginx', 'Vercel']
  },
  {
    key: 'tools',
    icon: '🛠️',
    skills: ['Odoo 19', 'Webflow', 'Jira', 'Postman', 'Figma', 'VS Code', 'IntelliJ IDEA']
  },
  {
    key: 'soft_skills',
    icon: '🧠',
    translate: true,
    skills: ['problem_solving', 'teamwork', 'communication', 'autonomy', 'curiosity']
  }
]

const mainSkills = [
  { name: 'C# / .NET', icon: '🟣' },
  { name: 'Java', icon: '☕' },
  { name: 'Spring Boot', icon: '🍃' },
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Supabase', icon: '⚡' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Docker', icon: '🐳' }
]
</script>
