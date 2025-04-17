// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  coupon: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload);
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    applyCoupon: (state, action) => {
      state.coupon = isValidCoupon(action.payload) ? action.payload : null;
    },
  },
});

export const { addItem, removeItem, applyCoupon } = cartSlice.actions;
export default cartSlice.reducer;

// utils.js
export const isValidCoupon = (code) => {
  const validCoupons = ['DISCOUNT10', 'SAVE20'];
  return validCoupons.includes(code);
};
