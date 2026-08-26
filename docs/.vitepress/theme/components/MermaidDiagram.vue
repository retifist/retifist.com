<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { mermaidErrorFallback, mermaidInitConfig } from '../utils/mermaid'

const props = defineProps<{
  /** URI-encoded Mermaid source from the markdown fence plugin. */
  code: string
}>()

const container = ref<HTMLElement | null>(null)
const error = ref('')
let mermaidReady: Promise<typeof import('mermaid')> | null = null

function readCode(): string {
  try {
    return decodeURIComponent(props.code || '').trim()
  } catch {
    return (props.code || '').trim()
  }
}

async function getMermaid() {
  if (!mermaidReady) {
    mermaidReady = import('mermaid').then((mod) => {
      mod.default.initialize(mermaidInitConfig(true))
      return mod
    })
  }
  return mermaidReady
}

async function render() {
  error.value = ''
  const code = readCode()
  if (!container.value || !code) return
  try {
    const mod = await getMermaid()
    const id = `rf-mermaid-${Math.random().toString(36).slice(2)}`
    const { svg } = await mod.default.render(id, code)
    container.value.innerHTML = svg
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e)
    error.value = mermaidErrorFallback(msg)
    if (container.value) container.value.innerHTML = ''
  }
}

onMounted(render)
watch(() => props.code, render)
</script>

<template>
  <div class="rf-mermaid">
    <p v-if="error" class="rf-mermaid__error" role="alert">{{ error }}</p>
    <div ref="container" class="rf-mermaid__svg" />
  </div>
</template>

<style scoped>
.rf-mermaid {
  margin: 1.25rem 0;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  overflow-x: auto;
}

.rf-mermaid__error {
  margin: 0 0 0.75rem;
  color: var(--vp-c-danger-1);
  font-family: var(--rf-font-ui);
  font-size: 0.9rem;
}

.rf-mermaid__svg :deep(svg) {
  max-width: 100%;
  height: auto;
}
</style>
