<script setup lang="ts">
import { computed } from 'vue'
import type { Products } from '~/types/Products'

const props = defineProps<{product: Products}>()

const { addToCart } = useCart()
const { addToFavorites, removeFromFavorites, isInFavorites } = useFavorites()

const isFavorite = computed(() => isInFavorites(props.product.id))

const toggleFavorite = () => {
  if (isFavorite.value) {
    removeFromFavorites(props.product.id)
  } else {
    addToFavorites(props.product)
  }
}

const handleAddToCart = () => {
  addToCart(props.product, 1)
}
</script>

<template>
  <div class="bg-white rounded-lg p-6 relative group hover:shadow-lg transition-shadow duration-300">
    

    <button 
      @click="toggleFavorite"
      class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-50 transition-colors z-10"
      aria-label="Add to favorites"
    >
      <img 
        :src="isFavorite ? '/Favorite_duotone.svg' : '/Favorites.png'" 
        class="w-7 h-7"
        alt="Favorite"
      />
    </button>


    <NuxtLink :to="`/product/${product.id}`" class="block">
      <div class="flex justify-center mb-4">
        <img 
          v-if="product.images?.[0]" 
          :src="`http://localhost:1452/${product.images[0]}`"
          :alt="product.name"
          class="h-[180px] object-contain"
        />
      </div>


      <h4 class="text-center text-sm font-light italic text-gray-900 mb-2 line-clamp-2">
        {{ product.name }}
      </h4>


      <p class="text-center text-xl font-light text-gray-900 mb-5">
        ${{ product.price }}
      </p>
    </NuxtLink>


    <button 
      @click="handleAddToCart"
      class="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
    >
      Add to Cart
    </button>
    
  </div>
</template>