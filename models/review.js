import { Schema, model, models } from "mongoose";
import Product from "./product";

const reviewSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    product_id: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    review_text: {
        type: String,
    },
}, { timestamps: true });


const Review = models.Review || model('Review', reviewSchema);

export default Review;
