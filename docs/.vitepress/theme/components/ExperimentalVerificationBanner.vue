<script setup lang="ts">
import {
  EXPERIMENTAL_VERIFICATION_MESSAGE,
  EXPERIMENTAL_VERIFICATION_TITLE,
} from '../utils/experimentalVerification'
import WarningCallout from './WarningCallout.vue'

defineProps<{
  scope?: string
}>()
</script>

<template>
  <WarningCallout :title="EXPERIMENTAL_VERIFICATION_TITLE">
    {{ EXPERIMENTAL_VERIFICATION_MESSAGE }}
    <span v-if="scope" class="rf-warning__scope">{{ scope }}</span>
  </WarningCallout>
</template>
