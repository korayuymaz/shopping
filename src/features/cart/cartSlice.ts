import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../type";

// Define a type for the slice state
export interface CartItem {
  product: Product;
  quantity: number;
}

// Define the initial state using that type
export interface CartState {
  items: CartItem[];
  totalCount: number;
}

const initialState: CartState = {
  items: [],
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existingItem = state.items.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += 1; // Ürün zaten varsa adetini artır
      } else {
        state.items.push({ product, quantity: 1 }); // Ürün yoksa yeni ürün ekle
      }

      state.totalCount += 1; // Toplam ürün sayısını artır
    },

    // Ürünü sepetten çıkarma action'ı
    removeProduct: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const existingItem = state.items.find(
        (item) => item.product.id === productId
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1; // Eğer ürün adeti 1'den fazlaysa azalt
        } else {
          state.items = state.items.filter(
            (item) => item.product.id !== productId
          ); // Eğer adet 1'se, ürünü sepetten çıkar
        }
        state.totalCount -= 1; // Toplam ürün sayısını azalt
      }
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
