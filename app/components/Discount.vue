<template>
  <div class="max-w-7xl mx-auto px-6 py-12">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <div 
        v-for="(product, index) in data?.slice(0, 4)" 
        :key="product.id"
        class="bg-white rounded-lg p-6 relative">

        <!-- ✅ Кнопка избранного с картинками (как в ProductCard) -->
        <button 
          @click="toggleFavorite(product)"
          class="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-50 transition-colors"
          aria-label="Add to favorites"
        >
          <img 
            :src="isInFavorites(product.id) ? '/Favorite_duotone.svg' : '/Favorites.png'" 
            class="w-7 h-7"
            alt="Favorite"
          />
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

        <NuxtLink 
          :to="`/product/${product.id}`"
          class="w-full flex items-center justify-center bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
        >
          Buy Now
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Products } from '~/types/Products'

const { data } = await useFetch<Products[]>(
  "http://localhost:1452/api/products/",
)

// ✅ Импортируем функции для работы с избранным
const { addToFavorites, removeFromFavorites, isInFavorites } = useFavorites()

// ✅ Переключение статуса избранного
const toggleFavorite = (product: Products) => {
  if (isInFavorites(product.id)) {
    removeFromFavorites(product.id)
  } else {
    addToFavorites(product)
  }
}
</script>