<script setup lang="ts">
import {
  PATTERN_PLACEHOLDER_MESSAGE,
  PATTERN_PLACEHOLDER_TITLE,
} from '../utils/patternPlaceholder'
import WarningCallout from './WarningCallout.vue'
</script>

<template>
  <WarningCallout :title="PATTERN_PLACEHOLDER_TITLE">
    {{ PATTERN_PLACEHOLDER_MESSAGE }}
  </WarningCallout>
</template>
