<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import type { CatalogItem } from '../utils/catalog'
import { formatDuration } from '../utils/catalog'

const props = withDefaults(
  defineProps<{
    items: CatalogItem[]
    variant?: 'default' | 'lit'
  }>(),
  { variant: 'default' },
)

const rows = computed(() =>
  props.items.map((item) => ({
    ...item,
    durationLabel: formatDuration(item.duration),
  })),
)
</script>

<template>
  <ul class="rf-catalog" :class="{ 'rf-catalog--lit': variant === 'lit' }" role="list">
    <li v-for="item in rows" :key="item.link" class="rf-catalog__item">
      <a class="rf-catalog__link" :href="withBase(item.link)">
        <span class="rf-catalog__head">
          <span class="rf-catalog__title">{{ item.title }}</span>
          <span v-if="item.durationLabel" class="rf-catalog__duration">{{ item.durationLabel }}</span>
          <span v-else class="rf-catalog__duration rf-catalog__duration--empty" aria-hidden="true">—</span>
        </span>
        <p v-if="item.description" class="rf-catalog__desc">{{ item.description }}</p>
        <ul v-if="item.tags?.length" class="rf-catalog__tags" aria-label="Tags">
          <li v-for="tag in item.tags" :key="tag">{{ tag }}</li>
        </ul>
      </a>
    </li>
  </ul>
</template>

<style scoped>
.rf-catalog {
  list-style: none;
  margin: 1rem 0 1.5rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.rf-catalog__item {
  padding: 0;
  border-bottom: 1px solid var(--vp-c-divider);
}

.rf-catalog__item:first-child {
  border-top: 1px solid var(--vp-c-divider);
}

.rf-catalog__link {
  display: flex;
  flex-direction: column;
  padding: 0.9rem 0;
  text-decoration: none;
  color: inherit;
  font-family: var(--rf-font-ui);
  cursor: pointer;
}

.rf-catalog__link:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.rf-catalog__head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.35rem 1rem;
}

.rf-catalog__title {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.rf-catalog__link:hover .rf-catalog__title {
  text-decoration: underline;
}

.rf-catalog__duration {
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
  white-space: nowrap;
}

.rf-catalog__duration--empty {
  color: var(--vp-c-text-3);
}

.rf-catalog__desc {
  margin: 0.35rem 0 0;
  color: var(--vp-c-text-2);
  font-size: 0.92rem;
  font-family: var(--rf-font-body);
}

.rf-catalog__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  list-style: none;
  margin: 0.5rem 0 0;
  padding: 0;
}

.rf-catalog__tags li {
  font-family: var(--rf-font-ui);
  font-size: 0.75rem;
  color: var(--vp-c-brand-1);
  background: rgba(126, 182, 173, 0.12);
  padding: 0.15rem 0.45rem;
}

.rf-catalog--lit .rf-catalog__title {
  color: var(--rf-lit-1);
}

.rf-catalog--lit .rf-catalog__link:focus-visible {
  outline-color: var(--rf-lit-1);
}

.rf-catalog--lit .rf-catalog__link:hover .rf-catalog__title {
  color: var(--rf-lit-2);
}

.rf-catalog--lit .rf-catalog__duration {
  color: var(--rf-lit-3);
}

.rf-catalog--lit .rf-catalog__desc {
  color: var(--rf-lit-muted);
}
</style>
