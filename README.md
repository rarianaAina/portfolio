# Portfolio — Rariana Aina Andriamiadana

Personal portfolio built with **Vue 3**, **Vite** and **Tailwind CSS**, available in English and French.

[![CI](https://github.com/rarianaAina/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/rarianaAina/portfolio/actions/workflows/ci.yml)

## Features

- Single-page site with `Hero`, `About`, `Projects`, `Skills` and `Contact` sections
- Full **English / French** internationalisation (`vue-i18n`), including project descriptions
- Language auto-detected from the browser, then remembered in `localStorage`
- **Dark mode** following the system preference, with a manual override and no flash on load
- Accessibility: skip link, visible focus rings, labelled controls, `prefers-reduced-motion` support
- SEO: localised `<title>` / `<meta description>`, Open Graph and Twitter cards
- Contact form handled by **Netlify Forms** with a honeypot field

## Requirements

- Node.js 20 or later
- npm 10 or later

## Getting started

```bash
npm ci        # install dependencies
npm run dev   # start the dev server on http://localhost:5173
```

## Available scripts

| Script             | Description                                  |
| ------------------ | -------------------------------------------- |
| `npm run dev`      | Start the Vite dev server with hot reload    |
| `npm run build`    | Build the production bundle into `dist/`     |
| `npm run preview`  | Serve the production build locally           |
| `npm run lint`     | Run ESLint over the project                  |
| `npm run lint:fix` | Run ESLint and apply the fixes it can make   |

## Project structure

```
src/
├─ assets/          # images shipped through the bundler (optimised WebP)
├─ components/      # one component per section, plus icons/
├─ composables/     # useTheme (dark mode), useDocumentMeta (title, lang, OG)
├─ data/            # projects.js and site.js — content and links, no markup
├─ locales/         # en.json / fr.json — every user-facing string
├─ i18n.js          # vue-i18n setup and locale detection
└─ style.css        # Tailwind layers and shared component classes
public/             # served as-is: résumé PDF, favicon, Open Graph image
```

## Editing the content

- **Wording** (any language): `src/locales/en.json` and `src/locales/fr.json`. Both files must keep the exact same keys.
- **Projects**: add an entry to `src/data/projects.js` (id, icon, stack, GitHub URL), then add a matching `projects.items.<id>` block with `name` and `description` in *both* locale files.
- **Contact details and links**: `src/data/site.js`.
- **Résumé**: replace `public/cv-rariana-andriamiadana.pdf`, keeping the same file name (or update `cvPath` and `cvFileName` in `src/data/site.js`).

## Deployment

The site is deployed on **Netlify**; `netlify.toml` sets the build command and the `dist` publish directory.

Two things to check after the first deploy:

1. **Netlify Forms** — the contact form is detected from the hidden static form in `index.html`. Submissions land in *Site settings → Forms*; add a notification email there.
2. **Open Graph URLs** — `index.html` currently points to `/og-image.png` with a relative path. Once the final domain is known, replace the `og:image` and `twitter:image` values with absolute URLs, as some crawlers (LinkedIn in particular) reject relative ones.

## License

The source code is available for reference. The written content, the résumé and the portrait remain the property of Rariana Aina Andriamiadana.
