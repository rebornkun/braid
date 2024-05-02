import { StoreType, cartProductType } from "@/Types/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useAppStore = create<StoreType>()(
  persist(
    (set) => ({
      isUserLoggedIn: false,
      setIsUserLoggedIn: (value: boolean) => {
        set({ isUserLoggedIn: value });
      },
      cart: [],
      addToCart: (item: cartProductType) => {
        set((state) => ({ cart: [...state.cart, item] }));
      },
      mutateCountInCart: (items: cartProductType[]) => {
        set({ cart: items });
      },
    }),
    {
      partialize: (state: StoreType) => ({
        cart: state.cart,
      }),
      name: "cartItems",
    }
  )
);
