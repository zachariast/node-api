const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema(
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

const Category = mongoose.model('Category', CategorySchema)

module.exports = Category
