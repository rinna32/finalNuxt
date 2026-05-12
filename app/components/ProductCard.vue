<template>
  <p class="text-gray-500 mb-4">hi</p>
  
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    <div 
      v-for="product in data?.slice(0, 8)" 
      :key="product.id"
      class="bg-gray-50 rounded-xl p-5 relative transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1">

      <button class="absolute top-4 right-4 text-2xl text-gray-400 cursor-pointer transition-all duration-200 hover:text-[#ff3b30] z-10">
        ♡
      </button>

 
      <img 
        v-if="product.images?.[0]" 
        :src="`http://localhost:1452/${product.images[0]}`"
        :alt="product.name"
        class="w-full h-[250px] object-contain mb-4"/>

     

      <h4 class="text-[15px] font-semibold mb-2 leading-snug">
        {{ product.name || product.brand }}
      </h4>

    
      <p class="text-[18px] font-bold mb-4">
        {{ product.price }}$
      </p>


      <p class="text-sm text-gray-600 mb-4">
        {{ product.isAvailable ? 'В наличии' : 'Нет в наличии' }}
      </p>

   
      <div class="flex gap-2">
        <button class="flex-1 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Products } from '~/types/Products';

const { data } = await useFetch<Products[]>(
  "http://localhost:1452/api/products/",
);
</script>