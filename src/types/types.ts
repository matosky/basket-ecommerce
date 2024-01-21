export interface Product {
    id: number;
    title: string;
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    images: string[];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
  }

  export interface CartItem {
    id: number;
    thumbnail: string;
    title: string;
    quantity: number;
    price: number;
  }

  export interface WishListItem {
    id: number;
    thumbnail: string;
    title: string;
  }
  