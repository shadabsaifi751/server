import mongoose from "mongoose";

const User = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        quote: { type: String },
    },
    {
        collection: 'user-data'
    }
)

export default mongoose.model('UserData', User)
