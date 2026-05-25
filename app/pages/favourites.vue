<!-- app/pages/favourites.vue -->
<script setup lang="ts">
import { useFavorites } from '~/composables/useFavorites'
import type { Products } from '~/types/Products'

const { favorites } = useFavorites()

// ✅ Универсальная функция для картинок (обходит конфликт типов string[] vs ProductImage[])
const getImage = (p: Products): string | undefined => {
  const first = (p.images as any)?.[0]
  if (!first) return undefined
  
  // Если API отдаёт строку
  if (typeof first === 'string') {
    return first.startsWith('http') ? first : `http://localhost:1452/${first}`
  }
  
  // Если API отдаёт объект
  if (first?.image_link) {
    const link = first.image_link
    return link.startsWith('http') ? link : `http://localhost:1452/${link}`
  }
  
  return undefined
}
</script>

<template>
  <div class="max-w-2xl mx-auto px-6 py-16">
    
    <!-- Заголовок + разделитель -->
    <h1 class="text-2xl font-light tracking-tight text-gray-900 mb-4">Favorite</h1>
    <div class="border-t border-gray-200 mb-2"></div>

    <!-- Пустое состояние -->
    <div v-if="favorites.length === 0" class="py-20 text-center">
      <p class="text-gray-400 font-light">Your favorites list is empty</p>
    </div>

    <!-- Список товаров -->
    <div v-else>
      <div v-for="(product, index) in favorites" :key="product.id" class="py-8">
        
        <!-- ✅ Ссылка на товар -->
        <NuxtLink :to="`/product/${product.id}`" class="block group">
          <div class="flex items-center gap-6">
            
            <!-- Картинка -->
            <div class="w-20 h-20 flex-shrink-0 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
              <img v-if="getImage(product)" :src="getImage(product)" :alt="product.name" class="w-full h-full object-contain" />
            </div>
            
            <!-- Название и ID -->
            <div>
              <h3 class="text-base font-light italic text-gray-900">
                {{ product.name }}
              </h3>
              <p class="text-sm text-gray-500 font-light mt-1">
                #{{ product.id }}
              </p>
            </div>
            
          </div>
        </NuxtLink>

        <!-- Разделитель между товарами (кроме последнего) -->
        <div v-if="index < favorites.length - 1" class="mt-8 border-t border-gray-200"></div>
      </div>
    </div>
    
  </div>
</template>