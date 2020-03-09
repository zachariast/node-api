const express = require('express')
const PostController = require('../controllers/PostController')
const router = express.Router()

router.get('/', PostController.postList)
router.get('/:id', PostController.postDetail)
router.post('/', PostController.postAdd)
router.delete('/:id', PostController.postDelete)

module.exports = router
