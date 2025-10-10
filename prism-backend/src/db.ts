import mongoose, {model, Schema} from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`)

const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String
})

const ContentSchema = new Schema({
    title: String,
    link: String,
    type: String,
    userId: {type: mongoose.Types.ObjectId, ref: "User", required: true},
})

const LinkSchema = new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId}
})

const TagsSchema = new Schema({
    name: {type: String, required: true, unique: true, trim: true}
})
export const UserModel = model("User", UserSchema);
export const ContentModel = model("Content", ContentSchema);
export const LinkModel = model("Links", LinkSchema);