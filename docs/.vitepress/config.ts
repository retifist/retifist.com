import { defineConfig } from 'vitepress'
import { relativePathToLlmsPath } from './theme/utils/llmsPaths'
import { vitepressMathConfig } from './markdown/math'
import { isMermaidFence } from './theme/utils/mermaid'
import { buildSeoHead, isAgentSitemapUrl, SITE_ORIGIN } from './theme/utils/seo'

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

const literatureReviewShared = [
  { text: 'Allergy and Skin Contact', link: '/literature-reviews/allergy-and-skin-contact' },
  { text: 'Compatibility Matrix', link: '/literature-reviews/compatibility-matrix-metals-oils-plastics' },
  { text: 'Body-region pressure sensitivity', link: '/literature-reviews/body-region-pressure-sensitivity' },
  { text: 'Pattern reduction → pressure', link: '/literature-reviews/pattern-reduction-pressure-targets' },
  { text: 'Reduction × pressure sensitivity', link: '/literature-reviews/reduction-and-pressure-sensitivity' },
  { text: 'Simulating natural rubber sheet in Clo3D', link: '/literature-reviews/clo3d-material-simulation' },
  { text: 'Adhesion and peel tests', link: '/literature-reviews/adhesion-peel-test-methods' },
]

const literatureReviewSheet = [
  { text: 'Sheet adhesives', link: '/literature-reviews/sheet-adhesives-and-seam-integrity' },
  { text: 'Sheet delamination', link: '/literature-reviews/sheet-delamination-seam-failure' },
  { text: 'Sheet latex–latex adhesion', link: '/literature-reviews/sheet-latex-latex-adhesion-testing' },
  { text: 'Sheet latex–substrate adhesion', link: '/literature-reviews/sheet-latex-substrate-adhesion-testing' },
  { text: 'Sheet aging and care', link: '/literature-reviews/sheet-aging-storage-and-care' },
  { text: 'Buying formed sheet', link: '/literature-reviews/sheet-film-pathway' },
  { text: 'Sheet textile bonding', link: '/literature-reviews/sheet-latex-textile-bonding' },
  { text: 'Colored sheet', link: '/literature-reviews/sheet-pigment-filler-decks' },
  { text: 'Printing on sheet', link: '/literature-reviews/sheet-printing-surface-decoration' },
  { text: 'Sheet surface finish', link: '/literature-reviews/sheet-surface-finish-literacy' },
  { text: 'Sheet gauge and modulus', link: '/literature-reviews/sheet-gauge-modulus-reduction' },
  { text: 'Calendered sheet', link: '/literature-reviews/sheet-calendered-sheet' },
  { text: 'Sheet reinforcement', link: '/literature-reviews/sheet-reinforcement-laminate-zones' },
  { text: 'Sheet edge finishing', link: '/literature-reviews/sheet-edge-finishing-materials' },
  { text: 'Sheet hardware', link: '/literature-reviews/sheet-hardware-metal-contact' },
  { text: 'Sheet zippers', link: '/literature-reviews/sheet-zipper-closure-compatibility' },
  { text: 'Sheet solvent ventilation', link: '/literature-reviews/sheet-ventilation-solvent-exposure' },
  { text: 'Sheet garment QA', link: '/literature-reviews/sheet-garment-selection-qa' },
]

const literatureReviewLiquid = [
  { text: 'Tree to liquid latex', link: '/literature-reviews/liquid-tree-to-liquid-latex' },
  { text: 'Hevea rubber tree', link: '/literature-reviews/liquid-hevea-rubber-tree' },
  { text: 'Plantation tapping', link: '/literature-reviews/liquid-plantation-tapping-field-latex' },
  { text: 'Field latex to concentrate', link: '/literature-reviews/liquid-field-latex-to-concentrate' },
  { text: 'Liquid adhesives', link: '/literature-reviews/liquid-adhesives-and-seam-integrity' },
  { text: 'Liquid delamination', link: '/literature-reviews/liquid-delamination-seam-failure' },
  { text: 'Liquid latex–latex adhesion', link: '/literature-reviews/liquid-latex-latex-adhesion-testing' },
  { text: 'Liquid latex–substrate adhesion', link: '/literature-reviews/liquid-latex-substrate-adhesion-testing' },
  { text: 'Liquid aging and care', link: '/literature-reviews/liquid-aging-storage-and-care' },
  { text: 'Forming film from liquid', link: '/literature-reviews/liquid-film-pathway' },
  { text: 'Liquid textile bonding', link: '/literature-reviews/liquid-latex-textile-bonding' },
  { text: 'Dip, cast, spread', link: '/literature-reviews/liquid-former-dip-vs-mould-cast-vs-flat-spread' },
  { text: 'Coagulant dipping', link: '/literature-reviews/liquid-coagulant-dipping-wearable-thickness' },
  { text: 'Heat-sensitized gelation', link: '/literature-reviews/liquid-heat-sensitized-gelation' },
  { text: 'Liquid film defects', link: '/literature-reviews/liquid-film-defect-atlas' },
  { text: 'Pigment compounding', link: '/literature-reviews/liquid-pigment-filler-decks' },
  { text: 'Liquid surface finish', link: '/literature-reviews/liquid-surface-finish-literacy' },
  { text: 'Chlorination', link: '/literature-reviews/liquid-chlorination-tack-control' },
  { text: 'Painting vs compounding', link: '/literature-reviews/liquid-painting-vs-compounding-pigment' },
  { text: 'Liquid gauge and modulus', link: '/literature-reviews/liquid-gauge-modulus-reduction' },
  { text: 'Home-cast film', link: '/literature-reviews/liquid-home-cast-film' },
  { text: 'Liquid reinforcement', link: '/literature-reviews/liquid-reinforcement-laminate-zones' },
  { text: 'Liquid edge finishing', link: '/literature-reviews/liquid-edge-finishing-materials' },
  { text: 'Liquid hardware', link: '/literature-reviews/liquid-hardware-metal-contact' },
  { text: 'Liquid zippers', link: '/literature-reviews/liquid-zipper-closure-compatibility' },
  { text: 'Ammonia ventilation', link: '/literature-reviews/liquid-ventilation-ammonia' },
  { text: 'Bottle labels', link: '/literature-reviews/liquid-decoding-bottle-labels' },
  { text: 'Prevulcanized latex', link: '/literature-reviews/liquid-prevulcanized-consumer-latex' },
  { text: 'Synthetic lattices', link: '/literature-reviews/liquid-synthetic-lattices' },
  { text: 'Latex foam', link: '/literature-reviews/liquid-foam-padding' },
  { text: 'Antidegradants', link: '/literature-reviews/liquid-antidegradants-diy-compounds' },
]

export default defineConfig({
  title: 'Retifist',
  description: 'Latex garment-making tutorials, patterns, and technique — SFW educational hub.',
  base: '/',
  appearance: 'force-dark',
  cleanUrls: true,
  vite: {
    assetsInclude: ['**/*.zfab'],
    plugins: [
      {
        name: 'retifist-zfab-mime',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url && /\.zfab(\?|$)/.test(req.url)) {
              res.setHeader('Content-Type', 'application/octet-stream')
            }
            next()
          })
        },
      },
    ],
  },
  sitemap: {
    hostname: SITE_ORIGIN,
    transformItems(items) {
      return items.filter((item) => !isAgentSitemapUrl(item.url))
    },
  },
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
    const relativePath = pageData.relativePath || 'index.md'
    const seo = buildSeoHead({
      relativePath,
      title: pageData.title,
      description: pageData.description,
      frontmatter: pageData.frontmatter,
    })
    if (relativePath === '404.md') return seo
    return [...seo, ['link', { rel: 'alternate', type: 'text/markdown', href: relativePathToLlmsPath(relativePath) }]]
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
            { text: 'Shared', collapsed: false, items: literatureReviewShared },
            { text: 'Sheet pathway', collapsed: false, items: literatureReviewSheet },
            { text: 'Liquid pathway', collapsed: true, items: literatureReviewLiquid },
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
          items: [
            { text: 'PDF patterns', link: '/downloads/' },
            { text: 'Clo3D natural rubber fabrics', link: '/downloads/#clo3d-nr-sheet-presets' },
          ],
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
    notFound: {
      quote: 'This page slipped, stretched, and split.',
    },
  },
})
