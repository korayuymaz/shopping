import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { Product } from "../../type";

// Define a type for the slice state
export interface CartState {
  products: Product[];
  count: number;
}

// Define the initial state using that type
const initialState: CartState = {
  products: [],
  count: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      console.log("Payload:", action.payload);
      state.products.push(action.payload);
      state.count += 1;
    },
  },
});

export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
