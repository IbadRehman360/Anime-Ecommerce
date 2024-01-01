import { decreaseQuantity, increaseQuantity, removeItem, updateQuantity } from '@app/Global/Features/cartSlice';
import { useDispatch } from 'react-redux';

export const useProductUtils = () => {
    const dispatch = useDispatch();
    const incrementQuantity = (product, size, color, quantity, price,
        discount_price) => {
        dispatch(increaseQuantity({ product, size, color, quantity, price, discount_price }));
    };

    const decrementQuantity = (product, size, color) => {
        dispatch(decreaseQuantity({ product, size, color }));
    };

    const handleRemoveItem = (product, size, color) => {
        dispatch(removeItem({ product, size, color }));
    };

    const handleUpdateQuantity = (product, newQuantity, size, color) => {
        dispatch(updateQuantity({ product, newQuantity, size, color }));
    };
    const isValidPhoneNumber = (value) => {
        const regex = /^(\+92|03)\d{9}$/;
        return regex.test(value.replace(/[^\d+]/g, ''));
    };
    return {
        incrementQuantity,
        decrementQuantity,
        handleRemoveItem,
        handleUpdateQuantity,
        isValidPhoneNumber,
    };
};
