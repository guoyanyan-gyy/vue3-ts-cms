<template>
  <div class="nav-header">
    <Expand
      style="width: 2em; height: 1.5em; margin-right: 8px; cursor: pointer"
      @click="handleFoldClick"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue'
const emit = defineEmits(['changeIsCollapse'])
const handleFoldClick = () => {
  emit('changeIsCollapse')
}
</script>
<style scoped></style>
