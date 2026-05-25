<template>
  <div class="min-h-screen flex flex-col bg-[#f5f5f7]">
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">


        <NuxtLink to="/">
          <img src="/logo.png" class="h-14 w-auto" />
        </NuxtLink>

        <Search />
        <div class="flex items-center gap-6">


          <NuxtLink to="/favourites" class="relative group">
            <img src="/Favorites.png" alt="Favorites"
              class="w-6 h-6 object-contain group-hover:opacity-80 transition-opacity" />

            <span v-if="favoritesCount > 0"
              class="absolute -top-2 -right-3 bg-black text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center leading-none">
              {{ favoritesCount }}
            </span>
          </NuxtLink>

          <NuxtLink to="/cart" class="relative group">
            <img src="/Cart1.png" alt="Cart" class="w-6 h-6 object-contain group-hover:opacity-80 transition-opacity" />

            <span v-if="cartTotalItems > 0"
              class="absolute -top-2 -right-3 bg-black text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center leading-none">
              {{ cartTotalItems }}
            </span>
          </NuxtLink>

        </div>
      </nav>
    </header>

    <main class="flex-1 w-full">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">

import { useCart } from '~/composables/useCart'
import { useFavorites } from '~/composables/useFavorites'


const { totalItems: cartTotalItems } = useCart()
const { count: favoritesCount } = useFavorites()
</script>