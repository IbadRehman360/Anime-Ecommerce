import { Schema, model, models } from "mongoose";

const orderItemSchema = new Schema({
    product_id: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    size: {
        type: String,
    },
    color: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    discounted_price: {
        type: Number,
    }
}, { timestamps: true });

const OrderItem = models.OrderItem || model('OrderItem', orderItemSchema);
export default OrderItem;
