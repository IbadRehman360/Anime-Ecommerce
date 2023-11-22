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
        type: String,
        required: true,
        enum: ['Pending', 'Shipped', 'Delivered', 'Canceled', "Approved"],
    },
}, { timestamps: true });

const Order = models.Order || model('Order', orderSchema);
export default Order;
