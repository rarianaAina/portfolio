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
    // Dépôts pos-mobile-money-reference-odoo et pos-mobile-money-reconciliation-odoo :
    // privés pour l'instant (404). Les remettre ici (clés repo_reference / repo_reconciliation) une fois publics.
    repositories: [],
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

// Autres réalisations (freelance, applications personnelles), affichées en format compact.
// `siteUrl` : site ou démo en ligne, facultatif.
export const otherProjects = [
  {
    id: 'harrys-studio',
    technologies: ['React', 'Vite', 'Supabase'],
    siteUrl: 'https://harrys-studio.com'
  },
  {
    id: 'mobi-stock',
    technologies: ['React', 'TypeScript', 'Tauri', 'SQLite'],
    githubUrl: 'https://github.com/rarianaAina/boutique'
  },
  {
    id: 'caisse',
    technologies: ['React', 'TypeScript', 'Tauri', 'NestJS'],
    githubUrl: 'https://github.com/rarianaAina/caisse'
  },
  {
    id: 'live-erp',
    technologies: ['React', 'TypeScript', 'Supabase', 'Tauri'],
    siteUrl: 'https://live-erp.vercel.app',
    githubUrl: 'https://github.com/rarianaAina/live-erp'
  },
  {
    id: 'fotoanako',
    technologies: ['React', 'TypeScript', 'Supabase'],
    siteUrl: 'https://fotoanako.vercel.app',
    githubUrl: 'https://github.com/rarianaAina/fotoanako'
  },
  {
    id: 'school-management',
    technologies: ['React', 'TypeScript', 'Supabase'],
    githubUrl: 'https://github.com/rarianaAina/school-management'
  }
]
