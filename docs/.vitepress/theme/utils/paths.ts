export function withBase(path: string, base = '/'): string {
  if (base === '/') return path
  return `${base.replace(/\/$/, '')}${path}`
}
