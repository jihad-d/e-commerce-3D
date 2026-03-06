import { create } from "zustand";

const useCartStore = create((set, get) => ({

    selectedColor: "white",
    selectedProduct: 'shoe',
    cartItems: [],

    setColor: (color) => set({ selectedColor: color }),
    setProduct: (product) => set({ selectedProduct: product}),

    addToCart: (item) => 
        set(state => ({
            cartItems: [...state.cartItems, {...item, id: Date.now(), color: state.selectedColor}]
        })),

    removeFromCart: (id) =>
        set(state => ({
            cartItems: state.cartItems.filter(i => i.id !==id)
        })),

    getTotalPrice: () =>
        get().cartItems.reduce((sum, i) => sum + i.price, 0),
}));

export default useCartStore