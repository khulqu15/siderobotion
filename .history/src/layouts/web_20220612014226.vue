<template>
  <div id="app-web">
    <div id="nav">
      <navigation-header/>
    </div>
    <div id="body-content">
      <slot id="content"></slot>
    </div>
  </div>
</template>

<script>
import NavigationHeader from '@/components/NavigationHeader.vue'
export default {
  components: {
    NavigationHeader
  }
}
</script>
