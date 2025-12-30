import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
    foodId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food"
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    quantity: {
        type: Number,
        default: 1
    },
    time: {
        type: Date,
        default: Date.now,
    }
});

export const Order = mongoose.model("Order", orderSchema);