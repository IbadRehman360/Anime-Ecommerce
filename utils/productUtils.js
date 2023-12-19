import { decreaseQuantity, increaseQuantity, removeItem, updateQuantity } from '@app/Global/Features/cartSlice';
import { useDispatch } from 'react-redux';

export const useProductUtils = () => {
    const dispatch = useDispatch();
    const incrementQuantity = (product, size, color, quantity) => {
        dispatch(increaseQuantity({ product, size, color, quantity }));
    };

    const decrementQuantity = (product, size, color) => {
        dispatch(decreaseQuantity({ product, size, color }));
    };

    const handleRemoveItem = (product) => {
        dispatch(removeItem({ product }));
    };

    const handleUpdateQuantity = (product, newQuantity, size, color) => {
        console.log(product, color, size, newQuantity)
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
