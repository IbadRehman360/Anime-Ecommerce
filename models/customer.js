import { Schema, model, models } from "mongoose";

const customerSchema = new Schema({
    email_address: {
        type: String,
        unique: false,
        required: true,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    apartment: {
        type: String,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
    phone: {
        type: Number,
    },
    secondPhone: {
        type: Number,
    },
});

const Customer = models.Customer || model('Customer', customerSchema);
export default Customer;
