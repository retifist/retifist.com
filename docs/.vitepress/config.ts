import { defineConfig } from 'vitepress'

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

export default defineConfig({
  title: 'Retifist',
  description: 'Latex garment-making tutorials, patterns, and technique — SFW educational hub.',
  base: '/',
  appearance: 'force-dark',
  cleanUrls: true,
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,500;0,7..72,600;0,7..72,700;1,7..72,400&family=Syne:wght@600;700;800&display=swap',
      },
    ],
    ['link', { rel: 'icon', href: '/brand/logo-good-4.svg', type: 'image/svg+xml' }],
  ],
  themeConfig: {
    logo: { src: '/brand/logo-good-4.svg', alt: 'Retifist' },
    siteTitle: 'Retifist',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Lessons', link: '/lessons/' },
      { text: 'Patterns', link: '/patterns/' },
      { text: 'Technique', link: '/technique/' },
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
      '/projects/': [
        {
          text: 'Projects',
          items: [{ text: 'Examples and tags', link: '/projects/' }],
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
