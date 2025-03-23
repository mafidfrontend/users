import { create } from "zustand";
import axios from "axios";
import { ProductsDatasType, ProductStore } from "./types";

export const useProductStore = create<ProductStore>((set) => ({
    productsData: [],
    cart: [],
    loading: false,

    // Mahsulotlarni olish
    fetchProducts: () => {
        set({ loading: true });
        axios
            .get<ProductsDatasType[]>("https://67df9d1f7635238f9aaa0ed7.mockapi.io/mahsulotlar/product/product")
            .then((res) => {
                set({ productsData: res.data, loading: false });
            })
            .catch(() => {
                set({ loading: false });
            });
    },
    addToCart: (product) => {
        set((state) => ({
            cart: [...state.cart, product], 
        }));
    },
}));
