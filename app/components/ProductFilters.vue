<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['filter-change'])

const { data: products } = await useFetch('http://localhost:1452/api/products/')


const openSections = ref({
    category: true,
    discount: false,
    rating: false
})


const selectedFilters = ref({
    category: [],
    discount: [],
    rating: []
})

const toggleSection = (section) => {
    openSections.value[section] = !openSections.value[section]
}


const categories = computed(() => {
    if (!products.value) return []

    const categoryNames = {
        'phones': 'Телефоны',
        'laptops': 'Ноутбуки',
        'cases': 'Чехлы',
        'watches': 'Часы',
        'tablets': 'Планшеты',
        'headphones': 'Наушники',
        'cameras': 'Камеры',
        'gaming': 'Игровые консоли'
    }

    const uniqueCategories = [...new Set(products.value.map(p => p.category).filter(Boolean))]

    return uniqueCategories.map(cat => ({
        value: cat,
        label: categoryNames[cat] || cat,
        count: products.value.filter(p => p.category === cat).length
    }))
})


const discountOptions = computed(() => {
    if (!products.value) return []
    const withDiscount = products.value.filter(p => p.discount || p.discounted || p.oldPrice).length
    return [
        { value: 'true', label: 'Со скидкой', count: withDiscount },
        { value: 'false', label: 'Без скидки', count: products.value.length - withDiscount }
    ]
})


const ratingOptions = [
    { value: '4', label: '4 и выше' },
    { value: '3', label: '3 и выше' },
    { value: '2', label: '2 и выше' },
    { value: '1', label: '1 и выше' }
]


const toggleFilter = (type, value) => {
    const index = selectedFilters.value[type].indexOf(value)

    if (index === -1) {

        selectedFilters.value[type].push(value)
    } else {

        selectedFilters.value[type].splice(index, 1)
    }

    emit('filter-change', { ...selectedFilters.value })
}


const isChecked = (type, value) => {
    return selectedFilters.value[type].includes(value)
}

const clearFilters = () => {
    selectedFilters.value = {
        category: [],
        discount: [],
        rating: []
    }
    emit('filter-change', { ...selectedFilters.value })
}

const hasActiveFilters = computed(() => {
    return Object.values(selectedFilters.value).some(arr => arr.length > 0)
})
</script>

<template>
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between mb-6">

            <button v-if="hasActiveFilters" @click="clearFilters"
                class="text-sm text-grey hover:text-blue-800 font-medium">
                Reset
            </button>
        </div>

        <div class="border-b border-gray-200 last:border-b-0 pb-4 mb-4">
            <button @click="toggleSection('category')" class="w-full flex items-center justify-between py-2 text-left">
                <span class="font-medium text-gray-900">Categories</span>
                <!-- <img src="" alt="">  для стрелочки -->
            </button>

            <div v-show="openSections.category" class="mt-3 space-y-2">
                <label v-for="category in categories" :key="category.value"
                    class="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" :value="category.value" :checked="isChecked('category', category.value)"
                        @change="toggleFilter('category', category.value)"
                        class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                    <span class="flex-1 text-gray-700">{{ category.label }}</span>
                    <span class="text-sm text-gray-400">{{ category.count }}</span>
                </label>
            </div>
        </div>
                <div class="border-b border-gray-200 last:border-b-0 pb-4 mb-4">
            <button @click="toggleSection('discount')" class="w-full flex items-center justify-between py-2 text-left">
                <span class="font-medium text-gray-900">Sale</span>
            </button>

            <div v-show="openSections.discount" class="mt-3 space-y-2">
                <label v-for="option in discountOptions" :key="option.value"
                    class="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" :value="option.value" :checked="isChecked('discount', option.value)"
                        @change="toggleFilter('discount', option.value)"
                        class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                    <span class="flex-1 text-gray-700">{{ option.label }}</span>
                    <span class="text-sm text-gray-400">{{ option.count }}</span>
                </label>
            </div>
        </div>


        <div>
            <button @click="toggleSection('rating')" class="w-full flex items-center justify-between py-2 text-left">
                <span class="font-medium text-gray-900">Rating</span>
            </button>

            <div v-show="openSections.rating" class="mt-3 space-y-2">
                <label v-for="option in ratingOptions" :key="option.value"
                    class="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" :value="option.value" :checked="isChecked('rating', option.value)"
                        @change="toggleFilter('rating', option.value)"
                        class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                    <span class="text-gray-700">{{ option.label }}</span>
                </label>
            </div>
        </div>
    </div>
</template>