<template>

  <web-layout>
    <div class="px-28 grid grid-cols-2 gap-4">
      <div class="py-28 text-start">
        <h1 class="text-3xl font-semibold">Great, Creative and Innovative <span class="text-blue-600">Robotic Team</span> </h1>
        <p class="text-gray-400 mt-6 mb-12">Consectetur adipisicing elit. Enim eos, labore hic sapiente repellendus magnam deserunt ullam sint commodi asperiores optio corrupti maxime facilis ducimus nemo repudiandae quisquam quam! Est qui consectetur asperiores, nihil assumenda sequi?</p>
        <button type="button" class="py-3 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">About us</button>
        <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-6 py-3 text-center mr-2 mb-2">See Our Products</button>
      </div>
    </div>

    <div class="p28 bg-gray-100">
      div
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
