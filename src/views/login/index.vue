<template>
  <div>Login</div>
  <el-button type="primary">Primary</el-button>
  {{ $store.state.name }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    return {}
  }
})
</script>
<style scoped></style>
