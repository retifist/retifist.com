/**
 * Canonical human ↔ `/llms` path mapping for agent-first stubs.
 * Same relative path under `/llms` with a `.md` extension (GitHub Pages MIME).
 *
 * Agent HTML twins (`…/agent/slug`) share the human stub. The generator does
 * not emit `/llms/…/agent/…md`, so mapping must strip that directory segment.
 */

/** Strip query/hash and normalize slashes on a path-like string. */
export function cleanPath(input: string): string {
  let p = (input || '').split('?')[0].split('#')[0].replace(/\\/g, '/')
  if (!p.startsWith('/')) p = `/${p}`
  return p
}

/**
 * Remove a whole `agent/` directory segment. Leaves `agent-surface-demo` alone.
 */
export function stripAgentSegment(path: string): string {
  const hadTrailing = path.endsWith('/') && path !== '/'
  let p = (path || '').replace(/\\/g, '/').replace(/(^|\/)agent(?=\/|$)/g, '$1')
  p = p.replace(/\/{2,}/g, '/')
  if (!p) return hadTrailing ? '/' : ''
  if (hadTrailing && p !== '/' && !p.endsWith('/')) p += '/'
  if (!hadTrailing && p.length > 1 && p.endsWith('/')) p = p.slice(0, -1)
  return p
}

/**
 * VitePress `page.relativePath` (e.g. `lessons/index.md`, `index.md`)
 * → agent stub URL path (`/llms/lessons/index.md`).
 */
export function relativePathToLlmsPath(relativePath: string): string {
  const normalized = stripAgentSegment(relativePath.replace(/\\/g, '/')).replace(/^\//, '')
  if (!normalized || normalized === '404.md') return '/llms/index.md'
  const withMd = normalized.endsWith('.md') ? normalized : `${normalized}.md`
  return `/llms/${withMd}`
}

/**
 * VitePress `page.relativePath` → human clean URL (site path).
 * `index.md` → `/`; `lessons/index.md` → `/lessons/`; other pages drop `.md`.
 */
export function relativePathToHumanUrl(relativePath: string): string {
  const normalized = stripAgentSegment(relativePath.replace(/\\/g, '/')).replace(/^\//, '')
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
  const cleaned = stripAgentSegment(cleanPath(humanUrl))
  const endedWithSlash = cleaned.endsWith('/') && cleaned !== '/'
  let p = endedWithSlash ? cleaned.slice(0, -1) : cleaned

  if (p === '/' || p === '') return '/llms/index.md'

  // Already an llms stub path
  if (p === '/llms' || p.startsWith('/llms/')) {
    if (p === '/llms' || p === '/llms/') return '/llms/index.md'
    // Agent HTML was wrongly mapped here historically; fold onto the human stub.
    p = stripAgentSegment(p)
    return p.endsWith('.md') ? p : `${p}.md`
  }

  if (endedWithSlash && p !== '/') {
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
