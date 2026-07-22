<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'

const props = withDefaults(
  defineProps<{
    href: string
    label: string
    available?: boolean
    note?: string
  }>(),
  {
    available: true,
  },
)

const resolvedHref = computed(() => withBase(props.href))
</script>

<template>
  <div class="rf-download">
    <div class="rf-download__row">
      <a
        v-if="available"
        class="rf-download__link"
        :href="resolvedHref"
        download
      >{{ label }}</a>
      <span v-else class="rf-download__pending">{{ label }} — PDF coming soon</span>
    </div>
    <p v-if="note" class="rf-download__note">{{ note }}</p>
  </div>
</template>

<style scoped>
.rf-download {
  margin: 0.75rem 0 1.25rem;
  padding: 0.85rem 1rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-top: 3px solid var(--vp-c-brand-1);
  font-family: var(--rf-font-ui);
}

.rf-download__link {
  color: var(--vp-c-brand-1);
  font-weight: 600;
  text-decoration: none;
}

.rf-download__link:hover {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
}

.rf-download__pending {
  color: var(--vp-c-text-2);
  font-weight: 500;
}

.rf-download__note {
  margin: 0.4rem 0 0;
  color: var(--vp-c-text-3);
  font-size: 0.85rem;
}
</style>
