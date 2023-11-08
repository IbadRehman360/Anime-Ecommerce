import { Schema, model, models } from "mongoose";

const orderSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    order_date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['Pending', 'Shipped', 'Delivered', 'Canceled'],
    },
    total_amount: {
        type: Number,
        required: true,
        min: 0,
    },
}, { timestamps: true });

const Order = models.Order || model('Order', orderSchema);

export default Order;
