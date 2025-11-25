import mongoose from "mongoose";
import {Schema, model} from "mongoose";

const ContentSchema = new Schema({
    title: String,
    link: String,
    type: String,
    userId: {type: mongoose.Types.ObjectId, ref: "User", required: true},
});

// const TagsSchema = new Schema({
//     name: {type: String, required: true, unique: true, trim: true}
// })

export const ContentModel = model("Content", ContentSchema);
