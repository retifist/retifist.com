/**
 * Canonical human ↔ `/llms` path mapping for agent-first stubs.
 * Same relative path under `/llms` with a `.md` extension (GitHub Pages MIME).
 */

/** Strip query/hash and normalize slashes on a path-like string. */
export function cleanPath(input: string): string {
  let p = (input || '').split('?')[0].split('#')[0].replace(/\\/g, '/')
  if (!p.startsWith('/')) p = `/${p}`
  return p
}

/**
 * VitePress `page.relativePath` (e.g. `lessons/index.md`, `index.md`)
 * → agent stub URL path (`/llms/lessons/index.md`).
 */
export function relativePathToLlmsPath(relativePath: string): string {
  const normalized = relativePath.replace(/\\/g, '/').replace(/^\//, '')
  if (!normalized) return '/llms/index.md'
  const withMd = normalized.endsWith('.md') ? normalized : `${normalized}.md`
  return `/llms/${withMd}`
}

/**
 * VitePress `page.relativePath` → human clean URL (site path).
 * `index.md` → `/`; `lessons/index.md` → `/lessons/`; other pages drop `.md`.
 */
export function relativePathToHumanUrl(relativePath: string): string {
  const normalized = relativePath.replace(/\\/g, '/').replace(/^\//, '')
  if (!normalized || normalized === 'index.md') return '/'

  if (normalized.endsWith('/index.md')) {
    const dir = normalized.slice(0, -'/index.md'.length)
    return `/${dir}/`
  }

  if (normalized.endsWith('.md')) {
    return `/${normalized.slice(0, -'.md'.length)}`
  }

  return `/${normalized}`
}

/**
 * Human clean URL or route path → matching `/llms/...md` stub path.
 */
export function humanUrlToLlmsPath(humanUrl: string): string {
  let p = cleanPath(humanUrl)
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1)

  if (p === '/' || p === '') return '/llms/index.md'

  // Already an llms stub path
  if (p === '/llms' || p.startsWith('/llms/')) {
    if (p === '/llms' || p === '/llms/') return '/llms/index.md'
    return p.endsWith('.md') ? p : `${p}.md`
  }

  // Directory-style human URL → index.md under that folder
  if (humanUrl.replace(/\\/g, '/').endsWith('/') && p !== '/') {
    return `/llms${p}/index.md`
  }

  return `/llms${p}.md`
}

/** Inverse of {@link relativePathToLlmsPath} for round-trip checks. */
export function llmsPathToRelativePath(llmsPath: string): string {
  let p = cleanPath(llmsPath)
  if (!p.startsWith('/llms/')) {
    throw new Error(`Not an llms path: ${llmsPath}`)
  }
  return p.slice('/llms/'.length)
}
