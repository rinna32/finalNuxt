<template>
  <div class="max-w-7xl mx-auto px-6 py-12">
    <h2 class="mb-10 text-[28px] text-black font-light italic tracking-tight">Discounts up to -50%</h2>


    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <div 
        v-for="(product, index) in data?.slice(0, 4)" 
        :key="product.id"
        class="bg-white rounded-lg p-6 relative">


        <button 
          class="absolute top-5 right-5 text-xl text-gray-400 hover:text-red-500 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
          </svg>
        </button>


        <div class="flex justify-center mb-4">
          <img 
            v-if="product.images?.[0]" 
            :src="`http://localhost:1452/${product.images[0]}`"
            :alt="product.name"
            class="h-[180px] object-contain"/>
        </div>

  
        <h4 class="text-center text-sm font-light italic text-gray-900 mb-2 leading-snug line-clamp-2">
          {{ product.name }}
        </h4>

    
        <p class="text-center text-xl font-light text-gray-900 mb-5">
          ${{ product.price }}
        </p>

      
        <button class="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors text-sm">
          Buy Now
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