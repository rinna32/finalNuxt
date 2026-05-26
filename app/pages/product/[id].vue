<script setup lang="ts">
import type { Products } from '~/types/Products'

const route = useRoute()
const productId = route.params.id

const activeImage = ref(0)

const { addToCart } = useCart()
const { addToFavorites, removeFromFavorites, isInFavorites } = useFavorites()

const { data: product } = await useFetch<Products>(
    `http://localhost:1452/api/products/${productId}`
)

const isFavorite = computed(() => product.value ? isInFavorites(product.value.id) : false)

const toggleFavorite = () => {
    if (!product.value) return
    if (isFavorite.value) {
        removeFromFavorites(product.value.id)
    } else {
        addToFavorites(product.value)
    }
}

const handleAddToCart = () => {
    if (!product.value) return
    addToCart(product.value, 1)
}


const getProductImage = (img: any): string => {
    if (!img) return '/placeholder.png'
    if (typeof img === 'object' && img.image_link) {
        const link = img.image_link
        return link.startsWith('http') ? link : `http://localhost:1452/${link}`
    }
    const link = img as string
    return link.startsWith('http') ? link : `http://localhost:1452/${link}`
}
</script>

<template>
    <div class="min-h-screen bg-white">
        <div class="max-w-7xl mx-auto px-6 py-6">
            <NuxtLink to="/catalog"
                class="inline-flex items-center text-sm text-gray-500 hover:text-black transition-colors">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                Назад к каталогу
            </NuxtLink>
        </div>

   
        <div class="max-w-7xl mx-auto px-6 py-12">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

              
                <div class="flex gap-4">
                    <div class="flex-1 flex items-center justify-center bg-white">
                        <img :src="getProductImage(product?.images?.[activeImage])" :alt="product?.name"
                            class="max-h-[480px] object-contain" />
                    </div>
                </div>


                <div class="space-y-6">
                    <h1 class="text-3xl font-light italic text-gray-900">
                        {{ product?.brand }} {{ product?.name }}
                    </h1>

                    <div class="flex items-baseline gap-3">
                        <span class="text-3xl font-light text-gray-900">
                            ${{ product?.price }}
                        </span>
                    </div>
                                       
                    <div class="grid grid-cols-3 gap-3">
                        <div class="bg-gray-50 rounded-xl p-4 flex items-start gap-3">
                            <img src="/Screensize.png"/>
                            <div>
                                <span class="text-xs text-gray-400 font-light">Screen size</span>
                                <p class="text-sm font-normal text-gray-700 mt-1">6.7"</p>
                            </div>
                        </div>

                    
                        <div class="bg-gray-50 rounded-xl p-4 flex items-start gap-3">
                            <img src="/smartphone-rotate-2-svgrepo-com 2.png"/>
                            <div>
                                <span class="text-xs text-gray-400 font-light">CPU</span>
                                <p class="text-sm font-normal text-gray-700 mt-1">
                                    {{
                                        product?.characteristics?.find(
                                            item => item.characteristic === 'Процессор'
                                        )?.value || 'Apple A16 Bionic'
                                    }}
                                </p>
                            </div>
                        </div>


                        <div class="bg-gray-50 rounded-xl p-4 flex items-start gap-3">
                            <img src="/smartphone-rotate-2-svgrepo-com 2-2.png"/>
                            <div>
                                <span class="text-xs text-gray-400 font-light">Number of Cores</span>
                                <p class="text-sm font-normal text-gray-700 mt-1">6</p>
                            </div>
                        </div>
                        <div class="bg-gray-50 rounded-xl p-4 flex items-start gap-3">
                            <img src="/smartphone-rotate-2-svgrepo-com 2-3.png"/>
                            <div>
                                <span class="text-xs text-gray-400 font-light">Main camera</span>
                                <p class="text-sm font-normal text-gray-700 mt-1">48-12-12 MP</p>
                            </div>
                        </div>


                        <div class="bg-gray-50 rounded-xl p-4 flex items-start gap-3">
                           <img src="/smartphone-rotate-2-svgrepo-com 2-4.png"/>
                            <div>
                                <span class="text-xs text-gray-400 font-light">Front camera</span>
                                <p class="text-sm font-normal text-gray-700 mt-1">12 MP</p>
                            </div>
                        </div>


                        <div class="bg-gray-50 rounded-xl p-4 flex items-start gap-3">
                            <img src="/smartphone-rotate-2-svgrepo-com 2-5.png"/>
                            <div>
                                <span class="text-xs text-gray-400 font-light">Battery capacity</span>
                                <p class="text-sm font-normal text-gray-700 mt-1">4323 mAh</p>
                            </div>
                        </div>
                    </div>


                    <p class="text-sm text-gray-400 italic font-light leading-relaxed">
                        Enhanced capabilities thanks to an enlarged display of 6.7 inches and work without recharging
                        throughout the day.
                        Incredible photos as in weak, yes and in bright light using the new system with two cameras
                        <NuxtLink to="#" class="underline text-gray-400 hover:text-gray-600">more...</NuxtLink>
                    </p>

                    <div class="flex gap-3">
                        <button @click="toggleFavorite"
                            class="flex-1 border-2 border-gray-900 text-gray-900 py-3.5 rounded-lg hover:bg-gray-900 hover:text-white transition-all text-sm font-medium flex items-center justify-center gap-2">
                            
                            {{ isFavorite ? 'Added' : 'Add to Wishlist' }}
                        </button>

                        <button @click="handleAddToCart"
                            class="flex-1 bg-gray-900 text-white py-3.5 rounded-lg hover:bg-gray-700 transition-all text-sm font-medium">
                            Add to Cart
                        </button>
                    </div>


                    <div class="grid grid-cols-3 gap-6">
                        <div class="flex items-start gap-3">
                            <div class="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                <img src="/delivery-truck-svgrepo-com (1) 1.png"/>
                            </div>
                            <div>
                                <p class="text-sm text-gray-500 italic font-light">Free Delivery</p>
                                <p class="text-sm font-normal text-gray-900">1-2 day</p>
                            </div>
                        </div>


                        <div class="flex items-start gap-3">
                            <div class="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                               <img src="/shop-2-svgrepo-com 2.png"/>
                            </div>
                            <div>
                                <p class="text-sm text-gray-500 italic font-light">In Stock</p>
                                <p class="text-sm font-normal text-gray-900">Today</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-3">
                            <div class="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                <img src="/verify.png"/>
                            </div>
                            <div>
                                <p class="text-sm text-gray-500 italic font-light">Guaranteed</p>
                                <p class="text-sm font-normal text-gray-900">{{ product?.guarantee }} year</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-gray-50 py-16">
            <div class="max-w-5xl mx-auto px-6">
                <div class="bg-white rounded-2xl p-8 lg:p-12">
                    <h2 class="text-xl font-light italic text-gray-900 mb-6">Details</h2>
                    <p class="text-sm text-gray-400 italic font-light leading-relaxed mb-8">
                        Just as a book is judged by its cover, the first thing you notice when you pick up a modern
                        smartphone is the display. Nothing surprising, because advanced technologies allow you to
                        practically level the display frames and cutouts for the front camera and speaker, leaving no
                        room for bold design solutions. And how good that in such realities Apple everything is fine
                        with displays. Both critics and mass consumers always praise the quality of the picture provided
                        by the products of the Californian brand. And last year's 6.7-inch Retina panels, which had
                        ProMotion, caused real admiration for many.
                    </p>

                    <div class="space-y-0">
                        <div v-for="(char, index) in product?.characteristics" :key="index"
                            class="flex justify-between items-start py-4 border-b border-gray-100 last:border-0">
                            <span class="text-sm text-gray-500 pr-4">
                                {{ char.characteristic }}
                            </span>
                            <span class="text-sm text-gray-900 text-right whitespace-nowrap">
                                {{ char.value }}
                                <span v-if="char.unit_type !== 'значение'" class="text-gray-500 ml-1">
                                    {{ char.unit_type }}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="max-w-7xl mx-auto px-6 py-12">
            <div class="mb-8">
                <Star />
            </div>
            <div class="mb-8">
                <h2 class="text-[28px] text-black font-light italic tracking-tight">Related Products</h2>
            </div>
            <Discount />
        </div>
    </div>

    <Footer />
</template>