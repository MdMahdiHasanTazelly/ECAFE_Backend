import mongoose, { Schema } from "mongoose";

const foodSchema = new Schema({
    title: { type: String },
    image: { type: String, },
    originalPrice: { type: Number },
    discountedPrice: { type: Number }
});

export const Food = mongoose.model("Food", foodSchema);