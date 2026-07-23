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

const homeHero = computed(() => {
  const hero = (frontmatter.value as { hero?: Record<string, string> })?.hero
  if (!hero) return null
  return {
    name: hero.name || '',
    text: hero.text || '',
    tagline: hero.tagline || '',
  }
})

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
    <template v-if="isHome && homeHero" #home-hero-info>
      <h1 class="heading rf-hero-brand">
        <img
          class="rf-hero-logo"
          src="/brand/logo-good-4.svg"
          width="192"
          height="192"
          alt=""
        />
        <span v-if="homeHero.name" class="name clip">{{ homeHero.name }}</span>
        <span v-if="homeHero.text" class="text">{{ homeHero.text }}</span>
      </h1>
      <p v-if="homeHero.tagline" class="tagline">{{ homeHero.tagline }}</p>
    </template>
    <template v-if="isHome" #home-hero-image>
      <img
        class="image-src rf-hero-photo"
        src="/brand/hero-placeholder.jpg"
        width="1280"
        height="1280"
        alt=""
      />
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
