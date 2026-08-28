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
  { text: 'Delamination & Seam Failure Atlas', link: '/literature-reviews/delamination-seam-failure-atlas' },
  { text: 'Aging, Storage and Care', link: '/literature-reviews/aging-storage-and-care' },
  { text: 'Allergy and Skin Contact', link: '/literature-reviews/allergy-and-skin-contact' },
  { text: 'Compatibility Matrix', link: '/literature-reviews/compatibility-matrix-metals-oils-plastics' },
  { text: 'Sheet vs Liquid Film Pathways', link: '/literature-reviews/sheet-vs-liquid-film-pathways' },
  { text: 'Latex Textile Bonding', link: '/literature-reviews/latex-textile-bonding' },
  { text: 'Former Dip vs Mould Cast vs Flat Spread', link: '/literature-reviews/former-dip-vs-mould-cast-vs-flat-spread' },
  { text: 'Coagulant Dipping', link: '/literature-reviews/coagulant-dipping-wearable-thickness' },
  { text: 'Heat-Sensitized Gelation', link: '/literature-reviews/heat-sensitized-gelation-slush-rotational-cast' },
  { text: 'Film Defect Atlas', link: '/literature-reviews/film-defect-atlas-industrial-to-craft' },
  { text: 'Pigment & Filler Decks', link: '/literature-reviews/pigment-filler-decks-wearable-nr-film' },
  { text: 'Printing & Surface Decoration', link: '/literature-reviews/printing-surface-decoration-sheet' },
  { text: 'Surface Finish Literacy', link: '/literature-reviews/surface-finish-literacy-gloss-matte-bloom' },
  { text: 'Chlorination for Tack Control', link: '/literature-reviews/chlorination-tack-control-skin-contact' },
  { text: 'Liquid Latex Painting vs Compounding', link: '/literature-reviews/liquid-latex-painting-vs-compounding-pigment' },
  { text: 'Gauge, Modulus & Reduction', link: '/literature-reviews/gauge-modulus-reduction-fit-science' },
  { text: 'Calendered Sheet vs Home-Cast Film', link: '/literature-reviews/calendered-sheet-vs-home-cast-film' },
  { text: 'Reinforcement & Laminate Zones', link: '/literature-reviews/reinforcement-laminate-zones' },
  { text: 'Edge Finishing Materials', link: '/literature-reviews/edge-finishing-materials' },
  { text: 'Hardware & Metal Contact', link: '/literature-reviews/hardware-metal-contact-snaps-eyelets' },
  { text: 'Zipper Closure Compatibility', link: '/literature-reviews/zipper-closure-material-compatibility' },
  { text: 'Home Shop Ventilation', link: '/literature-reviews/home-shop-ventilation-solvent-exposure' },
  { text: 'Decoding Latex Bottle Labels', link: '/literature-reviews/decoding-consumer-latex-bottle-labels' },
  { text: 'Prevulcanized Consumer Latex', link: '/literature-reviews/prevulcanized-consumer-latex-dry-only' },
  { text: 'Garment Selection QA', link: '/literature-reviews/garment-selection-qa-buyers-wearers' },
  { text: 'Synthetic Lattices for Costume Film', link: '/literature-reviews/synthetic-lattices-nbr-cr-sbr-costume' },
  { text: 'Latex Foam Padding', link: '/literature-reviews/latex-foam-padding-costume-volume' },
  { text: 'Antidegradants in DIY Compounds', link: '/literature-reviews/antidegradants-diy-compounds' },
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
