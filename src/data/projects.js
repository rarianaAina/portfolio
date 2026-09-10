// Les libellés (nom, contexte, réalisations, légendes) vivent dans src/locales/*.json.
// Ici on ne garde que les données non traduisibles : identifiant, applications, stack, liens, captures.

// Captures : src/assets/projects/<id>/<slug>.webp, avec une miniature <slug>-thumb.webp.
// Chaque capture a une légende dans les locales sous `projects.odoo.<id>.shots.<slug>`.
const images = import.meta.glob('../assets/projects/*/*.webp', { eager: true, import: 'default' })

const shots = (projectId, slugs) =>
  slugs.map((slug) => ({
    slug,
    src: images[`../assets/projects/${projectId}/${slug}.webp`],
    thumb: images[`../assets/projects/${projectId}/${slug}-thumb.webp`]
  }))

// Projets Odoo menés pour des clients : présentés de façon anonyme,
// captures réalisées sur des bases de démonstration aux données fictives.
export const odooProjects = [
  {
    id: 'mobile-money',
    apps: ['pos', 'accounting'],
    technologies: ['Python', 'OWL', 'XML', 'QWeb'],
    repositories: [
      {
        key: 'repo_reference',
        url: 'https://github.com/rarianaAina/pos-mobile-money-reference-odoo'
      },
      {
        key: 'repo_reconciliation',
        url: 'https://github.com/rarianaAina/pos-mobile-money-reconciliation-odoo'
      }
    ],
    shots: shots('mobile-money', [
      'reference-entry',
      'reused-reference',
      'statement-missing',
      'amount-differences',
      'control-report'
    ])
  },
  {
    id: 'phone-retail',
    apps: ['purchase', 'inventory', 'pos', 'sales', 'invoicing'],
    technologies: ['Python', 'OWL', 'XML', 'QWeb'],
    repositories: [],
    shots: shots('phone-retail', [
      'imei-list',
      'pos-imei-selection',
      'pos-imei-scan',
      'imei-transfer',
      'rfq-import',
      'invoice-devices',
      'net-profit',
      'purchases-sales-unsold'
    ])
  },
  {
    id: 'consulting-firm',
    apps: ['invoicing', 'accounting', 'employees', 'payroll'],
    technologies: ['Python', 'OWL', 'XML', 'QWeb', 'SQL'],
    repositories: [],
    shots: shots('consulting-firm', [
      'invoice',
      'payslip',
      'payroll-batches',
      'final-settlement',
      'employee-notice',
      'general-ledger'
    ])
  },
  {
    id: 'freight-forwarder',
    apps: ['accounting', 'expenses'],
    technologies: ['Python', 'XML', 'QWeb', 'SQL'],
    repositories: [],
    shots: shots('freight-forwarder', [
      'shipping-file',
      'package-release',
      'margin',
      'payment-receipt',
      'customer-statement'
    ])
  }
]

// Projets antérieurs (personnels et académiques), affichés en format compact.
export const otherProjects = [
  {
    id: 'financial-analysis',
    technologies: ['Java', 'Spring Boot', 'Vue.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/rarianaAina/analyse-financiere-frontend'
  },
  {
    id: 'airline-management',
    technologies: ['Java', 'Spring Boot', 'JPA', 'PostgreSQL'],
    githubUrl: 'https://github.com/rarianaAina/avion_springboot'
  },
  {
    id: 'bakery-management',
    technologies: ['Java', 'Spring Boot', 'Microservices', 'PostgreSQL'],
    githubUrl: 'https://github.com/rarianaAina/gestionBoulangerie'
  },
  {
    id: 'crypto-mobile',
    technologies: ['React Native', 'REST API', 'Firebase'],
    githubUrl: 'https://github.com/rarianaAina/mobileCrypto'
  },
  {
    id: 'human-hr',
    technologies: ['Java', 'Spring Boot', 'Vue.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/rarianaAina/humanResource'
  },
  {
    id: 'football-analytics',
    technologies: ['Python', 'MySQL', 'Matplotlib'],
    githubUrl: 'https://github.com/rarianaAina/analyse-football'
  },
  {
    id: 'auth-module',
    technologies: ['Node.js', 'Express', 'JWT'],
    githubUrl: 'https://github.com/rarianaAina/authNode'
  },
  {
    id: 'real-estate-api',
    technologies: ['Java', 'Spring Boot', 'REST API'],
    githubUrl: 'https://github.com/rarianaAina/immoAPI'
  }
]
