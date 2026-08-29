<script setup lang="ts">
import { computed } from 'vue'
import { youtubeEmbedSrc, youtubeTitle } from '../utils/youtube'

const props = defineProps<{
  videoId: string
  title?: string
  /** Site path or URL to transcript (shown under the embed). */
  transcript?: string
}>()

const src = computed(() => youtubeEmbedSrc(props.videoId))
const iframeTitle = computed(() => youtubeTitle(props.title, props.videoId))
const transcriptHref = computed(() => props.transcript?.trim() || '')
</script>

<template>
  <div v-if="src" class="rf-youtube">
    <iframe
      :src="src"
      :title="iframeTitle"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      referrerpolicy="strict-origin-when-cross-origin"
    />
  </div>
  <p v-else class="rf-youtube__missing">Video embed unavailable — missing video id.</p>
  <p v-if="transcriptHref" class="rf-youtube__transcript">
    <a :href="transcriptHref" target="_blank" rel="noopener">Transcript</a>
  </p>
</template>

<style scoped>
.rf-youtube {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  margin: 1.25rem 0 0.35rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  overflow: hidden;
}

.rf-youtube iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.rf-youtube__missing {
  color: var(--vp-c-text-2);
  font-family: var(--rf-font-ui);
  font-size: 0.9rem;
}

.rf-youtube__transcript {
  margin: 0 0 1.25rem;
  font-family: var(--rf-font-ui);
  font-size: 0.875rem;
}
</style>
