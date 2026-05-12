export interface Products {
    id:string;
    name: string;
    price: number;
    discountPrice?: number;
    guarantee: number;
    rating: number;
    countReview: number;
    isAvailable: true;
    storeAddress?: string;
    color: string;
    brand: string;
    country: string;
    images: ProductImage[];

}

export interface ProductImage {
  id: number;
  image_link: string;
}

export type ProuductCategories = 'phone' | 'tablet' | 'headphones' | 'computer' | 'accessories'
