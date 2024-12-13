import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    fbId: {
        type: String,
        required: true,
        unique: true
    },
    avatar: {
        type: String,
    },
}, { timestamps: true })

const User = mongoose.model('User', userSchema, 'users')

export default User