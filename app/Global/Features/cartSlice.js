import { createSlice } from '@reduxjs/toolkit';
import toast from "react-hot-toast";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        removeItem: (state, action) => {
            const indexToRemove = state.items.findIndex(item => item.product._id === action.payload.product);
            if (indexToRemove !== -1) {
                state.items.splice(indexToRemove, 1);
            } else {
                throw new Error('Product not found in the cart.');
            }
        },
        addItem: (state, action) => {
            const { product, quantity, color, size } = action.payload;
            const existingItem = state.items.find(item => item.product._id === product._id && item.color === color && item.size === size);

            if (existingItem) {
                toast.error('Product already in cart. Increase quantity to add more.')

            } else {
                toast.success('Product successfully Added to the cart.');

                state.items.push({ product, quantity, color, size });
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
                if (item.quantity < product.stock_quantity) {
                    item.quantity += 1;
                } else {
                    console.warn('Cannot increase quantity, stock limit reached.');
                }
            }
        },

        increaseQuantity: (state, action) => {
            const { product, size, color, quantity } = action.payload;
            const item = state.items.find(
                (item) =>
                    item.product._id === product._id &&
                    item.size === size &&
                    item.color === color
            );
            if (!item) {
                const existingItem = state.items.find(item => item.product._id === product._id && item.color === color && item.size === size);

                if (existingItem) {
                    toast.error('Product already in cart. Increase quantity to add more.')

                } else {
                    toast.success('Product successfully Added to the cart.');

                    state.items.push({ product, quantity, color, size });
                }
            }
            if (item) {
                if (item.quantity < product.stock_quantity) {
                    if (item.quantity + 1 > 3) {
                        toast.error('Sorry, you can\'t add more than 3 of the same product.');
                    } else {
                        item.quantity += 1;
                    }
                } else {
                    toast.error('Sorry, we don\'t have enough stock for this product.');
                }
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
);

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, clearCart, updateQuantity } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export default cartSlice.reducer;