import { Schema, model, models } from "mongoose";

const animeCategorySchema = new Schema({
    title: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const AnimeCategory = models.AnimeCategory || model('AnimeCategory', animeCategorySchema);

export default AnimeCategory;
