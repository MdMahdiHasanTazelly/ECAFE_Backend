import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    token: {
        type: String,
    },
    favourites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food",
        default: [],
    }]

});


export const User = mongoose.model("User", userSchema);