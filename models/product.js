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
            type: {
                quantity: {
                    type: Number,
                    required: true,
                },
                discount_price: {
                    type: Number,
                    required: true,
                },
                price: {
                    type: Number,
                    required: true,
                },
            },
            sizes: {
                type: Map,
                of: {
                    type: {
                        quantity: Number,
                        price: Number,
                        discount_price: Number,
                    },
                    required: true,
                },
                required: true,
            },
            colors: {
                type: Map,
                of: {
                    type: {
                        quantity: Number,
                        price: Number,
                        discount_price: Number,
                    },
                    required: true,
                },
                required: true,
            },
            colorswithsize: {
                type: Map,
                of: {
                    type: {
                        sizes: {
                            type: Map,
                            of: {
                                quantity: Number,
                                price: Number,
                                discount_price: Number,
                            },
                        },
                    },
                },
            },
        },
        images: {
            type: [String],
            required: true,
        },
        highlights: {
            type: [String],
            required: true,
        },
        createdAt: {
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
        __v: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

const Product = models.Product || model("Product", productSchema);

export default Product;
