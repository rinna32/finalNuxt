<script setup lang="ts">
import type { Products } from '~/types/Products'

const query = ref('')
const products = ref<Products[]>([])


onMounted(async () => {
  products.value = await $fetch<Products[]>('http://localhost:1452/api/products/')
})


const results = computed(() => {
  if (!query.value.trim()) return []

  const q = query.value.toLowerCase()

  return products.value.filter(p => 
    p.name.toLowerCase().includes(q) || 
    p.brand?.toLowerCase().includes(q)
  )
})


const getImage = (p: Products): string | undefined => {
  const first = p.images?.[0] as any
  

  if (typeof first === 'string') {
    return first.startsWith('http') ? first : `http://localhost:1452/${first}`
  }
  

  if (first?.image_link) {
    const link = first.image_link
    return link.startsWith('http') ? link : `http://localhost:1452/${link}`
  }
  
  return undefined
}

const select = (p: Products) => {
  query.value = ''
  navigateTo(`/product/${p.id}`)
}
</script>

<template>
  <div class="relative w-full max-w-md">
    
    <input
      v-model="query"
      placeholder="Search..."
      class="w-full pl-9 pr-4 py-2 text-sm border rounded-lg focus:outline-none focus:border-black"
    />
    <img src="/Search.png" class="absolute left-3 top-1.5 text-gray-400"/>


    <div v-if="query.trim() && results.length" class="absolute z-50 w-full mt-1 bg-white border rounded-lg shadow overflow-hidden">
      <div 
        v-for="p in results" 
        :key="p.id"
        @click="select(p)"
        class="flex items-center gap-3 p-2.5 hover:bg-gray-50 cursor-pointer"
      >
        <img v-if="getImage(p)" :src="getImage(p)" :alt="p.name" class="w-8 h-8 object-contain">
        <div class="min-w-0">
          <p class="text-sm truncate">{{ p.name }}</p>
          <p class="text-xs text-gray-500">${{ p.discountPrice ?? p.price }}</p>
        </div>
      </div>
    </div>
    
  </div>
</template>