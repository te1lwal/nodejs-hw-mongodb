
import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { versionKey: false, timestamps: true });

const UserCollection = model("user", userSchema);

export default UserCollection;