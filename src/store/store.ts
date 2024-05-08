import { StoreType, cartProductType, productType } from "@/Types/types";
import { db } from "@/config/firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { SetStateAction } from "react";
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
      cartIsOpen: false,
      toogleCartIsOpen: (value: boolean) => {
        set({ cartIsOpen: value });
      },
      shopItems: [],
      setShopItems: (value: productType[]) => {
        set({ shopItems: value });
      },
      isShopItemsLoading: true,
      setIsShopItemsLoading: (value: boolean) => {
        set({ isShopItemsLoading: value });
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

export const useApi = () => {
  const setShopItems = useAppStore((state) => state.setShopItems);
  const setIsShopItemsLoading = useAppStore(
    (state) => state.setIsShopItemsLoading
  );
  const ItemsRef = collection(db, "Items");

  const getAllItems = async () => {
    try {
      // const uid = JSON.parse(userStore)?.uid;
      setIsShopItemsLoading(true);
      onSnapshot(ItemsRef, (docs) => {
        if (docs.metadata.fromCache) {
          // Notification.displayInfo({
          //   message: "Error",
          //   description: "No Internet Connection, Refresh Page!",
          // });
          return;
        }
        const data: productType[] = [];
        docs.forEach((doc: productType | any) => {
          data.push(doc.data());
        });

        console.log("here");
        setShopItems(data);
        setIsShopItemsLoading(false);
      });
    } catch (e) {
      setIsShopItemsLoading(false);
      console.log(e);
      // Notification.displayInfo({
      //   message: "Error",
      //   description: e.code || e.message,
      // });
    }
  };

  const getItemById = async (
    id: string,
    setData: React.Dispatch<SetStateAction<productType>>,
    setIsDataLoading: React.Dispatch<SetStateAction<boolean>>
  ) => {
    try {
      // const uid = JSON.parse(userStore)?.uid;

      const stateQuery = query(ItemsRef, where("id", "==", id));

      onSnapshot(stateQuery, (docs) => {
        if (docs.metadata.fromCache) {
          // Notification.displayInfo({
          //   message: "Error",
          //   description: "No Internet Connection, Refresh Page!",
          // });
          return [];
        }
        const data: productType[] = [];
        docs.forEach((doc: productType | any) => {
          data.push(doc.data());
        });
        console.log("other");

        setData(data[0]);
        setIsDataLoading(false);
      });
    } catch (e) {
      setIsDataLoading(false);
      console.log(e);
      return [];
      // Notification.displayInfo({
      //   message: "Error",
      //   description: e.code || e.message,
      // });
    }
  };

  return {
    getAllItems,
    getItemById,
  };
};
