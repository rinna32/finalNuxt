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
    category?: string;
    count_review?: string;
    is_available?:string;
    description:string;
    characteristics:Characteristic[];
    color: string;
    brand: string;
    country: string;
    images: ProductImage[];

}

export interface ProductImage {
  id: number;
  image_link: string;
}

export interface Characteristic {
  characteristic: string;      // Название характеристики
  unit_type: string;           // Единица измерения
  value: string;               // Значение
}

export type ProuductCategories = 'phone' | 'tablet' | 'headphones' | 'computer' | 'accessories'
