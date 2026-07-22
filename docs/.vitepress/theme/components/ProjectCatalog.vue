<script setup lang="ts">
import { computed, ref } from 'vue'
import type { CatalogItem } from '../utils/catalog'
import { filterCatalog, uniqueTags } from '../utils/catalog'
import CatalogCardList from './CatalogCardList.vue'

const props = defineProps<{
  items: CatalogItem[]
}>()

const activeTag = ref<string | null>(null)
const query = ref('')
const tags = computed(() => uniqueTags(props.items))
const visible = computed(() =>
  filterCatalog(props.items, { tag: activeTag.value, query: query.value }),
)

function selectTag(tag: string) {
  activeTag.value = activeTag.value === tag ? null : tag
}

function clearFilter() {
  activeTag.value = null
  query.value = ''
}
</script>

<template>
  <div class="rf-project-catalog">
    <label class="rf-project-catalog__search">
      <span class="rf-project-catalog__search-label">Search projects</span>
      <input
        v-model="query"
        type="search"
        class="rf-project-catalog__input"
        placeholder="Search title, notes, or tags…"
        autocomplete="off"
      />
    </label>
    <div class="rf-project-catalog__bar" role="group" aria-label="Filter by tag">
      <button
        v-for="tag in tags"
        :key="tag"
        type="button"
        class="rf-project-catalog__chip"
        :class="{ 'is-active': activeTag === tag }"
        :aria-pressed="activeTag === tag"
        @click="selectTag(tag)"
      >
        {{ tag }}
      </button>
      <button
        v-if="activeTag || query.trim()"
        type="button"
        class="rf-project-catalog__clear"
        @click="clearFilter"
      >
        Clear
      </button>
    </div>
    <p v-if="!visible.length" class="rf-project-catalog__empty">No projects match that filter.</p>
    <CatalogCardList v-else :items="visible" />
  </div>
</template>

<style scoped>
.rf-project-catalog__search {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin: 0.75rem 0 0.5rem;
  font-family: var(--rf-font-ui);
}

.rf-project-catalog__search-label {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  letter-spacing: 0.02em;
}

.rf-project-catalog__input {
  appearance: none;
  width: 100%;
  max-width: 28rem;
  padding: 0.55rem 0.7rem;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font: inherit;
  font-size: 0.95rem;
}

.rf-project-catalog__input:focus {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 1px;
}

.rf-project-catalog__bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0.5rem 0 0.25rem;
  font-family: var(--rf-font-ui);
}

.rf-project-catalog__chip,
.rf-project-catalog__clear {
  appearance: none;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-brand-1);
  font: inherit;
  font-size: 0.8rem;
  padding: 0.3rem 0.65rem;
  cursor: pointer;
}

.rf-project-catalog__chip.is-active {
  background: rgba(126, 182, 173, 0.18);
  border-color: var(--vp-c-brand-1);
}

.rf-project-catalog__clear {
  color: var(--vp-c-text-2);
}

.rf-project-catalog__empty {
  margin: 1rem 0;
  color: var(--vp-c-text-2);
  font-family: var(--rf-font-ui);
}
</style>
