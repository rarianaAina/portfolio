// Les libellés (nom, description, légendes) vivent dans src/locales/*.json sous `projects.items.<id>`.
// Ici on ne garde que les données non traduisibles : identifiant, stack, liens et captures.

// Captures : src/assets/projects/<id>/<slug>.webp, avec une miniature <slug>-thumb.webp.
// Chaque capture a une légende dans les locales sous `projects.items.<id>.shots.<slug>`.
const images = import.meta.glob('../assets/projects/*/*.webp', { eager: true, import: 'default' })

const shots = (projectId, slugs) =>
  slugs.map((slug) => ({
    slug,
    src: images[`../assets/projects/${projectId}/${slug}.webp`],
    thumb: images[`../assets/projects/${projectId}/${slug}-thumb.webp`]
  }))

// Sites livrés à des clients en freelance.
export const clientProjects = [
  {
    id: 'harrys-studio',
    siteUrl: 'https://harrys-studio.com',
    technologies: ['React', 'Vite', 'Supabase', 'Tailwind CSS', 'Framer Motion'],
    shots: shots('harrys-studio', ['home', 'booking'])
  },
  {
    id: 'agentova',
    siteUrl: 'https://agentova.ai',
    technologies: ['Webflow'],
    shots: shots('agentova', ['home'])
  }
]

// Applications personnelles déployées : démo en ligne et code.
export const featuredProjects = [
  {
    id: 'live-erp',
    demoUrl: 'https://live-erp.vercel.app',
    githubUrl: 'https://github.com/rarianaAina/live-erp',
    technologies: ['React', 'TypeScript', 'Supabase', 'Tauri', 'Tailwind CSS'],
    shots: []
  },
  {
    id: 'fotoanako',
    demoUrl: 'https://fotoanako.vercel.app',
    githubUrl: 'https://github.com/rarianaAina/fotoanako',
    technologies: ['React', 'TypeScript', 'Supabase', 'Edge Functions', 'Tailwind CSS'],
    shots: shots('fotoanako', ['home'])
  },
  {
    id: 'revisions-qcm',
    demoUrl: 'https://revisions-qcm.vercel.app',
    githubUrl: 'https://github.com/rarianaAina/revisions-qcm',
    technologies: ['Next.js', 'React', 'PostgreSQL', 'Zod', 'API LLM'],
    shots: shots('revisions-qcm', ['dashboard'])
  },
  {
    id: 'metiers-tension',
    demoUrl: 'https://freelance-gratis.vercel.app',
    githubUrl: 'https://github.com/rarianaAina/metiers-tension',
    technologies: ['JavaScript', 'Node.js', 'GitHub Actions', 'API Légifrance', 'API France Travail'],
    shots: shots('metiers-tension', ['home'])
  },
  {
    id: 'school-management',
    demoUrl: '',
    githubUrl: 'https://github.com/rarianaAina/school-management',
    technologies: ['React', 'TypeScript', 'Supabase', 'Zod', 'Vitest'],
    shots: []
  }
]

// Modules Odoo publics, présentés dans l'encart « Spécialité Odoo ».
// Les dépôts Mobile Money (pos-mobile-money-reference-odoo, pos-mobile-money-reconciliation-odoo)
// ne sont pas publics pour l'instant : les ajouter ici, avec une clé de libellé, une fois publiés.
export const odooRepositories = []

// Projets antérieurs (personnels et académiques), affichés en format compact.
export const otherProjects = [
  {
    id: 'financial-analysis',
    technologies: ['Java', 'Spring Boot', 'Vue.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/rarianaAina/analyse-financiere-frontend'
  },
  {
    id: 'crypto-mobile',
    technologies: ['React Native', 'Expo', 'Firebase'],
    githubUrl: 'https://github.com/rarianaAina/mobileCrypto'
  },
  {
    id: 'crypto-web',
    technologies: ['Java', 'Spring Boot', 'JSP', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/rarianaAina/projet-web-S5-crypto'
  },
  {
    id: 'football-vision',
    technologies: ['Java', 'Swing', 'OpenCV', 'PostgreSQL'],
    githubUrl: 'https://github.com/rarianaAina/analyse-football'
  },
  {
    id: 'flight-booking',
    technologies: ['Java', 'Spring Boot', 'JSP', 'PostgreSQL'],
    githubUrl: 'https://github.com/rarianaAina/avion_springboot'
  }
]
