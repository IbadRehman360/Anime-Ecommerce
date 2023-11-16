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
    reviews_id: [{
        type: Schema.Types.ObjectId,
        ref: 'Review',
    }],
    stock_quantity: {
        type: Number,
        min: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        max: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
        max: Date.now,
    },
    __v: {
        type: Number,
        default: 0,
    },
    images: [{
        type: String,
    }],
    colors: [{
        type: String,
    }],
    sizes: {
        type: Map,
        of: Boolean,
    },
    highlights: [{
        type: String,
    }],
    discount_price: {
        type: Number,
        min: 0,
    },
}, { timestamps: true });

const Product = models.Product || model('Product', productSchema);

export default Product;
