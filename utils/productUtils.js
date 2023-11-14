import { decreaseQuantity, increaseQuantity, removeItem, updateQuantity } from '@app/Global/Features/cartSlice';
import { useDispatch } from 'react-redux';

export const useProductUtils = () => {
    const dispatch = useDispatch();

    const incrementQuantity = (product, size) => {
        dispatch(increaseQuantity({ product, size }));
    };

    const decrementQuantity = (product, size) => {
        dispatch(decreaseQuantity({ product, size }));
    };
    const handleRemoveItem = (product) => {
        dispatch(removeItem({ product }));
    };
    const handleupdateQuantity = (product, newQuantity) => {
        dispatch(updateQuantity({ product, newQuantity }));
    };
    const isValidPhoneNumber = (value) => {
        const regex = /^(\+92|03)\d{9}$/;
        return regex.test(value);
    };

    return { incrementQuantity, decrementQuantity, handleRemoveItem, handleupdateQuantity, isValidPhoneNumber };
};
