import { relativePathToHumanUrl, stripAgentSegment } from './llmsPaths'

export const SITE_ORIGIN = 'https://retifist.com'
export const SITE_NAME = 'Retifist'
export const DEFAULT_DESCRIPTION =
  'Latex garment-making tutorials, patterns, and technique — SFW educational hub.'
export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/brand/hero-placeholder.jpg`
/** Primary site mark (matches theme logo). */
export const SITE_LOGO = `${SITE_ORIGIN}/brand/logo-good-4.svg`

export type SeoHeadTag =
  | [string, Record<string, string>]
  | [string, Record<string, string>, string]

export type SeoPageInput = {
  relativePath: string
  title?: string
  description?: string
  frontmatter?: Record<string, unknown>
}

export type JsonLdObject = Record<string, unknown>

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

function normalizeRelativePath(relativePath: string): string {
  return relativePath.replace(/\\/g, '/').replace(/^\//, '')
}

/** Human (non-agent) literature-review tree, including the hub index. */
export function isLiteratureReviewHumanPath(relativePath: string): boolean {
  const p = normalizeRelativePath(relativePath)
  if (isAgentHtmlPath(p)) return false
  return p === 'literature-reviews/index.md' || p.startsWith('literature-reviews/')
}

/** Human literature-review article pages (excludes hub index and agent mirrors). */
export function isLiteratureReviewContentPath(relativePath: string): boolean {
  const p = normalizeRelativePath(relativePath)
  if (!isLiteratureReviewHumanPath(p)) return false
  return p !== 'literature-reviews/index.md' && !p.endsWith('/index.md')
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

/** Prefer ISO-like strings from frontmatter; never invent dates. */
export function resolveFrontmatterDate(
  frontmatter: Record<string, unknown> | undefined,
  ...keys: string[]
): string | undefined {
  if (!frontmatter) return undefined
  for (const key of keys) {
    const value = frontmatter[key]
    if (typeof value === 'string' && value.trim()) return value.trim()
  }
  return undefined
}

const ORG_ID = `${SITE_ORIGIN}/#organization`

export function buildOrganizationJsonLd(): JsonLdObject {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE_NAME,
    url: SITE_ORIGIN,
    logo: SITE_LOGO,
  }
}

export function buildArticleJsonLd(page: SeoPageInput): JsonLdObject {
  const title = resolvePageTitle(page)
  const description = resolvePageDescription(page)
  const canonical = toAbsoluteUrl(canonicalPath(page.relativePath || 'index.md'))
  const datePublished = resolveFrontmatterDate(page.frontmatter, 'datePublished', 'date')
  const dateModified = resolveFrontmatterDate(page.frontmatter, 'dateModified', 'lastUpdated')

  const article: JsonLdObject = {
    '@type': 'Article',
    headline: title,
    description,
    url: canonical,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonical,
    },
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_ORIGIN,
    },
    publisher: { '@id': ORG_ID },
    image: DEFAULT_OG_IMAGE,
  }

  if (datePublished) article.datePublished = datePublished
  if (dateModified) article.dateModified = dateModified

  return article
}

export function buildLiteratureReviewBreadcrumbJsonLd(page: SeoPageInput): JsonLdObject {
  const title = resolvePageTitle(page)
  const canonical = toAbsoluteUrl(canonicalPath(page.relativePath || 'index.md'))
  const hubUrl = toAbsoluteUrl('/literature-reviews/')
  const isHub = !isLiteratureReviewContentPath(page.relativePath || '')

  const itemListElement: JsonLdObject[] = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${SITE_ORIGIN}/`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Literature Reviews',
      item: hubUrl,
    },
  ]

  if (!isHub) {
    itemListElement.push({
      '@type': 'ListItem',
      position: 3,
      name: title,
      item: canonical,
    })
  }

  return {
    '@type': 'BreadcrumbList',
    itemListElement,
  }
}

/**
 * Literature-review JSON-LD graph for human pages only.
 * Agent mirrors omit structured data (they are noindex + canonical to human).
 */
export function buildLiteratureReviewJsonLd(page: SeoPageInput): JsonLdObject | null {
  const relativePath = page.relativePath || ''
  if (isAgentHtmlPath(relativePath) || !isLiteratureReviewHumanPath(relativePath)) {
    return null
  }

  const graph: JsonLdObject[] = [buildOrganizationJsonLd()]

  if (isLiteratureReviewContentPath(relativePath)) {
    graph.push(buildArticleJsonLd(page))
  }

  graph.push(buildLiteratureReviewBreadcrumbJsonLd(page))

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}

export function jsonLdHeadTag(data: JsonLdObject): SeoHeadTag {
  // Escape `<` so the payload cannot break out of the script element.
  const json = JSON.stringify(data).replace(/</g, '\\u003c')
  return ['script', { type: 'application/ld+json' }, json]
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

  const jsonLd = buildLiteratureReviewJsonLd(page)
  if (jsonLd) {
    head.push(jsonLdHeadTag(jsonLd))
  }

  return head
}
