<script setup lang="ts">
import DefaultTheme from 'vitepress/theme-without-fonts'
import { useData, useRoute } from 'vitepress'
import { computed, watchEffect } from 'vue'
import Breadcrumbs from './components/Breadcrumbs.vue'
import LessonEstimate from './components/LessonEstimate.vue'
import NsfwOutboundModal from './components/NsfwOutboundModal.vue'
import UnderConstructionBanner from './components/UnderConstructionBanner.vue'

const { frontmatter, page, theme } = useData()
const route = useRoute()

const isHome = computed(
  () =>
    page.value?.isNotFound !== true &&
    (frontmatter.value?.layout === 'home' || page.value?.relativePath === 'index.md'),
)

const isLessonDoc = computed(() => page.value?.relativePath?.startsWith('lessons/') === true)

const lessonEstimate = computed(() => {
  if (!isLessonDoc.value) return ''
  const fm = frontmatter.value as { estimate?: string; duration?: string }
  return (fm.estimate || fm.duration || '').trim()
})

watchEffect(() => {
  const path = route.path || ''
  if (path.includes('/technique/')) {
    theme.value.docFooter = { prev: 'Previous technique', next: 'Next technique' }
  } else if (path.includes('/lessons/')) {
    theme.value.docFooter = { prev: 'Previous lesson', next: 'Next lesson' }
  } else {
    theme.value.docFooter = { prev: 'Previous page', next: 'Next page' }
  }
})
</script>

<template>
  <DefaultTheme.Layout>
    <template #layout-top>
      <UnderConstructionBanner />
    </template>
    <template #doc-before>
      <Breadcrumbs v-if="!isHome" />
    </template>
    <template #doc-top>
      <LessonEstimate v-if="lessonEstimate" :estimate="lessonEstimate" />
    </template>
    <template #layout-bottom>
      <NsfwOutboundModal />
    </template>
  </DefaultTheme.Layout>
</template>
