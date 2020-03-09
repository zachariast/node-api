const Category = require('../models/Category')

exports.categoryList = async (req, res) => {
    const CategoryEntries = await Category.find()
    res.json(CategoryEntries)
}

exports.categoryDetail = async (req, res) => {
    const result = await Category.find({ _id: req.params.id })
    res.json(result)
}

exports.categoryAdd = async (req, res, next) => {
    if (req.get('X-API-KEY') !== process.env.API_KEY) {
        res.status(401)
        throw new Error('Unauthorized')
    }
    const category = new Category(req.body)
    const createdCategory = await category.save()
    res.json(createdCategory)
}
exports.categoryDelete = async (req, res, next) => {
    const catId = req.params.id
    const deletedCategory = await Category.deleteOne({ _id: catId })

    res.json({ success: catId })
}
