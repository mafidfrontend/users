import { create } from "zustand";
import axios from "axios";
import { ProductStore } from "./types";

export const useProductStore = create<ProductStore>((set) => ({
    productsData: [],
    cart: [],
    loading: false,

    fetchProducts: () => {
        set({ loading: true });
        axios
            .get("https://nt.softly.uz/api/front/products/")
            .then((res) => {
                console.log("API response:", res.data);
                set({ productsData: res.data.items || [], loading: false });
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
