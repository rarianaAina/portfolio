<template>
  <section id="competences" class="py-16 lg:py-24 section-padding bg-white dark:bg-gray-800">
    <div class="container-max">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Mes Compétences
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Voici les technologies et outils que je maîtrise pour créer des solutions innovantes.
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="category in skillCategories" 
          :key="category.name"
          class="card p-6 animate-slide-up"
        >
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white text-xl mr-4">
              {{ category.icon }}
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ category.name }}
            </h3>
          </div>
          
          <div class="flex flex-wrap gap-3">
            <span 
              v-for="skill in category.skills" 
              :key="skill"
              class="skill-badge"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
      
      <!-- Main Skills Highlight -->
      <div class="mt-16">
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">
          Technologies Principales
        </h3>
        <div class="flex flex-wrap justify-center gap-4">
          <div 
            v-for="(skill, index) in mainSkills" 
            :key="skill.name"
            class="group"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 dark:border-gray-600">
              <div class="text-4xl mb-3 text-center">{{ skill.icon }}</div>
              <div class="text-center">
                <h4 class="font-semibold text-gray-900 dark:text-white mb-1">{{ skill.name }}</h4>
                <p class="text-sm text-gray-600 dark:text-gray-300">{{ skill.level }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  setup() {
    const skillCategories = [
      {
        name: 'Backend',
        icon: '⚙️',
        skills: ['Java', 'Spring Boot', 'Spring Security', 'JPA/Hibernate', 'Maven']
      },
      {
        name: 'Frontend',
        icon: '🎨',
        skills: ['Vue.js', 'React', 'JavaScript', 'Tailwind CSS', 'HTML5/CSS3']
      },
      {
        name: 'Base de données',
        icon: '💾',
        skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQL']
      },
      {
        name: 'DevOps',
        icon: '🔧',
        skills: ['Docker', 'Git', 'GitHub Actions', 'Linux', 'Nginx']
      },
      {
        name: 'Outils',
        icon: '🛠️',
        skills: ['IntelliJ IDEA', 'VS Code', 'Postman', 'Figma', 'Slack']
      },
      {
        name: 'Soft Skills',
        icon: '🧠',
        skills: ['Problem Solving', 'Team Work', 'Communication', 'Leadership', 'Creativity']
      }
    ]
    
    const mainSkills = [
      { name: 'Java', icon: '☕', level: 'Expert' },
      { name: 'Spring Boot', icon: '🍃', level: 'Expert' },
      { name: 'PostgreSQL', icon: '🐘', level: 'Avancé' },
      { name: 'Tailwind CSS', icon: '🎨', level: 'Expert' },
      { name: 'Docker', icon: '🐳', level: 'Intermédiaire' },
      { name: 'Git', icon: '📝', level: 'Expert' }
    ]
    
    return {
      skillCategories,
      mainSkills
    }
  }
}
</script>