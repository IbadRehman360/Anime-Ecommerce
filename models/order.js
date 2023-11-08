import { Schema, model, models } from "mongoose";

const orderItemSchema = new Schema({
    order_id: {
        type: Schema.Types.ObjectId,
        ref: 'Order',
    },
    product_id: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
    },
    quantity: {
        type: Number,
        required: true,
    },
    item_price: {
        type: Number,
        required: true,
    },
    size: {
        type: String,
    },
    color: {
        type: String,
    },
}, { timestamps: true });

const OrderItem = models.OrderItem || model('OrderItem', orderItemSchema);

export default OrderItem;
