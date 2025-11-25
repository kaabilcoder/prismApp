import mongoose, {model, Schema } from "mongoose";

const UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    email: {type: String, unique: true},
    password: String
}, {
    timestamps: true
});

export const UserModel = model("User", UserSchema);
