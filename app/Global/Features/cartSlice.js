import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            const { product, quantity } = action.payload;
            const existingItem = state.items.find(item => item.product.id === product.id);

            if (existingItem) {
                throw new Error('Product is already in the cart. Use increaseQuantity instead.');
            } else {
                state.items.push({ product, quantity });
            }
        },
        removeItem: (state, action) => {
            const indexToRemove = state.items.findIndex(item => item.product.id === action.payload.product.id);

            if (indexToRemove !== -1) {
                state.items.splice(indexToRemove, 1);
            } else {
                throw new Error('Product not found in the cart.');
            }
        },
        increaseQuantity: (state, action) => {
            const item = state.items.find(item => item.product.id === action.payload.product.id);
            if (item) {
                item.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.items.find(item => item.product.id === action.payload.product.id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export default cartSlice.reducer;
