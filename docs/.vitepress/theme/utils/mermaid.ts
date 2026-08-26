/**
 * Mermaid fence helpers — keep package usage behind this thin surface.
 */

export type MermaidTheme = 'dark' | 'default' | 'neutral' | 'forest' | 'base'

export function mermaidInitConfig(forceDark = true): {
  startOnLoad: boolean
  theme: MermaidTheme
  securityLevel: 'strict' | 'loose' | 'antiscript' | 'sandbox'
} {
  return {
    startOnLoad: false,
    theme: forceDark ? 'dark' : 'default',
    securityLevel: 'strict',
  }
}

export function isMermaidFence(lang: string | undefined): boolean {
  return (lang || '').trim().toLowerCase() === 'mermaid'
}

export function mermaidErrorFallback(message: string): string {
  const safe = message.replace(/</g, '&lt;').replace(/>/g, '&gt;')
  return `Diagram failed to render: ${safe}`
}
