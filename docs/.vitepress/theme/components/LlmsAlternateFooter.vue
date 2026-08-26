<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { relativePathToLlmsPath } from '../utils/llmsPaths'

const { page } = useData()

const href = computed(() => relativePathToLlmsPath(page.value.relativePath || 'index.md'))
</script>

<template>
  <p class="rf-llms-footer">
    <a :href="href" class="rf-llms-footer__link">Markdown for agents</a>
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
