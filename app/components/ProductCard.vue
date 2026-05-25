<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="bg-white rounded-lg p-6 relative">

    <div class="flex justify-center mb-4">
      <img v-if="product.images?.[0]" :src="`http://localhost:1452/${product.images[0]}`"
        class="h-[180px] object-contain" />
    </div>


    <h4 class="text-center text-sm font-light italic text-gray-900 mb-2 line-clamp-2">
      {{ product.name }}
    </h4>
    <p class="text-center text-xl font-light text-gray-900 mb-5">
      ${{ product.price }}
    </p>


    <NuxtLink :to="`/product/${product.id}`"
      class="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors text-sm">
      Buy Now
    </NuxtLink>

  </div>
</template>