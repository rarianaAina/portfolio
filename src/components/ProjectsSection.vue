<template>
  <section id="projets" class="py-16 lg:py-24 section-padding">
    <div class="container-max">
      <div class="text-center mb-16">
        <h2
          class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Mes Projets
        </h2>
        <div
          class="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-6"
        ></div>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Découvrez une sélection de mes projets récents qui démontrent mes
          compétences techniques et ma créativité.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="card p-6 group hover:-translate-y-2 relative overflow-hidden"
          :class="{ 'animate-slide-up': true }"
          :style="{ animationDelay: `${index * 0.1}s` }"
          @mouseenter="hoveredProject = project.id"
          @mouseleave="hoveredProject = null"
        >
          <!-- Project Screenshot Overlay - Modifié pour ne pas couvrir les boutons -->
          <div
            v-if="hoveredProject === project.id && project.screenshot"
            class="absolute inset-0 bg-black/90 flex flex-col items-center justify-start pt-4 z-10 animate-fade-in"
          >
            <div
              class="h-[calc(100%-80px)] w-full flex items-center justify-center"
            >
              <img
                :src="project.screenshot"
                :alt="`Capture d'écran de ${project.name}`"
                class="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>

            <!-- Boutons visibles même pendant le survol -->
            <div class="flex gap-3 mt-auto w-full pb-4">
              <a
                :href="project.githubUrl"
                target="_blank"
                class="flex-1 btn-primary text-center text-sm py-2"
              >
                <div class="flex items-center justify-center space-x-2">
                  <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                  <span>GitHub</span>
                </div>
              </a>

              <button
                v-if="project.screenshot"
                @click.stop="
                  hoveredProject =
                    hoveredProject === project.id ? null : project.id
                "
                class="btn-secondary px-3 py-2 text-sm md:hidden"
              >
                📱
              </button>
            </div>
          </div>

          <!-- Contenu normal de la carte -->
          <div class="mb-4">
            <div
              class="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white text-2xl mb-4"
            >
              {{ project.icon }}
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              {{ project.name }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {{ project.description }}
            </p>
          </div>

          <div class="mb-4">
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Boutons en bas de la carte (visibles quand pas de survol) -->
          <div class="flex gap-3 mt-auto" v-if="hoveredProject !== project.id">
            <a
              :href="project.githubUrl"
              target="_blank"
              class="flex-1 btn-primary text-center text-sm py-2"
            >
              <div class="flex items-center justify-center space-x-2">
                <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.373-12-12-12z"
                  />
                </svg>
                <span>GitHub</span>
              </div>
            </a>

            <button
              v-if="project.screenshot"
              @click.stop="
                hoveredProject =
                  hoveredProject === project.id ? null : project.id
              "
              class="btn-secondary px-3 py-2 text-sm md:hidden"
            >
              📱
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ProjectsSection',
  setup() {
    const hoveredProject = ref(null)

    const projects = [
      {
        id: 1,
        name: 'Analyse Financière Fullstack',
        description: 'Application complète d\'analyse financière avec backend Spring Boot et frontend React. Gestion des états financiers et tableaux de bord analytiques.',
        icon: '💰',
        technologies: ['Java', 'Spring Boot', 'VueJS', 'PostgreSQL'],
        githubUrl: 'https://github.com/rarianaAina/analyse-financiere-frontend',
        screenshot: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg'
      },
      {
        id: 2,
        name: 'Système de Gestion Aérienne',
        description: 'Application backend pour la gestion des vols et avions avec Spring Boot. Implémentation complète CRUD avec relations complexes.',
        icon: '✈️',
        technologies: ['Java', 'Spring Boot', 'JPA', 'PostgreSQL'],
        githubUrl: 'https://github.com/rarianaAina/avion_springboot',
        screenshot: 'https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg'
      },
      {
        id: 3,
        name: 'Gestion de Boulangerie',
        description: 'Système complet de gestion pour boulangerie avec gestion des stocks, ventes et employés. Architecture microservices.',
        icon: '🍞',
        technologies: ['Java', 'Spring Boot', 'Microservices', 'PostgreSQL'],
        githubUrl: 'https://github.com/rarianaAina/gestionBoulangerie',
        screenshot: 'https://images.pexels.com/photos/2067405/pexels-photo-2067405.jpeg'
      },
      {
        id: 4,
        name: 'Application Crypto Mobile',
        description: 'Application mobile de suivi des cryptomonnaies avec historique des transactions et analyse de marché.',
        icon: '📱',
        technologies: ['React Native', 'API REST', 'Firebase'],
        githubUrl: 'https://github.com/rarianaAina/mobileCrypto',
        screenshot: 'https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg'
      },
      {
        id: 5,
        name: 'Système RH HumanHR',
        description: 'Plateforme complète de gestion des ressources humaines avec gestion des employés, congés et paies.',
        icon: '👔',
        technologies: ['Java', 'Spring Boot', 'VueJS', 'PostgreSQL'],
        githubUrl: 'https://github.com/rarianaAina/humanResource',
        screenshot: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg'
      },
      {
        id: 6,
        name: 'Analyse Football',
        description: 'Application d\'analyse statistique des matchs de football avec visualisation des données et prédictions.',
        icon: '⚽',
        technologies: ['Python', 'MysQL', 'Matplotlib'],
        githubUrl: 'https://github.com/rarianaAina/analyse-football',
        screenshot: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg'
      },
      {
        id: 7,
        name: 'Système d\'Authentification',
        description: 'Module sécurisé d\'authentification avec JWT, rôles et permissions. Prêt à intégrer dans n\'importe quelle application Node.js.',
        icon: '🔐',
        technologies: ['Node.js', 'Express', 'JWT'],
        githubUrl: 'https://github.com/rarianaAina/authNode',
        screenshot: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg'
      },
      {
        id: 8,
        name: 'Plateforme Immobilière API',
        description: 'API RESTful pour une plateforme immobilière avec gestion des biens, recherches avancées et géolocalisation.',
        icon: '🏠',
        technologies: ['Java', 'Spring Boot'],
        githubUrl: 'https://github.com/rarianaAina/immoAPI',
        screenshot: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg'
      }
    ]

    return {
      projects,
      hoveredProject
    }
  }
}
</script>
