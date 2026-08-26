/**
 * Stub markdown body + llms.txt helpers (pure; used by generate-llms script).
 */

export type LlmsPageMeta = {
  /** VitePress relativePath, e.g. lessons/index.md */
  relativePath: string
  title: string
  description?: string
  /** Absolute origin for links in stubs / llms.txt, e.g. https://retifist.com */
  siteOrigin?: string
}

export function buildStubMarkdown(
  meta: LlmsPageMeta,
  humanUrl: string,
): string {
  const origin = (meta.siteOrigin || '').replace(/\/$/, '')
  const humanHref = origin ? `${origin}${humanUrl === '/' ? '/' : humanUrl}` : humanUrl
  const lines = [`# ${meta.title}`, '', `Human page: ${humanHref}`]
  if (meta.description?.trim()) {
    lines.push('', meta.description.trim())
  }
  lines.push('')
  return lines.join('\n')
}

export function buildLlmsTxt(
  siteName: string,
  summary: string,
  entries: { title: string; llmsPath: string; note?: string }[],
  siteOrigin = 'https://retifist.com',
): string {
  const origin = siteOrigin.replace(/\/$/, '')
  const lines = [
    `# ${siteName}`,
    `> ${summary}`,
    '',
    '## Pages',
  ]
  for (const e of entries) {
    const href = `${origin}${e.llmsPath}`
    const note = e.note?.trim() ? `: ${e.note.trim()}` : ''
    lines.push(`- [${e.title}](${href})${note}`)
  }
  lines.push('')
  return lines.join('\n')
}
