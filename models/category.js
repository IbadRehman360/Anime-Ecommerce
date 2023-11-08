import { Schema, model, models } from "mongoose";

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const GeneralCategory = models.Category || model('Category', CategorySchema);

export default GeneralCategory;
