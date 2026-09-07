export const EXPERIMENTAL_VERIFICATION_TITLE = 'Experimental verification in progress'

export const EXPERIMENTAL_VERIFICATION_MESSAGE =
  'These planning numbers and Clo3D presets have not been bench-checked against worn sheet yet. Treat them as working marks, not shop-verified claims.'

export function isExperimentalVerification(frontmatter: {
  verification?: unknown
} | null | undefined): boolean {
  return frontmatter?.verification === 'experimental'
}
