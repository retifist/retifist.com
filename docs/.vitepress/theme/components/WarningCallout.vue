<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    variant?: 'warning' | 'safety'
  }>(),
  { variant: 'warning' },
)
</script>

<template>
  <aside
    class="rf-warning"
    :class="{ 'rf-warning--safety': variant === 'safety' }"
    role="status"
  >
    <p class="rf-warning__text">
      <strong>{{ title }}. </strong><slot />
    </p>
  </aside>
</template>
