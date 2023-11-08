import { Schema, model, models } from "mongoose";

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    highlight: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    category_id: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    anime_category_id: {
        type: Schema.Types.ObjectId,
        ref: 'AnimeCategory',
    },
    image_url: {
        type: String,
    },
    stock_quantity: {
        type: Number,
        min: 0,
    },
    reviews_id: [{
        type: Schema.Types.ObjectId,
        ref: 'Review',
    }],
}, { timestamps: true });

const Product = models.Product || model('Product', productSchema);

export default Product;
