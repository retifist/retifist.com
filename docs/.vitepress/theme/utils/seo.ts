import { relativePathToHumanUrl, stripAgentSegment } from './llmsPaths'

export const SITE_ORIGIN = 'https://retifist.com'
export const SITE_NAME = 'Retifist'
export const DEFAULT_DESCRIPTION =
  'Latex garment-making tutorials, patterns, and technique — SFW educational hub.'
export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/brand/hero-placeholder.jpg`

export type SeoHeadTag = [string, Record<string, string>]

export type SeoPageInput = {
  relativePath: string
  title?: string
  description?: string
  frontmatter?: Record<string, unknown>
}

/** True when a page lives in an `agent` directory segment (not agent-surface-demo). */
export function isAgentHtmlPath(relativePath: string): boolean {
  const p = relativePath.replace(/\\/g, '/').replace(/^\//, '')
  return /(^|\/)agent\//.test(p)
}

/** Sitemap item URLs are path-like (`literature-reviews/agent/foo`) or absolute. */
export function isAgentSitemapUrl(url: string): boolean {
  const path = url.includes('://') ? new URL(url).pathname : url
  return /(^|\/)agent(\/|$)/.test(path.replace(/\\/g, '/'))
}

export function toAbsoluteUrl(sitePath: string): string {
  if (/^https?:\/\//.test(sitePath)) return sitePath
  const path = sitePath.startsWith('/') ? sitePath : `/${sitePath}`
  return `${SITE_ORIGIN}${path}`
}

/** Strip the `agent/` segment so duplicates canonicalize to the human article. */
export function humanRelativePath(relativePath: string): string {
  return stripAgentSegment(relativePath)
}

export function canonicalPath(relativePath: string): string {
  return relativePathToHumanUrl(humanRelativePath(relativePath))
}

export function ogTypeForPath(relativePath: string): 'website' | 'article' {
  const p = relativePath.replace(/\\/g, '/')
  const base = p.split('/').pop() || p
  return base === 'index.md' ? 'website' : 'article'
}

function firstNonEmpty(...values: Array<string | undefined>): string | undefined {
  for (const value of values) {
    const trimmed = value?.trim()
    if (trimmed) return trimmed
  }
  return undefined
}

export function resolvePageTitle(page: SeoPageInput): string {
  const fmTitle = typeof page.frontmatter?.title === 'string' ? page.frontmatter.title : undefined
  return firstNonEmpty(fmTitle, page.title) || SITE_NAME
}

export function resolvePageDescription(page: SeoPageInput): string {
  const fmDesc =
    typeof page.frontmatter?.description === 'string' ? page.frontmatter.description : undefined
  return firstNonEmpty(fmDesc, page.description) || DEFAULT_DESCRIPTION
}

export function buildSeoHead(page: SeoPageInput): SeoHeadTag[] {
  const title = resolvePageTitle(page)
  const description = resolvePageDescription(page)
  const canonical = toAbsoluteUrl(canonicalPath(page.relativePath || 'index.md'))
  const type = ogTypeForPath(page.relativePath || 'index.md')

  const head: SeoHeadTag[] = [
    ['link', { rel: 'canonical', href: canonical }],
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:url', content: canonical }],
    ['meta', { property: 'og:type', content: type }],
    ['meta', { property: 'og:site_name', content: SITE_NAME }],
    ['meta', { property: 'og:image', content: DEFAULT_OG_IMAGE }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ]

  if (isAgentHtmlPath(page.relativePath || '')) {
    head.push(['meta', { name: 'robots', content: 'noindex, follow' }])
  }

  return head
}
