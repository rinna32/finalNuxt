// composables/useCart.ts
import type { Products } from '~/types/Products'

export interface CartItem {
    id: string              // 🔁 string, как в Products.id
    product: Products
    quantity: number
}

export const useCart = () => {
    const cart = useState<CartItem[]>('cart', () => [])

    const addToCart = (product: Products, quantity: number = 1) => {
        const existingItem = cart.value.find(item => item.id === product.id)

        if (existingItem) {
            existingItem.quantity += quantity
        } else {
            cart.value.push({
                id: product.id,  // product.id — string
                product,
                quantity
            })
        }
    }

    const removeFromCart = (productId: string) => {  // 🔁 string
        const index = cart.value.findIndex(item => item.id === productId)
        if (index !== -1) {
            cart.value.splice(index, 1)
        }
    }

    const updateQuantity = (productId: string, quantity: number) => {  // 🔁 string
        const item = cart.value.find(item => item.id === productId)
        if (item) {
            item.quantity = Math.max(1, quantity)
        }
    }

    const clearCart = () => {
        cart.value = []
    }

    const totalItems = computed(() => {
        return cart.value.reduce((sum, item) => sum + item.quantity, 0)
    })

    const totalPrice = computed(() => {
        return cart.value.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
    })

    

    return {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice
    }
}