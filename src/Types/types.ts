import { TypedObject } from "sanity";

export type productType = {
  _id: string;
  name: string;
  brand: string;
  color: string[];
  length: number[];
  description: TypedObject | TypedObject[];
  category: string;
  price: number;
  ratings: number;
  image: string;
  discount: number;
  stock: number;
  featured: boolean;
  _createdAt?: string;
  _updateAt?: string;
};

export type cartProductType = productType & {
  count: number;
  lengthSelected: number;
  finalPrice: number;
  processTime: "Normal" | "Express";
};

export interface StoreType {
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: (value: boolean) => void;
  cart: cartProductType[];
  addToCart: (items: cartProductType) => void;
  mutateCountInCart: (items: cartProductType[]) => void;
  cartIsOpen: boolean;
  toogleCartIsOpen: (value: boolean) => void;
  shopItems: productType[];
  setShopItems: (value: productType[]) => void;
  isShopItemsLoading: boolean;
  setIsShopItemsLoading: (value: boolean) => void;
}

export type TShopFilters = {
  category: undefined | string[];
  color: string;
  search: string;
  priceMin: number;
  priceMax: number;
  discount: number;
};
