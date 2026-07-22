<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  estimate?: string
}>()

const label = computed(() => (props.estimate || '').trim())
</script>

<template>
  <p v-if="label" class="rf-lesson-estimate" aria-label="Estimated time">
    <span class="rf-lesson-estimate__kicker">Est. time</span>
    <span class="rf-lesson-estimate__value">{{ label }}</span>
  </p>
</template>

<style scoped>
.rf-lesson-estimate {
  float: right;
  margin: 0 0 0.75rem 1rem;
  padding: 0.55rem 0.75rem;
  max-width: 11rem;
  text-align: right;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-top: 2px solid var(--vp-c-brand-2);
  font-family: var(--rf-font-ui);
  line-height: 1.25;
}

.rf-lesson-estimate__kicker {
  display: block;
  font-size: 0.7rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
  margin-bottom: 0.2rem;
}

.rf-lesson-estimate__value {
  display: block;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

@media (max-width: 640px) {
  .rf-lesson-estimate {
    float: none;
    margin: 0 0 1rem;
    max-width: none;
    text-align: left;
  }
}
</style>
