const mongoose = require('mongoose')

const PostSchema = mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            require: false,
        },
    },
    {
        timestamps: true,
    }
)

const Post = mongoose.model('Post', PostSchema)

module.exports = Post
