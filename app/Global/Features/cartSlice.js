import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            const { product, quantity, color, size } = action.payload;
            const existingItem = state.items.find(item => item.product.id === product.id && item.color === color && item.size === size);

            if (existingItem) {
                throw new Error('Product is already in the cart. Use increaseQuantity instead.');
            } else {
                state.items.push({ product, quantity, color, size });
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
            const { product, size } = action.payload;
            const item = state.items.find(
                (item) => item.product.id === product.id && item.size === size
            );
            if (item) {
                item.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const { product, size } = action.payload;
            const item = state.items.find(
                (item) => item.product.id === product.id && item.size === size
            );
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        updateQuantity: (state, action) => {
            const { product, newQuantity } = action.payload;
            const updatedItems = state.items.map(item => {
                if (item.product.id === product.id) {
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });

            return { ...state, items: updatedItems };
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, clearCart, updateQuantity } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export default cartSlice.reducer;