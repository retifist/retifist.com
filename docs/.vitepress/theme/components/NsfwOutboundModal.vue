<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch, nextTick } from 'vue'
import {
  NSFW_OPT_OUT_KEY,
  readNsfwOptOut,
  shouldWarnNsfw,
  writeNsfwOptOut,
} from '../utils/nsfw'

const open = ref(false)
const neverAsk = ref(false)
const pendingHref = ref<string | null>(null)
const dialogRef = ref<HTMLElement | null>(null)
const confirmBtn = ref<HTMLButtonElement | null>(null)

function isNsfwMarked(el: Element | null): boolean {
  let node: Element | null = el
  while (node && node !== document.body) {
    if (
      node instanceof HTMLElement &&
      (node.dataset.nsfw === 'true' ||
        node.classList.contains('rf-nsfw-link') ||
        node.getAttribute('rel')?.includes('nsfw'))
    ) {
      return true
    }
    node = node.parentElement
  }
  return false
}

function onDocumentClick(event: MouseEvent) {
  if (event.defaultPrevented) return
  if (event.button !== 0) return
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

  const target = event.target as Element | null
  const anchor = target?.closest?.('a[href]') as HTMLAnchorElement | null
  if (!anchor) return

  const href = anchor.href
  if (!href || href.startsWith('javascript:')) return

  let hostname = ''
  try {
    hostname = new URL(href, window.location.href).hostname
  } catch {
    return
  }

  const marked = isNsfwMarked(anchor)
  const optedOut = readNsfwOptOut()
  if (!shouldWarnNsfw({ markedNsfw: marked, hostname, optedOut })) return

  event.preventDefault()
  pendingHref.value = href
  neverAsk.value = false
  open.value = true
}

function close() {
  open.value = false
  pendingHref.value = null
}

function confirmLeave() {
  if (neverAsk.value) writeNsfwOptOut(true)
  const href = pendingHref.value
  close()
  if (href) window.location.assign(href)
}

function onKeydown(event: KeyboardEvent) {
  if (!open.value) return
  if (event.key === 'Escape') {
    event.preventDefault()
    close()
  }
}

watch(open, async (isOpen) => {
  if (isOpen) {
    await nextTick()
    confirmBtn.value?.focus()
  }
})

onMounted(() => {
  document.addEventListener('click', onDocumentClick, true)
  document.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.removeEventListener('click', onDocumentClick, true)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div
    v-if="open"
    class="rf-nsfw-modal"
    role="dialog"
    aria-modal="true"
    aria-labelledby="rf-nsfw-title"
    ref="dialogRef"
  >
    <div class="rf-nsfw-modal__backdrop" @click="close" />
    <div class="rf-nsfw-modal__panel">
      <h2 id="rf-nsfw-title">Leaving SFW Retifist</h2>
      <p>
        This link is marked as potentially NSFW. Continue only if you are okay
        viewing adult-oriented content off this site.
      </p>
      <label class="rf-nsfw-modal__opt">
        <input v-model="neverAsk" type="checkbox" />
        Never ask me again
      </label>
      <div class="rf-nsfw-modal__actions">
        <button type="button" class="rf-nsfw-modal__cancel" @click="close">Cancel</button>
        <button
          ref="confirmBtn"
          type="button"
          class="rf-nsfw-modal__confirm"
          @click="confirmLeave"
        >
          Continue
        </button>
      </div>
      <p class="rf-nsfw-modal__hint">Preference key: {{ NSFW_OPT_OUT_KEY }}</p>
    </div>
  </div>
</template>

<style scoped>
.rf-nsfw-modal {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  padding: 1rem;
  font-family: var(--rf-font-ui);
}

.rf-nsfw-modal__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.72);
}

.rf-nsfw-modal__panel {
  position: relative;
  width: min(28rem, 100%);
  padding: 1.25rem 1.35rem;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-top: 3px solid var(--rf-safety-4);
  color: var(--vp-c-text-1);
}

.rf-nsfw-modal__panel h2 {
  margin: 0 0 0.5rem;
  font-family: var(--rf-font-display);
  font-size: 1.25rem;
}

.rf-nsfw-modal__panel p {
  margin: 0 0 0.85rem;
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
}

.rf-nsfw-modal__opt {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.rf-nsfw-modal__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: flex-end;
}

.rf-nsfw-modal__actions button {
  appearance: none;
  border: 1px solid var(--vp-c-divider);
  font: inherit;
  font-size: 0.9rem;
  padding: 0.45rem 0.9rem;
  cursor: pointer;
}

.rf-nsfw-modal__cancel {
  background: transparent;
  color: var(--vp-c-text-1);
}

.rf-nsfw-modal__confirm {
  background: var(--vp-c-brand-3);
  border-color: var(--vp-c-brand-3);
  color: #fbfbfb;
}

.rf-nsfw-modal__hint {
  margin: 0.75rem 0 0 !important;
  font-size: 0.7rem !important;
  color: var(--vp-c-text-3) !important;
}
</style>
