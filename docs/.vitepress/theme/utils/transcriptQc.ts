/**
 * Video + transcript QC helpers.
 * Severity is configurable: 'off' | 'warn' | 'fail'
 */

export type TranscriptSeverity = 'off' | 'warn' | 'fail'

export type VideoTranscriptMeta = {
  /** True when the page embeds or references a video */
  hasVideo: boolean
  /** Transcript URL/path from frontmatter or YouTubeEmbed prop */
  transcript?: string | null
}

export type TranscriptQcResult = {
  ok: boolean
  severity: TranscriptSeverity
  message?: string
}

export function assertVideoHasTranscript(
  meta: VideoTranscriptMeta,
  severity: TranscriptSeverity = 'warn',
): TranscriptQcResult {
  if (severity === 'off' || !meta.hasVideo) {
    return { ok: true, severity }
  }
  const t = meta.transcript?.trim()
  if (t) return { ok: true, severity }

  const message = 'Page has video but no transcript link'
  if (severity === 'warn') {
    return { ok: true, severity, message }
  }
  return { ok: false, severity, message }
}

/** Detect YouTubeEmbed usage in markdown source (simple heuristic for QC scripts). */
export function markdownHasYouTubeEmbed(source: string): boolean {
  return /<YouTubeEmbed\b/.test(source)
}

/** Read transcript from YAML-ish frontmatter `transcript:` when present. */
export function transcriptFromFrontmatter(source: string): string | null {
  const fm = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!fm) return null
  const m = fm[1].match(/^transcript:\s*(.+)\s*$/m)
  if (!m) return null
  return m[1].trim().replace(/^['"]|['"]$/g, '')
}
