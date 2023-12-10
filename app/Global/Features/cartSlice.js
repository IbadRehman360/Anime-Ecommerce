import { createSlice } from '@reduxjs/toolkit';
import toast from "react-hot-toast";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            const { product, quantity, color, size } = action.payload;
            const existingItem = state.items.find(item => item.product._id === product._id && item.color === color && item.size === size);

            if (existingItem) {
                throw new Error('Product already in cart. Use increaseQuantity.');
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
            const { product, size, color } = action.payload;
            const item = state.items.find(
                (item) =>
                    item.product._id === product._id &&
                    item.size === size &&
                    item.color === color
            );
            if (item) {
                item.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const { product, size, color } = action.payload;
            const item = state.items.find(
                (item) =>
                    item.product._id === product._id &&
                    item.size === size &&
                    item.color === color
            );
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },

        updateQuantity: (state, action) => {
            const { product, newQuantity, size, color } = action.payload;

            const updatedItems = state.items.map(item => {
                if (
                    item.product._id === product.product._id &&
                    item.color === color &&
                    item.size === size
                ) {
                    console.log(item.product)
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