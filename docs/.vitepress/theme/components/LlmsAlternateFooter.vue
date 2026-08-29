<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { relativePathToLlmsPath } from '../utils/llmsPaths'

const { page } = useData()

const show = computed(
  () => page.value?.isNotFound !== true && page.value?.relativePath !== '404.md',
)

const href = computed(() => relativePathToLlmsPath(page.value.relativePath || 'index.md'))
</script>

<template>
  <p v-if="show" class="rf-llms-footer">
    <!-- target=_blank: VitePress treats .md as an in-app route and 404s the click. -->
    <a
      :href="href"
      class="rf-llms-footer__link"
      target="_blank"
      rel="noopener"
      >Markdown for agents</a>
  </p>
</template>

<style scoped>
.rf-llms-footer {
  margin: 2rem 0 0;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
  font-family: var(--rf-font-ui);
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
}

.rf-llms-footer__link {
  color: var(--vp-c-text-3);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.rf-llms-footer__link:hover {
  color: var(--vp-c-text-2);
}
</style>
