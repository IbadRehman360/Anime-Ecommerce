import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
function handleQuantityUpdate(item, quantity, maxQuantity, maxAllowedQuantity) {
    const totalQuantity = item.quantity + quantity;

    if (totalQuantity > maxQuantity || totalQuantity > maxAllowedQuantity) {
        const errorMessage =
            totalQuantity > maxQuantity
                ? `Sorry, only ${maxQuantity} in stock.`
                : `Sorry, max ${maxAllowedQuantity} items allowed.`;

        toast.error(errorMessage);
    } else {
        item.quantity += quantity;
    }
}

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        removeItem: (state, action) => {
            const { product, color, size } = action.payload;
            const indexToRemove = state.items.findIndex((item) => {
                const isProductIdMatch =
                    item.product._id.toUpperCase() === product.toUpperCase();
                const isColorMatch = color
                    ? item.color && item.color.toUpperCase() === color.toUpperCase()
                    : true;
                const isSizeMatch = size
                    ? item.size && item.size.toUpperCase() === size.toUpperCase()
                    : true;

                return isProductIdMatch && isColorMatch && isSizeMatch;
            });

            if (indexToRemove !== -1) {
                const updatedItems = [
                    ...state.items.slice(0, indexToRemove),
                    ...state.items.slice(indexToRemove + 1),
                ];

                state.items = updatedItems;
            }
        },

        addItem: (state, action) => {
            const { product, quantity, color, size, price, discount_price } =
                action.payload;
            const existingItem = state.items.find(
                (item) =>
                    item.product._id === product._id &&
                    item.color === color &&
                    item.size === size
            );

            if (existingItem) {
                toast.error("Product already in cart. Increase quantity");
            } else {
                toast.success("Product successfully Added to the cart.");

                state.items.push({
                    product,
                    quantity,
                    color,
                    size,
                    price,
                    discount_price,
                });
            }
        },
        increaseQuantity: (state, action) => {
            const { product, size, color, quantity, price, discount_price } =
                action.payload;
            const item = state.items.find((item) => {
                const match =
                    item.product._id === product._id &&
                    item.size === size &&
                    item.color === color;
                return match;
            });
            if (!item) {
                toast.success("Product successfully Added to the cart.");
                state.items.push({
                    product,
                    quantity,
                    color,
                    size,
                    price,
                    discount_price,
                });
            } else {
                const { stock } = product;

                if (stock && stock.colorswithsize) {
                    if (
                        stock.colorswithsize[color] &&
                        stock.colorswithsize[color][size]
                    ) {
                        const maxQuantity = stock.colorswithsize[color][size].quantity;
                        handleQuantityUpdate(item, quantity, maxQuantity, 3);
                        return;
                    }
                }

                if (stock && stock.sizes) {
                    if (stock.sizes[size]) {
                        const maxQuantity = stock.sizes[size].quantity;
                        handleQuantityUpdate(item, quantity, maxQuantity, 3);
                        return;
                    }
                }

                if (stock && stock.colors) {
                    if (stock.colors[color]) {
                        const maxQuantity = stock.colors[color].quantity;
                        handleQuantityUpdate(item, quantity, maxQuantity, 3);
                        return;
                    }
                }

                if (stock && stock.quantity !== undefined) {
                    const maxQuantity = stock.quantity;
                    handleQuantityUpdate(item, quantity, maxQuantity, 3);
                    return;
                }
                toast.error("Invalid product stock information.");
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
        clearCart: (state) => {
            state.items = [];
        },

        updateQuantity: (state, action) => {
            const { product, size, color, newQuantity } = action.payload;
            const updatedItems = state.items.map((item) => {
                if (
                    item.product._id === product.product._id &&
                    item.color === color &&
                    item.size === size
                ) {
                    const { stock } = product.product;
                    if (stock && stock.colorswithsize) {
                        if (
                            stock.colorswithsize[color] &&
                            stock.colorswithsize[color][size]
                        ) {
                            const maxQuantity = stock.colorswithsize[color][size].quantity;
                            return { ...item, quantity: Math.min(newQuantity, maxQuantity) };
                        }
                    }

                    if (stock && stock.sizes) {
                        if (stock.sizes[size]) {
                            const maxQuantity = stock.sizes[size].quantity;
                            return { ...item, quantity: Math.min(newQuantity, maxQuantity) };
                        }
                    }

                    if (stock && stock.colors) {
                        if (stock.colors[color]) {
                            const maxQuantity = stock.colors[color].quantity;
                            return { ...item, quantity: Math.min(newQuantity, maxQuantity) };
                        }
                    }

                    if (stock && stock.quantity !== undefined) {
                        const maxQuantity = stock.quantity;
                        return { ...item, quantity: Math.min(newQuantity, maxQuantity) };
                    }
                }
                return item;
            });

            return { ...state, items: updatedItems };
        },
        updateCartItems: (state, action) => {
            const { productId, quantity, color, size } = action.payload;

            return {
                ...state,
                items: state.items.map((item) => {
                    if (
                        item.product._id === productId &&
                        item.color === color &&
                        item.size === size
                    ) {
                        return {
                            ...item,
                            quantity: quantity,
                        };
                    }
                    return item;
                }),
            };
        },
        removeItemsWithZeroQuantity: (state, action) => {
            const { productId, color, size } = action.payload;
            console.log(productId, color, size);
            const updatedCartItems = state.items.filter(
                (item) =>
                    item.product._id !== productId || (item.color !== color || item.size !== size)
            );

            state.items = updatedCartItems;

        }
    },
});


export const {
    addItem,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    updateQuantity,
    updateCartItems,
    removeItemsWithZeroQuantity
} = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export default cartSlice.reducer;