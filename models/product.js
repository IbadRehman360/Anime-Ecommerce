import { Schema, model, models } from "mongoose";

const productSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
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
        stock: {
            colors: {
                type: Map,
                of: {
                    quantity: { type: Number, default: 0, required: true },
                    price: { type: Number, required: true },
                    discount_price: { type: Number },
                },
            },
            sizes: {
                type: Map,
                of: {
                    quantity: { type: Number, default: 0, required: true },
                    price: { type: Number, required: true },
                    discount_price: { type: Number },
                },
            },
            colorswithsize: {
                type: Map,
                of: {
                    type: Map,
                    of: {
                        quantity: { type: Number, default: 0, required: true },
                        price: { type: Number, required: true },
                        discount_price: { type: Number },
                    },
                },
            },
            discount_price: { type: Number },
            price: { type: Number },
            quantity: { type: Number },
        },
        images: {
            type: [String],
            required: true,
        },
        highlights: {
            type: [String],
            required: true,
        }, createdAt: {
            type: Date,
            required: true,
        },
        updatedAt: {
            type: Date,
            required: true,
        },
        is_accessories: {
            type: Boolean,
            required: true,
        },
    },
    { timestamps: true }
);

const Product = models.Product || model("Product", productSchema);

export default Product;
