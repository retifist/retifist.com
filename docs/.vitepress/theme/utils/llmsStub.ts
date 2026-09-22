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

/** Canonical HTTPS clone URL for the public site source tree. */
export const RETIFIST_REPO_CLONE_URL =
  'https://github.com/retifist/retifist.com.git'

export function buildLlmsTxt(
  siteName: string,
  summary: string,
  entries: { title: string; llmsPath: string; note?: string }[],
  siteOrigin = 'https://retifist.com',
  repoCloneUrl = RETIFIST_REPO_CLONE_URL,
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
  lines.push(
    '',
    '## Repository',
    `- [Clone source](${repoCloneUrl}): Public VitePress source for retifist.com — full page markdown under \`docs/\` (and site config). \`/llms\` stubs are discovery summaries — clone for complete source content.`,
    '',
  )
  return lines.join('\n')
}
