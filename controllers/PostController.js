const Post = require('../models/Post')

exports.postList = async (req, res) => {
    const entries = await Post.find()
    res.json(entries)
}

exports.postDetail = async (req, res) => {
    const result = await Post.find({ _id: req.params.id })
    res.json(result)
}

exports.postAdd = async (req, res, next) => {
    if (req.get('X-API-KEY') !== process.env.API_KEY) {
        res.status(401)
        throw new Error('Unauthorized')
    }
    const post = new Post(req.body)
    const createdPost = await post.save()
    res.json(createdPost)
}
exports.postDelete = async (req, res, next) => {
    const postId = req.params.id
    const deletedPost = await Post.deleteOne({ _id: postId })

    res.json({ success: postId })
}
