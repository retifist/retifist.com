<script setup lang="ts">
import { UNDER_CONSTRUCTION_MESSAGE } from '../utils/underConstruction'
</script>

<template>
  <div class="rf-under-construction" role="status">
    <p class="rf-under-construction__text">{{ UNDER_CONSTRUCTION_MESSAGE }}</p>
  </div>
</template>

<style scoped>
.rf-under-construction {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: calc(var(--vp-z-index-nav, 30) + 1);
  box-sizing: border-box;
  min-height: var(--rf-under-construction-height);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.45rem 1rem;
  background: var(--vp-c-warning-soft);
  border-bottom: 1px solid var(--vp-c-warning-2);
  color: var(--vp-c-warning-1);
  font-family: var(--rf-font-ui);
  font-size: 0.875rem;
  line-height: 1.35;
  text-align: center;
}

.rf-under-construction__text {
  margin: 0;
  max-width: 52rem;
}
</style>
