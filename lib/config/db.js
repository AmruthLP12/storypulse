import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://image:image123@cloudinary.ehjh8.mongodb.net/blogs?retryWrites=true&w=majority&appName=cloudinary')
    console.log("DB Connected")
}