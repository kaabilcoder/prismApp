import mongoose from "mongoose";
import {Schema, model} from "mongoose";

const LinkSchema = new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId}
})

export const LinkModel = model("Links", LinkSchema);