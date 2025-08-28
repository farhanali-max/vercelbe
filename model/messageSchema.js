import mongoose from "mongoose";
import validator from "validator";


const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        minlength: [3, "Name must be at least 3 characters"]
    },
    email : {
        type: String,
        required: [true, "Please enter your email"],
        validate: [validator.isEmail, "Please enter a valid email address"]
    },
    subject : {
        type: String,
        required: [true, "Please enter a subject"],
        minlength: [5, "Subject must be at least 5 characters"]
    },
    message : {
        type: String,
        required: [true, "Please enter your message"],
        minlength: [10, "Message must be at least 10 characters"]
    }
});

export const Message = mongoose.model("Message", messageSchema);