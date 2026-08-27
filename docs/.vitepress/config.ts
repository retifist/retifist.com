import { defineConfig } from 'vitepress'
import { relativePathToLlmsPath } from './theme/utils/llmsPaths'
import { vitepressMathConfig } from './markdown/math'
import { isMermaidFence } from './theme/utils/mermaid'

const lessonsStartSmall = [
  { text: '00 — Prep, materials, and safety', link: '/lessons/start-small/00-prep-materials-safety' },
  { text: '01 — Bow on strap — real-time glue', link: '/lessons/start-small/01-bow-on-strap' },
  { text: '02 — Boot sock pattern', link: '/lessons/start-small/02-boot-sock-pattern' },
  { text: '03 — Boot sock cut and glue', link: '/lessons/start-small/03-boot-sock-cut-glue' },
  { text: '04 — Pattern fit adjustment', link: '/lessons/start-small/04-pattern-fit-adjustment' },
  { text: '05 — Paneling stripe', link: '/lessons/start-small/05-paneling-stripe' },
  { text: '06 — Appliqué flame', link: '/lessons/start-small/06-applique-flame' },
  { text: '07 — Inner heel fasteners', link: '/lessons/start-small/07-inner-heel-fasteners' },
]

const patternsStartSmall = [
  { text: 'Bow', link: '/patterns/start-small/bow/' },
  { text: 'Basic shoe sock', link: '/patterns/start-small/basic-shoe-sock/' },
]

const techniqueItems = [
  { text: '1 — Glue in real time', link: '/technique/1-glue-real-time' },
  { text: '2 — Glue prep protocol', link: '/technique/2-glue-prep-protocol' },
  { text: '3 — Cure timing and strength', link: '/technique/3-glue-cure-timing' },
  { text: '4 — Heptane safety', link: '/technique/4-heptane-safety' },
  { text: '5 — Glue tools compared', link: '/technique/5-glue-tools-compared' },
  { text: '6 — Shaping seams masterclass', link: '/technique/6-shaping-seams-masterclass' },
  { text: '7 — Seam-width lab', link: '/technique/7-seam-width-lab' },
]

const literatureReviewItems = [
  { text: 'Adhesives and Seam Integrity', link: '/literature-reviews/adhesives-and-seam-integrity' },
  { text: 'Aging, Storage and Care', link: '/literature-reviews/aging-storage-and-care' },
  { text: 'Allergy and Skin Contact', link: '/literature-reviews/allergy-and-skin-contact' },
  { text: 'Sheet vs Liquid Film Pathways', link: '/literature-reviews/sheet-vs-liquid-film-pathways' },
  { text: 'Latex Textile Bonding', link: '/literature-reviews/latex-textile-bonding' },
]

export default defineConfig({
  title: 'Retifist',
  description: 'Latex garment-making tutorials, patterns, and technique — SFW educational hub.',
  base: '/',
  appearance: 'force-dark',
  cleanUrls: true,
  // Static agent stubs / transcripts live under public/ — do not treat as VitePress pages
  srcExclude: ['**/public/**'],
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,500;0,7..72,600;0,7..72,700;1,7..72,400&family=Syne:wght@600;700;800&display=swap',
      },
    ],
    ['link', { rel: 'icon', href: '/brand/logo-good-5.svg', type: 'image/svg+xml' }],
  ],
  transformHead({ pageData }) {
    const href = relativePathToLlmsPath(pageData.relativePath || 'index.md')
    return [['link', { rel: 'alternate', type: 'text/markdown', href }]]
  },
  markdown: {
    math: vitepressMathConfig(),
    config(md) {
      const defaultFence = md.renderer.rules.fence!
      md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        if (isMermaidFence(token.info)) {
          return `<MermaidDiagram code="${encodeURIComponent(token.content)}" />\n`
        }
        return defaultFence(tokens, idx, options, env, self)
      }
    },
  },
  themeConfig: {
    logo: { src: '/brand/logo-good-4.svg', alt: 'Retifist' },
    siteTitle: 'Retifist',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Lessons', link: '/lessons/' },
      { text: 'Patterns', link: '/patterns/' },
      { text: 'Technique', link: '/technique/' },
      { text: 'Literature reviews', link: '/literature-reviews/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Downloads', link: '/downloads/' },
      { text: 'Safety', link: '/safety/' },
      { text: 'About', link: '/about/' },
      { text: 'Links', link: '/links/' },
    ],
    sidebar: {
      '/lessons/': [
        {
          text: 'Lessons',
          items: [
            { text: 'Overview', link: '/lessons/' },
            {
              text: 'Start Small',
              collapsed: false,
              items: [
                { text: 'Collection hub', link: '/lessons/start-small/' },
                ...lessonsStartSmall,
              ],
            },
          ],
        },
      ],
      '/patterns/': [
        {
          text: 'Patterns',
          items: [
            { text: 'Overview', link: '/patterns/' },
            {
              text: 'Start Small',
              collapsed: false,
              items: [
                { text: 'Collection hub', link: '/patterns/start-small/' },
                ...patternsStartSmall,
              ],
            },
          ],
        },
      ],
      '/technique/': [
        {
          text: 'Technique',
          items: [
            { text: 'Overview', link: '/technique/' },
            ...techniqueItems,
          ],
        },
      ],
      '/literature-reviews/': [
        {
          text: 'Literature reviews',
          items: [
            { text: 'Overview', link: '/literature-reviews/' },
            ...literatureReviewItems,
          ],
        },
      ],
      '/projects/': [
        {
          text: 'Projects',
          items: [
            { text: 'Examples and tags', link: '/projects/' },
            { text: 'Agent surface demo', link: '/projects/agent-surface-demo' },
          ],
        },
      ],
      '/downloads/': [
        {
          text: 'Downloads',
          items: [{ text: 'PDF patterns', link: '/downloads/' }],
        },
      ],
      '/safety/': [
        {
          text: 'Safety',
          items: [{ text: 'Workshop safety', link: '/safety/' }],
        },
      ],
    },
    docFooter: {
      prev: 'Previous lesson',
      next: 'Next lesson',
    },
    search: {
      provider: 'local',
    },
    socialLinks: [],
    outline: { level: [2, 3] },
  },
})
