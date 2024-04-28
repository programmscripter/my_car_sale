import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    age: {
      type: Number,
      required: false
    },
    name: {
        type: String,
        required: true
    },
    gender: {
       type: String,
       requerd: false
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

export const UserModel = mongoose.model('user', UserSchema);