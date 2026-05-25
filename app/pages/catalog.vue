<script setup>
import { ref, computed, watch } from 'vue'

const { data: allProducts, pending } = await useFetch('http://localhost:1452/api/products/')

const activeFilters = ref({
    category: [],
    discount: [],
    rating: []
})

const handleFilterChange = (filters) => {
    activeFilters.value = filters
    currentPage.value = 1
}

const filteredProducts = computed(() => {
    if (!allProducts.value) return []

    let result = [...allProducts.value]

    if (activeFilters.value.category?.length > 0) {
        result = result.filter(p => activeFilters.value.category.includes(p.category))
    }

    if (activeFilters.value.discount?.length > 0) {
        result = result.filter(p => {
            const hasDiscount = p.discount || p.discounted || p.oldPrice || false
            if (activeFilters.value.discount.includes('true') && activeFilters.value.discount.includes('false')) {
                return true
            }
            if (activeFilters.value.discount.includes('true')) return hasDiscount
            if (activeFilters.value.discount.includes('false')) return !hasDiscount
            return true
        })
    }

    if (activeFilters.value.rating?.length > 0) {
        const maxRating = Math.max(...activeFilters.value.rating.map(Number))
        result = result.filter(p => (p.rating || 0) >= maxRating)
    }

    return result
})


const sortBy = ref('default')

const sortedProducts = computed(() => {
    let result = [...filteredProducts.value]

    if (sortBy.value === 'price_asc') {
        result.sort((a, b) => (a.price || 0) - (b.price || 0))
    } else if (sortBy.value === 'price_desc') {
        result.sort((a, b) => (b.price || 0) - (a.price || 0))
    } else if (sortBy.value === 'rating_desc') {
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0))
    } else if (sortBy.value === 'rating_asc') {
        result.sort((a, b) => (a.rating || 0) - (b.rating || 0))
    }

    return result
})


const currentPage = ref(1)
const itemsPerPage = 9


const totalPages = computed(() => {
    return Math.ceil(sortedProducts.value.length / itemsPerPage)
})


const currentPageProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return sortedProducts.value.slice(start, end)
})

const goToPage = (page) => {
    if (page < 1 || page > totalPages.value) return
    currentPage.value = page
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

const prevPage = () => {
    if (currentPage.value > 1) {
        goToPage(currentPage.value - 1)
    }
}

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        goToPage(currentPage.value + 1)
    }
}

const visiblePages = computed(() => {
    const pages = []
    const maxVisible = 5

    if (totalPages.value <= maxVisible) {
        for (let i = 1; i <= totalPages.value; i++) {
            pages.push(i)
        }
    } else {
        if (currentPage.value <= 3) {
            for (let i = 1; i <= 4; i++) {
                pages.push(i)
            }
            pages.push('...')
            pages.push(totalPages.value)
        } else if (currentPage.value >= totalPages.value - 2) {
            pages.push(1)
            pages.push('...')
            for (let i = totalPages.value - 3; i <= totalPages.value; i++) {
                pages.push(i)
            }
        } else {
            pages.push(1)
            pages.push('...')
            for (let i = currentPage.value - 1; i <= currentPage.value + 1; i++) {
                pages.push(i)
            }
            pages.push('...')
            pages.push(totalPages.value)
        }
    }
    return pages
})


const showingRange = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage + 1
    const end = Math.min(currentPage.value * itemsPerPage, sortedProducts.value.length)
    return { start, end }
})
</script>

<template>
    <div class="max-w-7xl mx-auto px-6 py-12">
        <div class="flex flex-col lg:flex-row gap-8">
                      <aside class="w-full lg:w-1/4">
                <ProductFilters @filter-change="handleFilterChange" />
            </aside>

            <main class="w-full lg:w-3/4">

                <div class="mb-6 flex items-center justify-between">
                    <p class="text-gray-600">
                        Selected Products: <span class="font-semibold">{{ showingRange.start }}-{{ showingRange.end
                        }}</span>
                    </p>

                    <div class="relative">
                        <select v-model="sortBy"
                            class="w-full appearance-none border border-gray-200 rounded-lg px-6 py-2 pr-10 text-sm bg-white cursor-pointer">
                            <option value="default">Sort by</option>
                            <option value="price_asc">Price: Low to High</option>
                            <option value="price_desc">Price: High to Low</option>
                            <option value="rating_desc">Rating: High to Low</option>
                            <option value="rating_asc">Rating: Low to High</option>
                        </select>


                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div v-if="pending" class="text-center py-10">
                    <p class="text-gray-500">Загрузка товаров...</p>
                </div>

                <div v-else-if="!sortedProducts.length" class="text-center py-10">
                    <p class="text-gray-500 text-lg mb-4">Товары не найдены</p>
                    <button @click="activeFilters = { category: [], discount: [], rating: [] }"
                        class="px-6 py-2 bg-black text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Reset
                    </button>
                </div>


                <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <ProductCard v-for="product in currentPageProducts" :key="product.id" :product="product" />
                </div>

                <div v-if="totalPages > 1" class="flex items-center justify-center gap-2">
                    <button @click="prevPage" :disabled="currentPage === 1"
                        class="w-12 h-12 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        aria-label="Предыдущая страница">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <template v-for="(page, index) in visiblePages" :key="index">
                        <span v-if="page === '...'" class="w-12 h-12 flex items-center justify-center text-gray-400">
                            ...
                        </span>
                        <button v-else @click="goToPage(page)" :class="[
                            'w-12 h-12 flex items-center justify-center rounded-lg font-medium transition-colors',
                            currentPage === page
                                ? 'bg-black text-white'
                                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                        ]">
                            {{ page }}
                        </button>
                    </template>
                                        <button @click="nextPage" :disabled="currentPage === totalPages"
                        class="w-12 h-12 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        aria-label="Следующая страница">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </main>
        </div>
    </div>
</template>

<style scoped>
html {
    scroll-behavior: smooth;
}
</style>