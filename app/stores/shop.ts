
export type ProductCategory = 
  | 'phone' | 'tablet' | 'headphones' | 'computer' | 'accessories'
  | 'phones' | 'laptops' | 'watches' | 'cameras' | 'gaming'
  | string 


export interface ProductImage {
  id: number
  image_link: string
}

export interface Characteristic {
  characteristic: string
  unit_type: string
  value: string
}


export interface Products {
  id: number
  
  name: string
  price: number
  discountPrice?: number
  
  guarantee: number
  rating: number
  countReview: number
  

  isAvailable: boolean
  
  storeAddress?: string
  

  category?: ProductCategory
  

  count_review?: string
  is_available?: string
  
  description: string
  characteristics: Characteristic[]
  
  color: string
  brand: string
  country: string
  

  images: ProductImage[] | string[]

  discount?: boolean
  discounted?: boolean
  oldPrice?: number
  isNew?: boolean
  isBestseller?: boolean
  isFeatured?: boolean
}