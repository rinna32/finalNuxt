<script setup lang="ts">
import Star from '~/components/Star.vue'
import type { Products } from '~/types/Products'

const route = useRoute()
const productId = route.params.id

const activeImage = ref(0)

const { data: product } = await useFetch<Products>(
  `http://localhost:1452/api/products/${productId}`
)
</script>

<template>
  <div class="min-h-screen bg-white">

    <div class="max-w-7xl mx-auto px-6 py-6">
      <NuxtLink
        to="/catalog"
        class="inline-flex items-center text-sm text-gray-500 hover:text-black transition-colors"
      >
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>

        Назад к каталогу
      </NuxtLink>
    </div>

    <!-- Товар -->
    <div class="max-w-7xl mx-auto px-6 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

        <!-- Галерея -->
        <div class="flex gap-4">

          <!-- Миниатюры -->
          <div class="flex flex-col gap-3 flex-shrink-0">
            <div
              v-for="(img, i) in product?.images"
              :key="i"
              @click="activeImage = i"
              :class="[
                'w-20 h-24 rounded-lg border-2 cursor-pointer overflow-hidden p-1 transition-all',
                activeImage === i
                  ? 'border-black'
                  : 'border-transparent hover:border-gray-300'
              ]"
            >
              <img
                :src="`http://localhost:1452/${img}`"
                :alt="product?.name"
                class="w-full h-full object-contain"
              />
            </div>
          </div>

          <!-- Основная картинка -->
          <div class="flex-1 flex items-center justify-center bg-white">
            <img
              :src="`http://localhost:1452/${product?.images?.[activeImage]}`"
              :alt="product?.name"
              class="max-h-[480px] object-contain"
            />
          </div>
        </div>

        <!-- Информация -->
        <div class="space-y-6">

          <h1 class="text-3xl font-light italic text-gray-900">
            {{ product?.brand }} {{ product?.name }}
          </h1>

          <div class="flex items-baseline gap-3">
            <span class="text-3xl font-light text-gray-900">
              ${{ product?.price }}
            </span>
          </div>

          <!-- Характеристики с иконками -->
          <div class="grid grid-cols-3 gap-3">

            <!-- Screen size -->
            <div class="bg-gray-50 rounded-xl p-4 flex items-start gap-3">
              <svg class="w-6 h-6 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <div>
                <span class="text-xs text-gray-400 font-light">Screen size</span>
                <p class="text-sm font-normal text-gray-700 mt-1">
                  6.7"
                </p>
              </div>
            </div>

            <!-- CPU -->
            <div class="bg-gray-50 rounded-xl p-4 flex items-start gap-3">
              <svg class="w-6 h-6 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
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

            <!-- Number of Cores -->
            <div class="bg-gray-50 rounded-xl p-4 flex items-start gap-3">
              <svg class="w-6 h-6 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              <div>
                <span class="text-xs text-gray-400 font-light">Number of Cores</span>
                <p class="text-sm font-normal text-gray-700 mt-1">
                  6
                </p>
              </div>
            </div>

            <!-- Main camera -->
            <div class="bg-gray-50 rounded-xl p-4 flex items-start gap-3">
              <svg class="w-6 h-6 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <span class="text-xs text-gray-400 font-light">Main camera</span>
                <p class="text-sm font-normal text-gray-700 mt-1">
                  48-12-12 MP
                </p>
              </div>
            </div>

            <!-- Front camera -->
            <div class="bg-gray-50 rounded-xl p-4 flex items-start gap-3">
              <svg class="w-6 h-6 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <span class="text-xs text-gray-400 font-light">Front camera</span>
                <p class="text-sm font-normal text-gray-700 mt-1">
                  12 MP
                </p>
              </div>
            </div>

            <!-- Battery capacity -->
            <div class="bg-gray-50 rounded-xl p-4 flex items-start gap-3">
              <svg class="w-6 h-6 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <div>
                <span class="text-xs text-gray-400 font-light">Battery capacity</span>
                <p class="text-sm font-normal text-gray-700 mt-1">
                  4323 mAh
                </p>
              </div>
            </div>

          </div>

          <!-- Описание -->
          <p class="text-sm text-gray-400 italic font-light leading-relaxed">
            Enhanced capabilities thanks to an enlarged display of 6.7 inches and work without recharging throughout the day. 
            Incredible photos as in weak, yes and in bright light using the new system with two cameras 
            <NuxtLink to="#" class="underline text-gray-400 hover:text-gray-600">more...</NuxtLink>
          </p>

          <!-- Кнопки -->
          <div class="flex gap-3">
            <button
              class="flex-1 border-2 border-gray-900 text-gray-900 py-3.5 rounded-lg hover:bg-gray-900 hover:text-white transition-all text-sm font-medium"
            >
              Add to Wishlist
            </button>

            <button
              class="flex-1 bg-gray-900 text-white py-3.5 rounded-lg hover:bg-gray-700 transition-all text-sm font-medium"
            >
              Add to Cart
            </button>
          </div>

          <!-- Инфо с иконками -->
          <div class="grid grid-cols-3 gap-6">

            <!-- Free Delivery -->
            <div class="flex items-start gap-3">
              <div class="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-500 italic font-light">Free Delivery</p>
                <p class="text-sm font-normal text-gray-900">1-2 day</p>
              </div>
            </div>

            <!-- In Stock -->
            <div class="flex items-start gap-3">
              <div class="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-500 italic font-light">In Stock</p>
                <p class="text-sm font-normal text-gray-900">Today</p>
              </div>
            </div>

            <!-- Guaranteed -->
            <div class="flex items-start gap-3">
              <div class="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
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

    <!-- Details -->
    <div class="bg-gray-50 py-16">
      <div class="max-w-5xl mx-auto px-6">

        <div class="bg-white rounded-2xl p-8 lg:p-12">

          <h2 class="text-xl font-light italic text-gray-900 mb-6">
            Details
          </h2>

          <!-- Длинное описание в Details -->
          <p class="text-sm text-gray-400 italic font-light leading-relaxed mb-8">
            Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays. Both critics and mass consumers always praise the quality of the picture provided by the products of the Californian brand. And last year's 6.7-inch Retina panels, which had ProMotion, caused real admiration for many.
          </p>

          <div class="space-y-0">

            <div
              v-for="(char, index) in product?.characteristics"
              :key="index"
              class="flex justify-between items-start py-4 border-b border-gray-100 last:border-0"
            >
              <span class="text-sm text-gray-500 pr-4">
                {{ char.characteristic }}
              </span>

              <span class="text-sm text-gray-900 text-right whitespace-nowrap">
                {{ char.value }}

                <span
                  v-if="char.unit_type !== 'значение'"
                  class="text-gray-500 ml-1"
                >
                  {{ char.unit_type }}
                </span>
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- Рейтинг и Related Products секция -->
    <div class="max-w-7xl mx-auto px-6 py-12">
      
      <!-- Рейтинг -->
      <div class="mb-8">
        <Star />
      </div>

      <!-- Related Products заголовок -->
      <div class="mb-8">
        <h2 class="text-[28px] text-black font-light italic tracking-tight">
          Related Products
        </h2>
      </div>

      <!-- Discount компонент с товарами -->
      <Discount />
      
    </div>

  </div>

  <Footer />

</template>