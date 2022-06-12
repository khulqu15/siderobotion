<template>

  <web-layout>
    <div class="px-28 py-12 grid grid-cols-2 gap-4">
      <div class="py-28 text-start">
        <h1 class="text-3xl">Great Robotic</h1>
      </div>
    </div>
  </web-layout>

</template>

<script>
import WebLayout from '@/layouts/WebLayout.vue'
export default {
  name: 'HomeView',
  components: {
    WebLayout
  }
}
</script>
