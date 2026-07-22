export type CatalogItem = {
  title: string
  link: string
  description?: string
  duration?: string
  tags?: string[]
}

export function formatDuration(duration?: string | null): string | null {
  if (duration == null) return null
  const trimmed = String(duration).trim()
  if (!trimmed) return null
  return trimmed
}

export function filterByTag(items: CatalogItem[], tag: string | null): CatalogItem[] {
  if (!tag) return items
  const needle = tag.toLowerCase()
  return items.filter((item) => (item.tags ?? []).some((t) => t.toLowerCase() === needle))
}

export function filterByQuery(items: CatalogItem[], query: string | null | undefined): CatalogItem[] {
  const q = (query ?? '').trim().toLowerCase()
  if (!q) return items
  return items.filter((item) => {
    const hay = [item.title, item.description ?? '', ...(item.tags ?? [])].join(' ').toLowerCase()
    return hay.includes(q)
  })
}

export function filterCatalog(
  items: CatalogItem[],
  opts: { tag?: string | null; query?: string | null } = {},
): CatalogItem[] {
  return filterByQuery(filterByTag(items, opts.tag ?? null), opts.query)
}

export function uniqueTags(items: CatalogItem[]): string[] {
  const set = new Set<string>()
  for (const item of items) {
    for (const tag of item.tags ?? []) {
      const t = tag.trim()
      if (t) set.add(t)
    }
  }
  return [...set].sort((a, b) => a.localeCompare(b))
}
