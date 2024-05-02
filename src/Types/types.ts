export type productType = {
  id: string;
  name: string;
  color: string | string[];
  category: string;
  price: number;
  ratings: number;
  image: string;
  discount: number;
  createdAt?: string;
  updateAt?: string;
};

export type cartProductType = productType & {
  count: number;
};

export interface StoreType {
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: (value: boolean) => void;
  cart: cartProductType[];
  addToCart: (items: cartProductType) => void;
  mutateCountInCart: (items: cartProductType[]) => void;
}
