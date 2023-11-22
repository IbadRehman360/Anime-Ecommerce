import { decreaseQuantity, increaseQuantity, removeItem, updateQuantity } from '@app/Global/Features/cartSlice';
import { useDispatch } from 'react-redux';

export const useProductUtils = () => {
    const dispatch = useDispatch();
    const incrementQuantity = (product, size, color) => {
        dispatch(increaseQuantity({ product, size, color }));
    };

    const decrementQuantity = (product, size, color) => {
        dispatch(decreaseQuantity({ product, size, color }));
    };

    const handleRemoveItem = (product) => {
        dispatch(removeItem({ product }));
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
