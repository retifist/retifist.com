/**
 * Replaceable block-math registration for VitePress markdown-it.
 * Default authoring: `$$ ... $$` display delimiters; block-only.
 */

export type MathAdapterOptions = {
  /** Enable math plugin (default true). */
  enabled?: boolean
  /** Only support display/block math (default true). */
  blockOnly?: boolean
  /** Display delimiter pair (default ['$$','$$']). */
  delimiters?: [string, string]
}

export const DEFAULT_MATH_OPTIONS: Required<MathAdapterOptions> = {
  enabled: true,
  blockOnly: true,
  delimiters: ['$$', '$$'],
}

export function resolveMathOptions(options: MathAdapterOptions = {}): Required<MathAdapterOptions> {
  return {
    ...DEFAULT_MATH_OPTIONS,
    ...options,
    delimiters: options.delimiters ?? DEFAULT_MATH_OPTIONS.delimiters,
  }
}

/**
 * Wire VitePress `markdown.math` when enabled.
 * Call from config — keeps the swap surface to this module.
 */
export function vitepressMathConfig(options: MathAdapterOptions = {}): boolean {
  const resolved = resolveMathOptions(options)
  return resolved.enabled === true
}
