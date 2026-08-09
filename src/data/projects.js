// Les libellés (nom, description) vivent dans src/locales/*.json sous `projects.items.<id>`.
// Ici on ne garde que les données non traduisibles : identifiant, icône, stack et lien.
export const projects = [
  {
    id: 'financial-analysis',
    icon: '💰',
    technologies: ['Java', 'Spring Boot', 'Vue.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/rarianaAina/analyse-financiere-frontend'
  },
  {
    id: 'airline-management',
    icon: '✈️',
    technologies: ['Java', 'Spring Boot', 'JPA', 'PostgreSQL'],
    githubUrl: 'https://github.com/rarianaAina/avion_springboot'
  },
  {
    id: 'bakery-management',
    icon: '🥖',
    technologies: ['Java', 'Spring Boot', 'Microservices', 'PostgreSQL'],
    githubUrl: 'https://github.com/rarianaAina/gestionBoulangerie'
  },
  {
    id: 'crypto-mobile',
    icon: '📱',
    technologies: ['React Native', 'REST API', 'Firebase'],
    githubUrl: 'https://github.com/rarianaAina/mobileCrypto'
  },
  {
    id: 'human-hr',
    icon: '👔',
    technologies: ['Java', 'Spring Boot', 'Vue.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/rarianaAina/humanResource'
  },
  {
    id: 'football-analytics',
    icon: '⚽',
    technologies: ['Python', 'MySQL', 'Matplotlib'],
    githubUrl: 'https://github.com/rarianaAina/analyse-football'
  },
  {
    id: 'auth-module',
    icon: '🔐',
    technologies: ['Node.js', 'Express', 'JWT'],
    githubUrl: 'https://github.com/rarianaAina/authNode'
  },
  {
    id: 'real-estate-api',
    icon: '🏠',
    technologies: ['Java', 'Spring Boot', 'REST API'],
    githubUrl: 'https://github.com/rarianaAina/immoAPI'
  }
]
