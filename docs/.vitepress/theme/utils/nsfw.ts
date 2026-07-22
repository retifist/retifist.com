/** Retifist-specific localStorage key — do not reuse VitePress appearance key. */
export const NSFW_OPT_OUT_KEY = 'retifist-nsfw-outbound-skip'

export const SFW_HOST_ALLOWLIST = [
  'youtube.com',
  'www.youtube.com',
  'youtu.be',
  'm.youtube.com',
  'twitch.tv',
  'www.twitch.tv',
  'instagram.com',
  'www.instagram.com',
]

export function isSfwHost(hostname: string): boolean {
  const host = hostname.toLowerCase().replace(/^www\./, '')
  return SFW_HOST_ALLOWLIST.some((allowed) => {
    const a = allowed.replace(/^www\./, '')
    return host === a || host.endsWith(`.${a}`)
  })
}

export function readNsfwOptOut(storage: Storage = localStorage): boolean {
  try {
    return storage.getItem(NSFW_OPT_OUT_KEY) === '1'
  } catch {
    return false
  }
}

export function writeNsfwOptOut(value: boolean, storage: Storage = localStorage): void {
  try {
    if (value) storage.setItem(NSFW_OPT_OUT_KEY, '1')
    else storage.removeItem(NSFW_OPT_OUT_KEY)
  } catch {
    /* ignore quota / private mode */
  }
}

export function shouldWarnNsfw(opts: {
  markedNsfw: boolean
  hostname: string
  optedOut: boolean
}): boolean {
  if (opts.optedOut) return false
  if (!opts.markedNsfw) return false
  if (isSfwHost(opts.hostname)) return false
  return true
}
