<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute, withBase } from 'vitepress'
import { buildBreadcrumbs } from '../utils/breadcrumbs'

const route = useRoute()
const { page, frontmatter } = useData()

const crumbs = computed(() => {
  const title =
    (frontmatter.value?.title as string | undefined) ||
    (page.value?.title as string | undefined)
  return buildBreadcrumbs(route.path, title)
})

const show = computed(() => crumbs.value.length > 1 || route.path !== '/')
</script>

<template>
  <nav v-if="show" class="rf-breadcrumbs" aria-label="Breadcrumb">
    <ol>
      <li v-for="(crumb, i) in crumbs" :key="`${crumb.title}-${i}`">
        <a v-if="crumb.link" :href="withBase(crumb.link)">{{ crumb.title }}</a>
        <span v-else aria-current="page">{{ crumb.title }}</span>
        <span v-if="i < crumbs.length - 1" class="rf-breadcrumbs__sep" aria-hidden="true">/</span>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.rf-breadcrumbs {
  margin: 0 0 1rem;
  font-family: var(--rf-font-ui);
  font-size: 0.8125rem;
  line-height: 1.4;
  color: var(--vp-c-text-2);
}

.rf-breadcrumbs ol {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 0.15rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.rf-breadcrumbs li {
  display: inline-flex;
  align-items: center;
  max-width: 100%;
}

.rf-breadcrumbs a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.rf-breadcrumbs a:hover {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
}

.rf-breadcrumbs span[aria-current='page'] {
  color: var(--vp-c-text-1);
  overflow-wrap: anywhere;
}

.rf-breadcrumbs__sep {
  margin: 0 0.35rem;
  color: var(--vp-c-text-3);
}
</style>
