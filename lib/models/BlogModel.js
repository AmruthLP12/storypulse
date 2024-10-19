import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    author_img: {
        type: String,
        require: true
    },
    date: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

const BlogModel = mongoose.models.blog || mongoose.model('blog', schema)

export default BlogModel