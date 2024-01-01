import { Schema, model, models } from "mongoose";

const orderSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true,
    },
    items: [{
        type: Schema.Types.ObjectId,
        ref: 'OrderItem',
        required: true,
    }],
    delivery: {
        type: String,
        default: 'Standard',
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    status: {
        type: Number,
        default: 0,
    },
    total: {
        type: Number,
        required: true,
    },
    subtotal: {
        type: Number,
        required: true,
    }

}, { timestamps: true });

const Order = models.Order || model('Order', orderSchema);
export default Order;
