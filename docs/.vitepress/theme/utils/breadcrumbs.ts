/** Normalize a VitePress route path for crumb building. */
export function normalizePath(path: string): string {
  if (!path) return '/'
  let p = path.split('?')[0].split('#')[0]
  if (!p.startsWith('/')) p = `/${p}`
  // strip trailing index and trailing slash (except root)
  p = p.replace(/\/index$/, '/')
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1)
  return p || '/'
}

export type Crumb = { title: string; link?: string }

const SEGMENT_TITLES: Record<string, string> = {
  lessons: 'Lessons',
  patterns: 'Patterns',
  technique: 'Technique',
  projects: 'Projects',
  downloads: 'Downloads',
  safety: 'Safety',
  about: 'About',
  links: 'Links',
  'start-small': 'Start Small',
  bow: 'Bow',
  'basic-shoe-sock': 'Basic shoe sock',
  '00-prep-materials-safety': '00 — Prep, materials, and safety',
  '01-bow-on-strap': '01 — Bow on strap',
  '02-boot-sock-pattern': '02 — Boot sock pattern',
  '03-boot-sock-cut-glue': '03 — Boot sock cut and glue',
  '04-pattern-fit-adjustment': '04 — Pattern fit adjustment',
  '05-paneling-stripe': '05 — Paneling stripe',
  '06-applique-flame': '06 — Appliqué flame',
  '07-inner-heel-fasteners': '07 — Inner heel fasteners',
  '1-glue-real-time': '1 — Glue in real time',
  '2-glue-prep-protocol': '2 — Glue prep protocol',
  '3-glue-cure-timing': '3 — Cure timing',
  '4-heptane-safety': '4 — Heptane safety',
  '5-glue-tools-compared': '5 — Glue tools compared',
  '6-shaping-seams-masterclass': '6 — Shaping seams',
  '7-seam-width-lab': '7 — Seam-width lab',
}

function titleForSegment(segment: string): string {
  return SEGMENT_TITLES[segment] ?? segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

/**
 * Build breadcrumb trail from a route path.
 * Home is always first; intermediate segments link to ancestor paths.
 */
export function buildBreadcrumbs(path: string, pageTitle?: string): Crumb[] {
  const normalized = normalizePath(path)
  if (normalized === '/') {
    return [{ title: 'Home' }]
  }

  const parts = normalized.split('/').filter(Boolean)
  const crumbs: Crumb[] = [{ title: 'Home', link: '/' }]

  let acc = ''
  parts.forEach((part, index) => {
    acc += `/${part}`
    const isLast = index === parts.length - 1
    const title = isLast && pageTitle ? pageTitle : titleForSegment(part)
    if (isLast) {
      crumbs.push({ title })
    } else {
      crumbs.push({ title, link: `${acc}/` })
    }
  })

  return crumbs
}

/** @deprecated unused helper kept for path joining in config if needed */
export function withBase(path: string, base = '/'): string {
  if (base === '/') return path
  return `${base.replace(/\/$/, '')}${path}`
}
