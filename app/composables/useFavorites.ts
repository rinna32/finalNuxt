import type { Products } from '~/types/Products'

export const useFavorites = () => {
    const favorites = useState<Products[]>('favorites', () => [])

    const addToFavorites = (product: Products) => {
        if (!favorites.value.find(item => item.id === product.id)) {
            favorites.value.push(product)
        }
    }

    const removeFromFavorites = (productId: string) => { 
        const index = favorites.value.findIndex(item => item.id === productId)
        if (index !== -1) {
            favorites.value.splice(index, 1)
        }
    }

    const isInFavorites = (productId: string): boolean => { 
        return favorites.value.some(item => item.id === productId)
    }

    const clearFavorites = () => {
        favorites.value = []
    }

    const count = computed(() => favorites.value.length)

    return {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isInFavorites,
        clearFavorites,
        count
    }
}