<!-- app/pages/cart.vue -->
<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Products } from '~/types/Products'
import type { CartItem } from '~/composables/useCart'

const { cart, removeFromCart, updateQuantity } = useCart()

// 🔽 ЛОГИКА ПРОМОКОДОВ
const promoInput = ref('')
const appliedPromo = ref<{ code: string; discount: number; type: 'percent' | 'fixed'; expiryDate: string } | null>(null)
const promoMessage = ref<{ type: 'success' | 'error'; text: string } | null>(null)

// База промокодов (замени на fetch с бэкенда)
const promoDatabase = [
    { code: 'SAVE10', discount: 10, type: 'percent' as const, expiryDate: '2025-12-31' },
    { code: 'WELCOME50', discount: 50, type: 'fixed' as const, expiryDate: '2026-12-01' },
    { code: 'SUMMER20', discount: 20, type: 'percent' as const, expiryDate: '2026-12-12' }
]

const applyPromo = () => {
    promoMessage.value = null
    const input = promoInput.value.trim().toUpperCase()

    if (!input) {
        promoMessage.value = { type: 'error', text: 'Enter a promo code' }
        return
    }

    const found = promoDatabase.find(p => p.code === input)

    if (!found) {
        promoMessage.value = { type: 'error', text: 'Promo code not found' }
        return
    }

    if (new Date() > new Date(found.expiryDate)) {
        promoMessage.value = { type: 'error', text: `Promo code "${found.code}" has expired` }
        return
    }

    appliedPromo.value = { code: found.code, discount: found.discount, type: found.type, expiryDate: found.expiryDate }
    promoMessage.value = { type: 'success', text: `Promo code "${found.code}" applied!` }
}

const removePromo = () => {
    appliedPromo.value = null
    promoInput.value = ''
    promoMessage.value = null
}

// 💰 Расчёты с учётом скидки
const subtotal = computed(() => 
    cart.value.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
)

const discountAmount = computed(() => {
    if (!appliedPromo.value) return 0
    if (appliedPromo.value.type === 'percent') {
        return Math.round(subtotal.value * (appliedPromo.value.discount / 100) * 100) / 100
    }
    return Math.min(appliedPromo.value.discount, subtotal.value)
})

const shipping = 29
const tax = 50
const total = computed(() => Math.max(0, subtotal.value - discountAmount.value + shipping + tax))

// 🖼 Изображения (универсальная функция)
const getProductImage = (images: any): string => {
    if (!images || images.length === 0) return '/placeholder.png'
    const first = images[0]
    if (typeof first === 'string') {
        return first.startsWith('http') ? first : `http://localhost:1452/${first}`
    }
    if (first && typeof first === 'object' && 'image_link' in first) {
        const link = first.image_link
        return link.startsWith('http') ? link : `http://localhost:1452/${link}`
    }
    return '/placeholder.png'
}

// 🔽 Обёртка для изменения количества
const updateQuantityWrapper = (id: string, delta: number) => {
    const item = cart.value.find(i => i.id === id)
    if (item) {
        updateQuantity(id, item.quantity + delta)
    }
}

// Обработчик кнопки Checkout
const handleCheckout = () => {
    alert('Congratulations!')
}
</script>

<template>
    <div class="max-w-7xl mx-auto px-6 py-12">
        <h1 class="text-2xl font-light text-gray-900 mb-8">Shopping Cart</h1>

        <!-- Пустая корзина -->
        <div v-if="cart.length === 0" class="text-center py-16">
            <p class="text-gray-500 text-lg mb-6">Your cart is empty</p>
            <NuxtLink to="/catalog"
                class="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                Continue Shopping
            </NuxtLink>
        </div>

        <!-- Товары + Summary -->
        <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <!-- Список товаров -->
            <div class="lg:col-span-2 space-y-6">
                <div v-for="item in cart" :key="item.id" class="flex gap-6 pb-6 border-b border-gray-200">
                    
                    <!-- Картинка -->
                    <div class="w-24 h-24 flex-shrink-0 bg-gray-50 rounded-lg p-2">
                        <img :src="getProductImage(item.product.images)" :alt="item.product.name"
                            class="w-full h-full object-contain" />
                    </div>
                    
                    <!-- Инфо -->
                    <div class="flex-1">
                        <h3 class="font-medium text-gray-900">{{ item.product.name }}</h3>
                        <p class="text-sm text-gray-500 mt-1">#{{ item.product.id }}</p>
                        
                        <!-- Управление количеством -->
                        <div class="flex items-center gap-4 mt-3">
                            <div class="flex items-center gap-3">
                                <button @click="updateQuantityWrapper(item.id, -1)"
                                    class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50">−</button>
                                <span class="w-8 text-center text-sm">{{ item.quantity }}</span>
                                <button @click="updateQuantityWrapper(item.id, 1)"
                                    class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50">+</button>
                            </div>
                            <span class="text-gray-900 font-medium">${{ item.product.price * item.quantity }}</span>
                            
                            <!-- Удалить -->
                            <button @click="removeFromCart(item.id)" class="ml-auto text-gray-400 hover:text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Order Summary -->
            <div class="bg-gray-50 rounded-2xl p-6 h-fit">
                <h2 class="text-lg font-light text-gray-900 mb-6">Order Summary</h2>
                
                <!-- 🔽 ПРОМОКОД -->
                <div class="mb-6">
                    <label class="block text-sm text-gray-600 mb-2">Discount code / Promo code</label>
                    <div class="flex gap-2">
                        <input 
                            v-model="promoInput" 
                            type="text" 
                            placeholder="Enter code" 
                            :disabled="!!appliedPromo"
                            class="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                            @keyup.enter="applyPromo" 
                        />
                        <button 
                            @click="applyPromo" 
                            :disabled="!!appliedPromo"
                            class="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800 disabled:opacity-50 transition-colors"
                        >
                            Apply
                        </button>
                    </div>

                    <!-- Сообщения об ошибке/успехе -->
                    <p v-if="promoMessage" 
                        :class="['mt-2 text-sm', promoMessage.type === 'error' ? 'text-red-500' : 'text-green-600']">
                        {{ promoMessage.text }}
                    </p>

                    <!-- Применённый промокод -->
                    <div v-if="appliedPromo" 
                        class="mt-3 flex items-center justify-between bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                        <span class="text-sm font-medium text-green-800">✅ {{ appliedPromo.code }} applied</span>
                        <button @click="removePromo" class="text-xs text-red-500 hover:underline">Remove</button>
                    </div>
                </div>
                
                <!-- Бонусная карта -->
                <div class="mb-6">
                    <label class="block text-sm text-gray-600 mb-2">Your bonus card number</label>
                    <div class="flex gap-2">
                        <input type="text" placeholder="Enter Card Number"
                            class="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <button class="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100">Apply</button>
                    </div>
                </div>
                
                <!-- Итого -->
                <div class="space-y-3 pt-6 border-t border-gray-200">
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Subtotal</span>
                        <span class="font-medium">${{ subtotal }}</span>
                    </div>
                    
                    <!-- 🔽 Строка скидки (показывается только если есть промокод) -->
                    <div v-if="appliedPromo" class="flex justify-between text-sm text-green-600">
                        <span>Discount ({{ appliedPromo.code }})</span>
                        <span class="font-medium">−${{ discountAmount }}</span>
                    </div>
                    
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Estimated Tax</span>
                        <span class="font-medium">${{ tax }}</span>
                    </div>
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Estimated shipping & Handling</span>
                        <span class="font-medium">${{ shipping }}</span>
                    </div>
                    <div class="flex justify-between text-base font-medium pt-3 border-t border-gray-200">
                        <span>Total</span>
                        <span>${{ total }}</span>
                    </div>
                </div>
                
                <!-- Кнопка Checkout -->
                <button @click="handleCheckout"
                    class="w-full mt-6 bg-black text-white py-3.5 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                    Checkout
                </button>
            </div>
            
        </div>
    </div>
</template>