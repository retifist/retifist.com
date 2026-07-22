<script setup lang="ts">
import { computed, ref } from 'vue'
import type { CatalogItem } from '../utils/catalog'
import { filterByTag, uniqueTags } from '../utils/catalog'
import CatalogCardList from './CatalogCardList.vue'

const props = defineProps<{
  items: CatalogItem[]
}>()

const activeTag = ref<string | null>(null)
const tags = computed(() => uniqueTags(props.items))
const visible = computed(() => filterByTag(props.items, activeTag.value))

function selectTag(tag: string) {
  activeTag.value = activeTag.value === tag ? null : tag
}

function clearFilter() {
  activeTag.value = null
}
</script>

<template>
  <div class="rf-tag-filter">
    <div class="rf-tag-filter__bar" role="group" aria-label="Filter by tag">
      <button
        v-for="tag in tags"
        :key="tag"
        type="button"
        class="rf-tag-filter__chip"
        :class="{ 'is-active': activeTag === tag }"
        :aria-pressed="activeTag === tag"
        @click="selectTag(tag)"
      >
        {{ tag }}
      </button>
      <button
        v-if="activeTag"
        type="button"
        class="rf-tag-filter__clear"
        @click="clearFilter"
      >
        Clear filter
      </button>
    </div>
    <CatalogCardList :items="visible" />
  </div>
</template>

<style scoped>
.rf-tag-filter__bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0.75rem 0 0.25rem;
  font-family: var(--rf-font-ui);
}

.rf-tag-filter__chip,
.rf-tag-filter__clear {
  appearance: none;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-brand-1);
  font: inherit;
  font-size: 0.8rem;
  padding: 0.3rem 0.65rem;
  cursor: pointer;
}

.rf-tag-filter__chip.is-active {
  background: rgba(126, 182, 173, 0.18);
  border-color: var(--vp-c-brand-1);
}

.rf-tag-filter__clear {
  color: var(--vp-c-text-2);
}
</style>
