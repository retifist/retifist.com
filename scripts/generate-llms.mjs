import { mkdirSync, writeFileSync, readdirSync, readFileSync, existsSync, rmSync } from 'node:fs'
import { join, dirname, relative, basename } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const docsRoot = join(root, 'docs')
const outRoot = join(docsRoot, 'public')
const agentLitReviewsDir = join(docsRoot, 'literature-reviews', 'agent')
const siteOrigin = process.env.RETIFIST_SITE_ORIGIN || 'https://retifist.com'
const siteName = 'Retifist'
const summary =
  'Latex garment-making tutorials, patterns, and technique — SFW educational hub.'

function walkMd(dir, acc = []) {
  if (!existsSync(dir)) return acc
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    if (name.name.startsWith('.')) continue
    const full = join(dir, name.name)
    if (name.isDirectory()) {
      if (name.name === 'public' || name.name === 'cache' || name.name === 'dist') continue
      if (name.name === 'agent') continue
      walkMd(full, acc)
    } else if (name.name.endsWith('.md')) {
      acc.push(full)
    }
  }
  return acc
}

function parseFrontmatter(source) {
  const m = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!m) return { title: '', description: '' }
  const block = m[1]
  const title = block.match(/^title:\s*(.+)\s*$/m)?.[1]?.trim().replace(/^['"]|['"]$/g, '') || ''
  const description =
    block.match(/^description:\s*(.+)\s*$/m)?.[1]?.trim().replace(/^['"]|['"]$/g, '') || ''
  return { title, description }
}

function agentLiteratureReviewSource(relativePath) {
  const normalized = relativePath.replace(/\\/g, '/')
  if (!normalized.startsWith('literature-reviews/') || normalized.startsWith('literature-reviews/agent/')) {
    return null
  }
  const base = basename(normalized, '.md')
  if (base === 'index') return null
  const candidate = join(agentLitReviewsDir, `${base}.md`)
  return existsSync(candidate) ? candidate : null
}

function stripYamlFrontmatter(source) {
  return source.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '')
}

function relativePathToLlmsPath(relativePath) {
  const normalized = relativePath.replace(/\\/g, '/').replace(/^\//, '')
  if (!normalized) return '/llms/index.md'
  const withMd = normalized.endsWith('.md') ? normalized : `${normalized}.md`
  return `/llms/${withMd}`
}

function relativePathToHumanUrl(relativePath) {
  const normalized = relativePath.replace(/\\/g, '/').replace(/^\//, '')
  if (!normalized || normalized === 'index.md') return '/'
  if (normalized.endsWith('/index.md')) {
    const dir = normalized.slice(0, -'/index.md'.length)
    return `/${dir}/`
  }
  if (normalized.endsWith('.md')) return `/${normalized.slice(0, -'.md'.length)}`
  return `/${normalized}`
}

function buildStubMarkdown(meta, humanUrl) {
  const origin = siteOrigin.replace(/\/$/, '')
  const humanHref = `${origin}${humanUrl === '/' ? '/' : humanUrl}`
  const lines = [`# ${meta.title}`, '', `Human page: ${humanHref}`]
  if (meta.description?.trim()) lines.push('', meta.description.trim())
  lines.push('')
  return lines.join('\n')
}

function buildLlmsTxt(entries) {
  const origin = siteOrigin.replace(/\/$/, '')
  const lines = [`# ${siteName}`, `> ${summary}`, '', '## Pages']
  for (const e of entries) {
    const href = `${origin}${e.llmsPath}`
    const note = e.note?.trim() ? `: ${e.note.trim()}` : ''
    lines.push(`- [${e.title}](${href})${note}`)
  }
  lines.push('')
  return lines.join('\n')
}

function titleFromPath(rel) {
  const base = rel.replace(/\\/g, '/').split('/').pop().replace(/\.md$/, '')
  if (base === 'index') {
    const parts = rel.replace(/\\/g, '/').split('/')
    return parts.length > 1 ? parts[parts.length - 2] : siteName
  }
  return base.replace(/-/g, ' ')
}

const llmsDir = join(outRoot, 'llms')
if (existsSync(llmsDir)) {
  rmSync(llmsDir, { recursive: true, force: true })
}

const files = walkMd(docsRoot).filter((f) => {
  const rel = relative(docsRoot, f).replace(/\\/g, '/')
  return !rel.startsWith('.vitepress/')
})

const entries = []

for (const file of files) {
  const rel = relative(docsRoot, file).replace(/\\/g, '/')
  const source = readFileSync(file, 'utf8')
  const fm = parseFrontmatter(source)
  const title = fm.title || titleFromPath(rel)
  const humanUrl = relativePathToHumanUrl(rel)
  const llmsPath = relativePathToLlmsPath(rel)
  const stubRel = llmsPath.replace(/^\//, '') // llms/...
  const outFile = join(outRoot, stubRel)
  mkdirSync(dirname(outFile), { recursive: true })

  const agentSource = agentLiteratureReviewSource(rel)
  const body = agentSource
    ? stripYamlFrontmatter(readFileSync(agentSource, 'utf8'))
    : buildStubMarkdown({ title, description: fm.description }, humanUrl)

  writeFileSync(outFile, body, 'utf8')
  entries.push({
    title,
    llmsPath,
    note: fm.description || undefined,
  })
}

entries.sort((a, b) => a.llmsPath.localeCompare(b.llmsPath))
writeFileSync(join(outRoot, 'llms.txt'), buildLlmsTxt(entries), 'utf8')

console.log(`Generated ${entries.length} llms stubs + llms.txt → docs/public/`)
